window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f380","name":"public._ltree_r_risparent","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"_ltree_r_risparent"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public._ltree_r_risparent(ltree, ltree[])\r\n RETURNS boolean\r\n LANGUAGE c\r\n IMMUTABLE PARALLEL SAFE STRICT\r\nAS '$libdir/ltree', $function$_ltree_r_risparent$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"boolean","custom_fields":{}},{"name":"$1","description":null,"mode":"IN","data_type":"ltree","custom_fields":{}},{"name":"$2","description":null,"mode":"IN","data_type":"ARRAY","custom_fields":{}}],"dependencies":null,"imported_at":"2023-11-29 12:21"};