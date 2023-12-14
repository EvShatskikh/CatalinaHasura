window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f134","name":"atlas.set_current_timestamp_updated_at","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"atlas"},{"field":"Name","value":"set_current_timestamp_updated_at"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION atlas.set_current_timestamp_updated_at()\r\n RETURNS trigger\r\n LANGUAGE plpgsql\r\nAS $function$\r\nDECLARE\r\n  _new record;\r\nBEGIN\r\n  _new := NEW;\r\n  _new.\"updated_at\" = NOW();\r\n  RETURN _new;\r\nEND;\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"trigger","custom_fields":{}}],"dependencies":null,"imported_at":"2023-11-29 12:21"};