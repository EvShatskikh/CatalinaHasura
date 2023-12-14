window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f207","name":"public.get_user_group_assign","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"get_user_group_assign"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.get_user_group_assign(hasura_session json, _with_global boolean DEFAULT true)\r\n RETURNS SETOF user_group\r\n LANGUAGE plpgsql\r\n STABLE\r\nAS $function$\r\nDECLARE\r\n  acl_provider Int[];\r\n  user_regions text[];\r\nBEGIN\r\n    SELECT array(select id FROM get_provider(hasura_session)) INTO acl_provider;\r\n    select ARRAY(SELECT jsonb_array_elements_text(regions) FROM public.user WHERE email = (hasura_session->>'x-hasura-user-id')::text) INTO user_regions;\r\n\r\n    RETURN QUERY SELECT * FROM user_group g\r\n    WHERE provider_id = ANY (acl_provider) \r\n    OR (_with_global AND jsonb_exists_any(g.regions, user_regions))\r\n    OR EXISTS (SELECT * FROM user_m2m_group ug WHERE ug.user_id = (hasura_session->>'x-hasura-user-id')::text AND ug.group_id = g.name)\r\n    OR EXISTS (SELECT * FROM user_group_manager um WHERE um.user_id = (hasura_session->>'x-hasura-user-id')::text AND um.group_id = g.name)\r\n    ORDER BY g.name;\r\nEND\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"user_group","custom_fields":{}},{"name":"hasura_session","description":null,"mode":"IN","data_type":"json","custom_fields":{}},{"name":"_with_global","description":null,"mode":"IN","data_type":"boolean","custom_fields":{}}],"dependencies":null,"imported_at":"2023-11-29 12:21"};