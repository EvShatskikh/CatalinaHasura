window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f209","name":"public.get_users_in_group","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"get_users_in_group"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.get_users_in_group(hasura_session json, _groups text DEFAULT NULL::text)\r\n RETURNS SETOF \"user\"\r\n LANGUAGE plpgsql\r\n STABLE\r\nAS $function$\r\nDECLARE\r\n  acl_groups text[];\r\n  users_array text[] DEFAULT NULL;\r\nBEGIN\r\n    SELECT array(SELECT name FROM get_user_group(hasura_session, _groups)) INTO acl_groups;\r\n\r\n    RETURN QUERY SELECT u.* FROM public.user u\r\n    WHERE EXISTS (SELECT * FROM user_m2m_group ug WHERE ug.user_id = u.email AND ug.group_id = ANY (acl_groups));\r\n\r\nEND\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"user","custom_fields":{}},{"name":"hasura_session","description":null,"mode":"IN","data_type":"json","custom_fields":{}},{"name":"_groups","description":null,"mode":"IN","data_type":"text","custom_fields":{}}],"dependencies":null,"imported_at":"2023-11-29 12:21"};