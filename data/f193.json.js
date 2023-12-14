window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f193","name":"public.get_matrix_pos_editable","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"get_matrix_pos_editable"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.get_matrix_pos_editable(_pos_ids bigint[], _region text DEFAULT NULL::text, _info_filters text DEFAULT NULL::text, _channel_id integer DEFAULT NULL::integer)\r\n RETURNS SETOF pos\r\n LANGUAGE plpgsql\r\n STABLE\r\nAS $function$\r\nDECLARE\r\n  select_query text;\r\nBEGIN\r\n    select_query := 'SELECT p.* FROM pos p WHERE p.for_matrix = true';\r\n    \r\n    /* разрешенная страна */\r\n    IF _region IS NOT NULL THEN\r\n        select_query := select_query || ' AND p.region SIMILAR TO ' || quote_literal(_region);\r\n    END IF;\r\n\r\n    /* канал */\r\n    IF _channel_id IS NOT NULL THEN\r\n        select_query := select_query || ' AND p.info->>''channelId'' = ' || quote_literal(_channel_id);\r\n    END IF;\r\n\r\n    /* поиск по фильтрам */\r\n    IF _info_filters IS NOT NULL THEN\r\n        select_query := select_query || _info_filters;\r\n    END IF;\r\n    \r\n    /* pos ids*/\r\n    IF array_length(_pos_ids,1) > 0 \r\n        THEN\r\n            select_query := select_query || ' AND p.id IN (' || array_to_string(_pos_ids, ', ') || ')  ';\r\n        ELSE select_query := select_query || ' LIMIT 0 ';\r\n    END IF;\r\n\r\n    RETURN QUERY EXECUTE select_query;\r\nEND\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"pos","custom_fields":{}},{"name":"_pos_ids","description":null,"mode":"IN","data_type":"ARRAY","custom_fields":{}},{"name":"_region","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_info_filters","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_channel_id","description":null,"mode":"IN","data_type":"integer","custom_fields":{}}],"dependencies":null,"imported_at":"2023-11-29 12:21"};