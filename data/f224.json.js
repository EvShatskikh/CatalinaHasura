window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f224","name":"public.gtrgm_union","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"gtrgm_union"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.gtrgm_union(internal, internal)\r\n RETURNS gtrgm\r\n LANGUAGE c\r\n IMMUTABLE PARALLEL SAFE STRICT\r\nAS '$libdir/pg_trgm', $function$gtrgm_union$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"gtrgm","custom_fields":{}},{"name":"$1","description":null,"mode":"IN","data_type":"internal","custom_fields":{}},{"name":"$2","description":null,"mode":"IN","data_type":"internal","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};