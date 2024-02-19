window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f311","name":"public.update_sm_photo_qty","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"update_sm_photo_qty"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.update_sm_photo_qty()\r\n RETURNS trigger\r\n LANGUAGE plpgsql\r\nAS $function$\r\n     DECLARE photo_qt int;\r\nBEGIN\r\n     SELECT COUNT(id) \r\n     FROM atlas.sm_photo \r\n     WHERE sm_photo.sm_id = NEW.sm_id \r\n        AND sm_photo.url IS NOT NULL \r\n    INTO photo_qt;\r\n        \r\n     UPDATE atlas.sm SET img_uploaded = photo_qt WHERE sm.id = NEW.sm_id;\r\n    RETURN NEW;\r\nEND;\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"trigger","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};