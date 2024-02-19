window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f298","name":"public.set_current_timestamp_updated_at","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"set_current_timestamp_updated_at"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.set_current_timestamp_updated_at()\r\n RETURNS trigger\r\n LANGUAGE plpgsql\r\nAS $function$\r\nDECLARE\r\n  _new record;\r\nBEGIN\r\n  _new := NEW;\r\n  _new.\"updated_at\" = NOW();\r\n  RETURN _new;\r\nEND;\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"trigger","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};