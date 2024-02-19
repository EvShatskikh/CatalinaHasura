window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f241","name":"public.org_structure_upsert_trigger","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"org_structure_upsert_trigger"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.org_structure_upsert_trigger()\r\n RETURNS trigger\r\n LANGUAGE plpgsql\r\nAS $function$  \r\nDECLARE\r\n  new_path text;\r\nbegin  \r\n    /* уровень иерархии  */\r\n    new.hierlevel := (7 - array_length(string_to_array(new.path, '/'),1));\r\n\r\n    /* для М4-М1 разбиваем path на json {m4,m3,m2,m1}  */\r\n    IF new.hierlevel <= 4 AND COALESCE(old.path, '') != COALESCE(new.path, '') THEN\r\n      new_path := REPLACE(new.path,'\"', '');\r\n      new_path := REPLACE(new_path,e'\\t', '');\r\n      new.path_info := ('{\"m4\": \"' || split_part(new_path, '/', 3) || '\", \"m3\": \"' || split_part(new_path, '/', 4)  || '\", \"m2\": \"' || split_part(new_path, '/', 5)  || '\", \"m1\": \"' || split_part(new_path, '/', 6)  || '\"}')::jsonb;\r\n\r\n      /* определяем ветку в иерархии: если m4 начинается с цифры -> sale, иначе - other */\r\n      IF regexp_match(new.path_info->>'m4', '^[0-9]*_') IS NOT NULL THEN\r\n        new.path_info := new.path_info::jsonb || ('{\"branch\":\"sale\"}' )::jsonb;\r\n      ELSE\r\n        new.path_info := new.path_info::jsonb || ('{\"branch\":\"other\"}' )::jsonb;\r\n      END IF; \r\n\r\n    END IF;  \r\n\r\n    return new;\r\nend  \r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"trigger","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};