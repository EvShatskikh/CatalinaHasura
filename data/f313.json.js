window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f313","name":"public.user_m2m_group_insert_trigger","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"user_m2m_group_insert_trigger"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.user_m2m_group_insert_trigger()\r\n RETURNS trigger\r\n LANGUAGE plpgsql\r\nAS $function$  \r\nbegin  \r\n  /* в лог пишем время начала нахождения в группе (date_from default = now())*/\r\n  INSERT INTO user_in_group_log(user_id,group_id) VALUES(new.user_id, new.group_id);\r\n  return new;\r\nend  \r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"trigger","custom_fields":{}}],"dependencies":null,"imported_at":"2023-11-29 12:21"};