window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f297","name":"public.search_pos_plano_set_count","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"search_pos_plano_set_count"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.search_pos_plano_set_count(_ids bigint[] DEFAULT ARRAY[]::bigint[], _search text DEFAULT NULL::text, _plano_set_id integer DEFAULT NULL::integer, _info_filters text DEFAULT NULL::text, _path_filters text DEFAULT NULL::text)\r\n RETURNS SETOF return_int_f\r\n LANGUAGE plpgsql\r\n STABLE\r\nAS $function$\r\nDECLARE\r\n  select_query text;\r\nBEGIN\r\n    select_query := 'SELECT count(p.id) as value FROM pos p ';\r\n    /* Если есть поиск по территории - добавляем join */\r\n    IF _path_filters IS NOT NULL THEN\r\n        select_query := select_query || ' LEFT JOIN org_structure o ON o.id = p.org_structure_id ';\r\n    END IF;\r\n    select_query := select_query || ' WHERE for_matrix = true  ';\r\n\r\n    /* ids*/\r\n    IF array_length(_ids,1) > 0 THEN\r\n        select_query := select_query || ' AND p.id IN (' || array_to_string(_ids, ', ') || ')  ';\r\n    END IF;\r\n\r\n    /* набор (0 - точки без набора, null - не фильтруем по набору)*/\r\n    IF _plano_set_id IS NOT NULL THEN\r\n      IF _plano_set_id = 0 THEN\r\n        select_query := select_query || ' AND NOT EXISTS (SELECT * FROM plano.set_m2m_pos ps2p WHERE ps2p.pos_id = p.id )';\r\n      ELSE\r\n        select_query := select_query || ' AND EXISTS (SELECT * FROM plano.set_m2m_pos ps2p WHERE ps2p.pos_id = p.id AND ps2p.set_id = ' || _plano_set_id || ')';\r\n      END IF;\r\n    END IF;\r\n\r\n    /* поиск по фильтрам */\r\n    IF _info_filters IS NOT NULL THEN\r\n        select_query := select_query || _info_filters;\r\n    END IF;\r\n\r\n    /* поиск по территории */\r\n    IF _path_filters IS NOT NULL THEN\r\n        select_query := select_query ||  _path_filters;\r\n    END IF;\r\n\r\n    /* поисковое слово */\r\n    IF _search IS NOT NULL THEN\r\n        select_query := select_query || ' AND fts_col @@ websearch_to_tsquery(''russian'', ' || quote_literal(_search) || ')  ';\r\n    END IF;\r\n\r\n    RETURN QUERY EXECUTE select_query;\r\nEND\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"return_int_f","custom_fields":{}},{"name":"_ids","description":null,"mode":"IN","data_type":"ARRAY","custom_fields":{}},{"name":"_search","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_plano_set_id","description":null,"mode":"IN","data_type":"integer","custom_fields":{}},{"name":"_info_filters","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_path_filters","description":null,"mode":"IN","data_type":"text","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};