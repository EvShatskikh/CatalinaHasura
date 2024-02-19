window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f195","name":"public.get_plano_set_editable","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"get_plano_set_editable"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.get_plano_set_editable(hasura_session json, _ids text, _plano_set_filters text DEFAULT NULL::text, _pos_filters text DEFAULT NULL::text, _is_auto boolean DEFAULT NULL::boolean)\r\n RETURNS SETOF return_int_f\r\n LANGUAGE plpgsql\r\n STABLE\r\nAS $function$ \r\nDECLARE\r\n  select_query text;\r\nBEGIN\r\n     select_query := 'SELECT s.id::bigint FROM plano.set s WHERE is_active = true AND id IN (' || _ids || ') ';\r\n\r\n      IF _is_auto IS NOT NULL THEN\r\n        IF _is_auto = TRUE THEN\r\n          select_query := select_query || ' AND is_auto = TRUE ';\r\n        ELSE\r\n          select_query := select_query || ' AND is_auto = FALSE ';\r\n        END IF;\r\n      END IF;\r\n\r\n      IF _plano_set_filters IS NOT NULL OR _pos_filters IS NOT NULL  THEN\r\n          select_query := select_query || ' AND ( s.created_by_id = ' || quote_literal((hasura_session->>'x-hasura-user-id')::text) ;\r\n\r\n      /* поиск по авто настройкам */\r\n      IF _plano_set_filters IS NOT NULL THEN\r\n          select_query := select_query || ' OR ' || _plano_set_filters;\r\n      END IF;\r\n\r\n      /* поиск по точкам */\r\n      IF _pos_filters IS NOT NULL THEN\r\n          select_query := select_query || ' OR EXISTS (SELECT p.id FROM pos p '\r\n            || ' JOIN plano.set_m2m_pos s2p ON s2p.set_id = s.id AND s2p.pos_id = p.id ' \r\n            || ' WHERE ' || _pos_filters || ')';\r\n      END IF;\r\n\r\n      select_query := select_query || ' )';\r\n    END IF;\r\n\r\n    RETURN QUERY EXECUTE select_query;\r\nEND\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"return_int_f","custom_fields":{}},{"name":"hasura_session","description":null,"mode":"IN","data_type":"json","custom_fields":{}},{"name":"_ids","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_plano_set_filters","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_pos_filters","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_is_auto","description":null,"mode":"IN","data_type":"boolean","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};