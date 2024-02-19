window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f194","name":"public.get_org_structure","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"get_org_structure"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.get_org_structure(hasura_session json, is_operator boolean DEFAULT NULL::boolean, is_incoming boolean DEFAULT NULL::boolean, path_regexp text DEFAULT NULL::text, _hierlevel integer DEFAULT NULL::integer)\r\n RETURNS SETOF org_structure\r\n LANGUAGE plpgsql\r\n STABLE\r\nAS $function$\r\nDECLARE\r\n  acl_path_regexp text[];\r\n  select_query text;\r\nBEGIN\r\n    acl_path_regexp := get_acl_path_regexp(hasura_session);\r\n\r\n    select_query := 'SELECT o.* FROM org_structure o ';\r\n\r\n    IF is_operator IS NOT NULL THEN\r\n      select_query := select_query || ' JOIN public.user u ON u.org_structure_id = o.id AND operator_number IS NOT NULL ';\r\n\r\n      IF is_incoming IS NOT NULL THEN\r\n        select_query := select_query || ' AND EXISTS (SELECT * FROM user_m2m_group ug WHERE ug.user_id = u.email AND group_id ILIKE ' || quote_literal('%вход%') || ')';\r\n      END IF;\r\n    END IF;\r\n\r\n    select_query := select_query || ' WHERE path LIKE ANY ($1) AND o.is_active = TRUE ';\r\n\r\n    IF path_regexp IS NOT NULL THEN\r\n      select_query := select_query || ' AND o.path SIMILAR TO ' || quote_literal(path_regexp) ;\r\n    END IF;\r\n\r\n    IF _hierlevel IS NOT NULL THEN\r\n      select_query := select_query || ' AND o.hierlevel = ' || _hierlevel ;\r\n    END IF;\r\n\r\n    select_query := select_query || ' ORDER BY o.path ASC ';\r\n\r\n    RETURN QUERY EXECUTE select_query USING acl_path_regexp;\r\nEND\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"org_structure","custom_fields":{}},{"name":"hasura_session","description":null,"mode":"IN","data_type":"json","custom_fields":{}},{"name":"is_operator","description":null,"mode":"IN","data_type":"boolean","custom_fields":{}},{"name":"is_incoming","description":null,"mode":"IN","data_type":"boolean","custom_fields":{}},{"name":"path_regexp","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_hierlevel","description":null,"mode":"IN","data_type":"integer","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};