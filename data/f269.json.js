window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f269","name":"public.postgres_fdw_disconnect_all","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"postgres_fdw_disconnect_all"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.postgres_fdw_disconnect_all()\r\n RETURNS boolean\r\n LANGUAGE c\r\n PARALLEL RESTRICTED STRICT\r\nAS '$libdir/postgres_fdw', $function$postgres_fdw_disconnect_all$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"boolean","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};