window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f250","name":"public.pgp_pub_decrypt_bytea","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"pgp_pub_decrypt_bytea"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.pgp_pub_decrypt_bytea(bytea, bytea, text)\r\n RETURNS bytea\r\n LANGUAGE c\r\n IMMUTABLE PARALLEL SAFE STRICT\r\nAS '$libdir/pgcrypto', $function$pgp_pub_decrypt_bytea$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"bytea","custom_fields":{}},{"name":"$1","description":null,"mode":"IN","data_type":"bytea","custom_fields":{}},{"name":"$2","description":null,"mode":"IN","data_type":"bytea","custom_fields":{}},{"name":"$3","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"$4","description":null,"mode":"IN","data_type":"text","custom_fields":{}}],"dependencies":null,"imported_at":"2023-11-29 12:21"};