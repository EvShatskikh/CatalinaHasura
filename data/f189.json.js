window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f189","name":"public.get_issues_status","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"get_issues_status"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.get_issues_status(hasura_session json, _date timestamp with time zone)\r\n RETURNS SETOF view_issues_status\r\n LANGUAGE plpgsql\r\n STABLE\r\nAS $function$\r\nDECLARE\r\n  user_id text;\r\n  select_query text;\r\nBEGIN\r\n  /* залогиненый юзер */\r\n  user_id := (hasura_session->>'x-hasura-user-id')::text;\r\n\r\n  select_query := '\r\n    SELECT\r\n      SUM(\r\n        CASE WHEN (completed_at IS NULL)\r\n          THEN 1  ELSE 0 END )::text AS open,\r\n      SUM(\r\n        CASE WHEN (completed_at IS NULL AND start_at IS NOT NULL)\r\n          THEN 1  ELSE 0 END )::text AS start,\r\n      SUM(\r\n        CASE WHEN (completed_at >= '|| quote_literal(_date) ||')\r\n          THEN 1  ELSE 0 END )::text AS close\r\n    FROM issue\r\n    WHERE assigned_user_id = '|| quote_literal(user_id) ||'\r\n      AND is_active = true';\r\n\r\n\r\n  RETURN QUERY EXECUTE select_query;\r\nEND\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"view_issues_status","custom_fields":{}},{"name":"hasura_session","description":null,"mode":"IN","data_type":"json","custom_fields":{}},{"name":"_date","description":null,"mode":"IN","data_type":"timestamp with time zone","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};