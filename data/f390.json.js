window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f390","name":"public.in_out_m2m_pos_before_update_trigger","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"in_out_m2m_pos_before_update_trigger"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.in_out_m2m_pos_before_update_trigger()\r\n RETURNS trigger\r\n LANGUAGE plpgsql\r\nAS $function$\r\nBEGIN\r\n  INSERT INTO mx.in_out_pos_history (in_out_id, pos_id, is_active)\r\n  VALUES (\r\n    old.in_out_id,\r\n    new.pos_id,\r\n    false\r\n  );\r\n\r\n  INSERT INTO mx.in_out_pos_history (in_out_id, pos_id, is_active)\r\n  VALUES (\r\n    new.in_out_id,\r\n    new.pos_id,\r\n    true\r\n  );\r\n  return new;\r\nEND\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"trigger","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};