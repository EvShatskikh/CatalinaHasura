window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f431","name":"public.ltree2text","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"ltree2text"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.ltree2text(ltree)\r\n RETURNS text\r\n LANGUAGE c\r\n IMMUTABLE PARALLEL SAFE STRICT\r\nAS '$libdir/ltree', $function$ltree2text$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"text","custom_fields":{}},{"name":"$1","description":null,"mode":"IN","data_type":"ltree","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};