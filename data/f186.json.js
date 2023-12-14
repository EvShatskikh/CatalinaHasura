window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f186","name":"public.get_issue_event","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"get_issue_event"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.get_issue_event(_issue_id integer)\r\n RETURNS SETOF issue_event\r\n LANGUAGE sql\r\n STABLE\r\nAS $function$ \r\nSELECT * \r\nFROM issue_event \r\nWHERE issue_id = _issue_id AND is_active = TRUE;\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"issue_event","custom_fields":{}},{"name":"_issue_id","description":null,"mode":"IN","data_type":"integer","custom_fields":{}}],"dependencies":null,"imported_at":"2023-11-29 12:21"};