window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f174","name":"public.export_pos_matrix","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"export_pos_matrix"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.export_pos_matrix(_matrix_id integer, _search text DEFAULT NULL::text)\r\n RETURNS SETOF return_jsonb_f\r\n LANGUAGE plpgsql\r\n STABLE\r\nAS $function$\r\nDECLARE\r\n  select_query text;\r\nBEGIN\r\n    select_query := 'SELECT jsonb_build_object(\r\n      ''id'', p.id::text,\r\n      ''name'', CASE WHEN p.trading_name!= '''' THEN concat (p.trading_name, '' ('', p.name, '')'') ELSE p.name END,\r\n      ''address'', p.address::text,\r\n      ''channel'', p.info::json->''channel'',\r\n      ''type'', p.info::json->''olType'',\r\n      ''subType'', p.info::json->''olSubType'',\r\n      ''chain'', p.info::json->''networkName'',\r\n      ''subChain'', p.info::json->''subNetworkName'',\r\n      ''format'', p.info::json->''externalNetwork'',\r\n      ''region'', p.info::json->''region'',\r\n      ''province'', p.info::json->''province'',\r\n      ''city'', p.info::json->''city'',\r\n      ''district'', p.info::json->''district'',\r\n      ''doors'', p.doors::text,\r\n    ) AS value FROM pos p ';\r\n\r\n    select_query := select_query || ' LEFT JOIN org_structure o ON o.id = p.org_structure_id ';\r\n\r\n    select_query := select_query || ' WHERE p.is_active = true  '; /* replace  is_active ?*/\r\n\r\n    /* матрица */\r\n    IF _matrix_id IS NOT NULL THEN\r\n      select_query := select_query || ' AND EXISTS (SELECT * FROM matrix_m2m_pos m2p WHERE m2p.pos_id = p.id AND m2p.matrix_id = ' || _matrix_id || ')';\r\n    END IF;\r\n\r\n    /* поисковое слово */\r\n    IF _search IS NOT NULL THEN\r\n        select_query := select_query || ' AND fts_col @@ websearch_to_tsquery(''russian'', ' || quote_literal(_search) || ')  ';\r\n    END IF;\r\n\r\n    /* order by */\r\n    select_query := select_query || ' ORDER BY p.id DESC ';\r\n\r\n    RETURN QUERY EXECUTE select_query;\r\nEND\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"return_jsonb_f","custom_fields":{}},{"name":"_matrix_id","description":null,"mode":"IN","data_type":"integer","custom_fields":{}},{"name":"_search","description":null,"mode":"IN","data_type":"text","custom_fields":{}}],"dependencies":null,"imported_at":"2023-11-29 12:21"};