window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f133","name":"atlas.search_pos","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"atlas"},{"field":"Name","value":"search_pos"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION atlas.search_pos(hasura_session json, _search text DEFAULT NULL::text, swlat double precision DEFAULT NULL::double precision, swlng double precision DEFAULT NULL::double precision, nelat double precision DEFAULT NULL::double precision, nelng double precision DEFAULT NULL::double precision)\r\n RETURNS SETOF pos\r\n LANGUAGE plpgsql\r\n STABLE\r\nAS $function$\r\nDECLARE\r\n  userTsJson jsonb;\r\n  userTs text[];\r\n  userRegionsJson jsonb;\r\n  userRegions text[];\r\n  userOrgStructure uuid;\r\n  userOrgStructurePath text;\r\n  userBranch text;\r\n  select_query text;\r\n  userTsTypeCheck text;\r\n  userOrgs uuid[] default array[]::uuid[];\r\nBEGIN \r\n  /* залогиненый юзер */\r\n  SELECT u.pos_ts\r\n    ,u.regions\r\n    ,u.org_structure_id\r\n    ,o.path_info->>'branch' \r\n    ,o.path \r\n  INTO userTsJson, userRegionsJson, userOrgStructure, userBranch, userOrgStructurePath\r\n  FROM public.user u \r\n  LEFT JOIN public.org_structure o ON o.id = u.org_structure_id\r\n  WHERE email = (hasura_session->>'x-hasura-user-id')::text;\r\n  \r\n  SELECT jsonb_typeof(userTsJson) INTO userTsTypeCheck;\r\n  \r\n  IF userTsTypeCheck <> 'array'\r\n  \tTHEN userTsJson := '[]'::jsonb;\r\n  END IF;\r\n  \r\n    /* дозволені оргструктури  */\r\n  SELECT array( SELECT org_structure_id INTO userOrgs FROM public.user_acl WHERE user_id = (hasura_session->>'x-hasura-user-id')::text);\r\n  userOrgs := array_append(userOrgs, userOrgStructure);\r\n\r\n  select_query := 'SELECT pos.* FROM public.pos WHERE pos.is_active = true AND pos.org_structure_id IS NOT NULL ';\r\n\r\n  /* Выбор по ключевому слову или коррдинатам */\r\n  IF _search IS NOT NULL\r\n  \tTHEN select_query := select_query || ' AND pos.fts_col @@ websearch_to_tsquery(''russian'', ' || quote_literal(_search) || ')  ';\r\n    ELSE IF swLat IS NOT NULL \r\n\t\t\tAND swLng IS NOT NULL\r\n\t\t\tAND neLat IS NOT NULL\r\n\t\t\tAND neLng IS NOT NULL\r\n\t\tTHEN select_query := select_query || ' AND CAST(pos.coordinates->''lat'' AS float) BETWEEN ' || swLat || ' AND ' || neLat || ' AND CAST(pos.coordinates->''long'' as float) BETWEEN ' || swLng || ' AND ' || neLng;\r\n  \t\tELSE RAISE EXCEPTION  'Should define _search OR lat/lng params';\r\n\t\tEND IF;\r\n  END IF;\r\n  \r\n  IF  userOrgStructure NOT IN (\r\n    'ba45c5dc-0ed6-4e2c-a635-741a4620ca24',\r\n    '745344e9-dbc7-4476-a63c-3b919271bcc2',\r\n    'a2fcde1b-b67a-4cec-b6ea-30c80be12d97',\r\n    'f6b9c173-d45f-4c95-8908-b5e80e61ba24',\r\n    'e7112eed-4641-472b-a915-58b803b4d88a'\r\n  ) THEN\r\n  /* ограничение по маршрутам для торгового персонала */\r\n -- IF userOrgStructurePath IS NOT NULL AND userBranch IS NOT NULL AND userBranch = 'sale' THEN\r\n      --select_query := select_query || ' AND (EXISTS (SELECT * FROM public.pos_acl WHERE pos_acl.pos_id = pos.id AND pos_acl.org_structure_id = ''' || userOrgStructure || ''') ';\r\n      select_query := select_query || ' AND (EXISTS (SELECT * FROM public.pos_acl WHERE pos_acl.pos_id = pos.id AND pos_acl.org_structure_id IN (''' || array_to_string(userOrgs, ''', ''') || ''' ) )';\r\n      select_query := select_query || ' OR pos.org_structure_id IN (SELECT id FROM public.org_structure WHERE org_structure.path  LIKE ' || quote_literal(userOrgStructurePath)  || ' || ''%'' ))';\r\n -- END IF;\r\n  \r\n  /* ограничение по TC */\r\n  SELECT array(SELECT jsonb_array_elements_text(userTsJson)) INTO userTs;\r\n  IF array_length(userTs,1) > 0 THEN\r\n      select_query := select_query || ' AND pos.info->>''tsId'' IN(''' || array_to_string(userTs, ''', ''') || ''') ';\r\n  END IF;\r\n\r\n  /* ограничение по стране */\r\n  SELECT array(SELECT jsonb_array_elements_text(userRegionsJson)) INTO userRegions;\r\n  IF array_length(userRegions,1) > 0 THEN\r\n      select_query := select_query || ' AND pos.region IN (''' || array_to_string(userRegions, ''', ''') || ''') ';\r\n  ELSE\r\n      select_query := select_query || ' AND pos.region = ''undefined'' ';\r\n  END IF; \r\n   END IF; \r\n  \r\n  /* limit */\r\n  IF _search IS NOT NULL THEN select_query := select_query || ' LIMIT 20 ';  END IF;\r\n\r\n  RETURN QUERY EXECUTE select_query;\r\nEND\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"pos","custom_fields":{}},{"name":"hasura_session","description":null,"mode":"IN","data_type":"json","custom_fields":{}},{"name":"_search","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"swlat","description":null,"mode":"IN","data_type":"double precision","custom_fields":{}},{"name":"swlng","description":null,"mode":"IN","data_type":"double precision","custom_fields":{}},{"name":"nelat","description":null,"mode":"IN","data_type":"double precision","custom_fields":{}},{"name":"nelng","description":null,"mode":"IN","data_type":"double precision","custom_fields":{}}],"dependencies":null,"imported_at":"2023-11-29 12:21"};