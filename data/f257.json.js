window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f257","name":"public.pgp_sym_decrypt","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"pgp_sym_decrypt"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.pgp_sym_decrypt(bytea, text)\r\n RETURNS text\r\n LANGUAGE c\r\n IMMUTABLE PARALLEL SAFE STRICT\r\nAS '$libdir/pgcrypto', $function$pgp_sym_decrypt_text$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"text","custom_fields":{}},{"name":"$1","description":null,"mode":"IN","data_type":"bytea","custom_fields":{}},{"name":"$2","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"$3","description":null,"mode":"IN","data_type":"text","custom_fields":{}}],"dependencies":null,"imported_at":"2023-11-29 12:21"};