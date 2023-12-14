window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f391","name":"public.in_out_m2m_sku_after_delete_trigger","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"in_out_m2m_sku_after_delete_trigger"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.in_out_m2m_sku_after_delete_trigger()\r\n RETURNS trigger\r\n LANGUAGE plpgsql\r\nAS $function$\r\nBEGIN\r\n  INSERT INTO mx.in_out_sku_history (in_out_id, sku_id, is_active)\r\n  VALUES (\r\n    old.in_out_id,\r\n    old.sku_id,\r\n    false\r\n  );\r\n  return old;\r\nEND\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"trigger","custom_fields":{}}],"dependencies":null,"imported_at":"2023-11-29 12:21"};