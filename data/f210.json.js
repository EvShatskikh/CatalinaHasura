window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f210","name":"public.gin_extract_query_trgm","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"gin_extract_query_trgm"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.gin_extract_query_trgm(text, internal, smallint, internal, internal, internal, internal)\r\n RETURNS internal\r\n LANGUAGE c\r\n IMMUTABLE PARALLEL SAFE STRICT\r\nAS '$libdir/pg_trgm', $function$gin_extract_query_trgm$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"internal","custom_fields":{}},{"name":"$1","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"$2","description":null,"mode":"IN","data_type":"internal","custom_fields":{}},{"name":"$3","description":null,"mode":"IN","data_type":"smallint","custom_fields":{}},{"name":"$4","description":null,"mode":"IN","data_type":"internal","custom_fields":{}},{"name":"$5","description":null,"mode":"IN","data_type":"internal","custom_fields":{}},{"name":"$6","description":null,"mode":"IN","data_type":"internal","custom_fields":{}},{"name":"$7","description":null,"mode":"IN","data_type":"internal","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};