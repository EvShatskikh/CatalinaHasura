window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f173","name":"public.export_call_phone","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"export_call_phone"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.export_call_phone(hasura_session json, _datefrom timestamp with time zone DEFAULT NULL::timestamp with time zone, _dateto timestamp with time zone DEFAULT NULL::timestamp with time zone, _provider integer DEFAULT NULL::integer)\r\n RETURNS SETOF return_jsonb_f\r\n LANGUAGE plpgsql\r\n STABLE\r\nAS $function$\r\n\r\nDECLARE\r\n  acl_path_regexp text[];\r\n  call_ids Int[];\r\nBEGIN\r\n    acl_path_regexp := get_acl_path_regexp(hasura_session);\r\n\r\n    /* получаем ID звонков с непривязанными номерами телефонов (ACL) */\r\n    SELECT array(SELECT max(c.id) as call_id\r\n    FROM call c\r\n    LEFT JOIN org_structure o ON o.id = c.org_structure_id\r\n    WHERE c.pos_id IS NULL AND c.external_number > 30000000000 \r\n      AND provider_id = _provider\r\n      AND (org_structure_id IS NULL OR o.path LIKE ANY(acl_path_regexp))\r\n      AND (_datefrom IS NULL OR c.created_at >= _datefrom)\r\n      AND (_dateto IS NULL OR c.created_at <= _dateto)\r\n    GROUP BY external_number\r\n    HAVING NOT EXISTS (SELECT * FROM call_phone_ignore i WHERE i.phone = external_number)\r\n     AND NOT EXISTS (SELECT * FROM org_structure os WHERE os.phone = external_number)\r\n     AND NOT EXISTS (SELECT * FROM public.user u WHERE u.phone = external_number)\r\n     AND NOT EXISTS (SELECT search_phone(external_number::text))\r\n    ORDER BY external_number) INTO call_ids;\t\r\n\r\n    /* звонки по найденным ID */\r\n    RETURN QUERY\r\n    SELECT jsonb_build_object(\r\n      'id', c.id, \r\n      'name', employee_name::text,\r\n      'phone', external_number,\r\n      'date', to_char(created_at, 'HH24:MI DD.MM.YYYY'),\r\n      'incoming', CASE WHEN is_incoming=true THEN 'Входящий' ELSE 'Исходящий' END\r\n    ) AS value\r\n    FROM call c\r\n    WHERE c.id = ANY (call_ids);\r\nEND\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"return_jsonb_f","custom_fields":{}},{"name":"hasura_session","description":null,"mode":"IN","data_type":"json","custom_fields":{}},{"name":"_datefrom","description":null,"mode":"IN","data_type":"timestamp with time zone","custom_fields":{}},{"name":"_dateto","description":null,"mode":"IN","data_type":"timestamp with time zone","custom_fields":{}},{"name":"_provider","description":null,"mode":"IN","data_type":"integer","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};