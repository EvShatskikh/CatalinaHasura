window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f423","name":"public.ltree_penalty","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"ltree_penalty"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.ltree_penalty(internal, internal, internal)\r\n RETURNS internal\r\n LANGUAGE c\r\n IMMUTABLE PARALLEL SAFE STRICT\r\nAS '$libdir/ltree', $function$ltree_penalty$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"internal","custom_fields":{}},{"name":"$1","description":null,"mode":"IN","data_type":"internal","custom_fields":{}},{"name":"$2","description":null,"mode":"IN","data_type":"internal","custom_fields":{}},{"name":"$3","description":null,"mode":"IN","data_type":"internal","custom_fields":{}}],"dependencies":null,"imported_at":"2023-11-29 12:21"};