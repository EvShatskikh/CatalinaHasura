window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f169","name":"public.digest","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"digest"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.digest(text, text)\r\n RETURNS bytea\r\n LANGUAGE c\r\n IMMUTABLE PARALLEL SAFE STRICT\r\nAS '$libdir/pgcrypto', $function$pg_digest$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"bytea","custom_fields":{}},{"name":"$1","description":null,"mode":"IN","data_type":"bytea","custom_fields":{}},{"name":"$2","description":null,"mode":"IN","data_type":"text","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};