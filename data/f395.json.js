window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f395","name":"public.index","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"index"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.index(ltree, ltree, integer)\r\n RETURNS integer\r\n LANGUAGE c\r\n IMMUTABLE PARALLEL SAFE STRICT\r\nAS '$libdir/ltree', $function$ltree_index$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"integer","custom_fields":{}},{"name":"$1","description":null,"mode":"IN","data_type":"ltree","custom_fields":{}},{"name":"$2","description":null,"mode":"IN","data_type":"ltree","custom_fields":{}},{"name":"$3","description":null,"mode":"IN","data_type":"integer","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};