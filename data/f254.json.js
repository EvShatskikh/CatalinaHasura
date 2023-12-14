window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f254","name":"public.pgp_pub_encrypt","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"pgp_pub_encrypt"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.pgp_pub_encrypt(text, bytea)\r\n RETURNS bytea\r\n LANGUAGE c\r\n PARALLEL SAFE STRICT\r\nAS '$libdir/pgcrypto', $function$pgp_pub_encrypt_text$function$","parameters":[],"dependencies":null,"imported_at":"2023-05-16 13:31"};