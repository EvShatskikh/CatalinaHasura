window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f170","name":"public.digest","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"digest"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.digest(text, text)\r\n RETURNS bytea\r\n LANGUAGE c\r\n IMMUTABLE PARALLEL SAFE STRICT\r\nAS '$libdir/pgcrypto', $function$pg_digest$function$","parameters":[],"dependencies":null,"imported_at":"2023-05-16 13:31"};