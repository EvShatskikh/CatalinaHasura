window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f166","name":"public.dearmor","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"dearmor"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.dearmor(text)\r\n RETURNS bytea\r\n LANGUAGE c\r\n IMMUTABLE PARALLEL SAFE STRICT\r\nAS '$libdir/pgcrypto', $function$pg_dearmor$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"bytea","custom_fields":{}},{"name":"$1","description":null,"mode":"IN","data_type":"text","custom_fields":{}}],"dependencies":null,"imported_at":"2023-11-29 12:21"};