window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f414","name":"public.ltree_gist_options","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"ltree_gist_options"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.ltree_gist_options(internal)\r\n RETURNS void\r\n LANGUAGE c\r\n IMMUTABLE PARALLEL SAFE\r\nAS '$libdir/ltree', $function$ltree_gist_options$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"void","custom_fields":{}},{"name":"$1","description":null,"mode":"IN","data_type":"internal","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};