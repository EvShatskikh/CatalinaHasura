window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f289","name":"public.search_pos","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"search_pos"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.search_pos(hasura_session json, _search text)\r\n RETURNS SETOF pos\r\n LANGUAGE plpgsql\r\n STABLE\r\nAS $function$\r\nDECLARE\r\n  userTsJson jsonb;\r\n  userTs text[];\r\n  userRegionsJson jsonb;\r\n  userRegions text[];\r\n  select_query text;\r\nBEGIN \r\n  /* залогиненый юзер */\r\n  SELECT pos_ts, regions INTO userTsJson, userRegionsJson FROM public.user u WHERE email = (hasura_session->>'x-hasura-user-id')::text;\r\n\r\n  select_query := 'SELECT p.* FROM pos p WHERE fts_col @@ websearch_to_tsquery(''russian'', ' || quote_literal(_search) || ')  ';\r\n\r\n  /* ограничение по TC */\r\n  SELECT array(SELECT jsonb_array_elements_text(userTsJson)) INTO userTs;\r\n  IF array_length(userTs,1) > 0 THEN\r\n      select_query := select_query || ' AND info->>''tsId'' IN(''' || array_to_string(userTs, ''', ''') || ''') ';\r\n  END IF;\r\n\r\n  /* ограничение по стране */\r\n  SELECT array(SELECT jsonb_array_elements_text(userRegionsJson)) INTO userRegions;\r\n  IF array_length(userRegions,1) > 0 THEN\r\n      select_query := select_query || ' AND region IN (''' || array_to_string(userRegions, ''', ''') || ''') ';\r\n  ELSE\r\n      select_query := select_query || ' AND region = ''undefined'' ';\r\n  END IF;\r\n\r\n  /* limit */\r\n  select_query := select_query || ' LIMIT 20 ';\r\n\r\n  RETURN QUERY EXECUTE select_query;\r\nEND\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"pos","custom_fields":{}},{"name":"hasura_session","description":null,"mode":"IN","data_type":"json","custom_fields":{}},{"name":"_search","description":null,"mode":"IN","data_type":"text","custom_fields":{}}],"dependencies":null,"imported_at":"2023-11-29 12:21"};