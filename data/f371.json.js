window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f371","name":"public._ltree_compress","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"_ltree_compress"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public._ltree_compress(internal)\r\n RETURNS internal\r\n LANGUAGE c\r\n IMMUTABLE PARALLEL SAFE STRICT\r\nAS '$libdir/ltree', $function$_ltree_compress$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"internal","custom_fields":{}},{"name":"$1","description":null,"mode":"IN","data_type":"internal","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};