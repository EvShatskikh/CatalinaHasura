window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f139","name":"hdb_catalog.insert_event_log","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"hdb_catalog"},{"field":"Name","value":"insert_event_log"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION hdb_catalog.insert_event_log(schema_name text, table_name text, trigger_name text, op text, row_data json)\r\n RETURNS text\r\n LANGUAGE plpgsql\r\nAS $function$\r\n  DECLARE\r\n    id text;\r\n    payload json;\r\n    session_variables json;\r\n    server_version_num int;\r\n    trace_context json;\r\n  BEGIN\r\n    id := gen_random_uuid();\r\n    server_version_num := current_setting('server_version_num');\r\n    IF server_version_num >= 90600 THEN\r\n      session_variables := current_setting('hasura.user', 't');\r\n      trace_context := current_setting('hasura.tracecontext', 't');\r\n    ELSE\r\n      BEGIN\r\n        session_variables := current_setting('hasura.user');\r\n      EXCEPTION WHEN OTHERS THEN\r\n                  session_variables := NULL;\r\n      END;\r\n      BEGIN\r\n        trace_context := current_setting('hasura.tracecontext');\r\n      EXCEPTION WHEN OTHERS THEN\r\n        trace_context := NULL;\r\n      END;\r\n    END IF;\r\n    payload := json_build_object(\r\n      'op', op,\r\n      'data', row_data,\r\n      'session_variables', session_variables,\r\n      'trace_context', trace_context\r\n    );\r\n    INSERT INTO hdb_catalog.event_log\r\n                (id, schema_name, table_name, trigger_name, payload)\r\n    VALUES\r\n    (id, schema_name, table_name, trigger_name, payload);\r\n    RETURN id;\r\n  END;\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"text","custom_fields":{}},{"name":"schema_name","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"table_name","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"trigger_name","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"op","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"row_data","description":null,"mode":"IN","data_type":"json","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};