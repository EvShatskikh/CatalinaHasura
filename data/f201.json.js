window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f201","name":"public.get_survey_for_issue","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"get_survey_for_issue"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.get_survey_for_issue(hasura_session json, _issue integer)\r\n RETURNS SETOF survey\r\n LANGUAGE plpgsql\r\n STABLE\r\nAS $function$\r\nDECLARE\r\n  _hierlevel Int DEFAULT NULL;\r\n  _role Text DEFAULT NULL;\r\n  _path Text DEFAULT NULL;\r\n  _user_type jsonb DEFAULT '[]'::jsonb;\r\n  _user_activity_type jsonb DEFAULT '[]'::jsonb;\r\n  _has_pos boolean DEFAULT null;\r\n  _pos_channel Text DEFAULT null;\r\n  _pos_sub_type Text DEFAULT null;\r\n  _pos_ts Text DEFAULT null;\r\n  _pos_network Text DEFAULT null;\r\n  _target_user_id Text DEFAULT null;\r\n  _target_user_role Text DEFAULT null;\r\n  _issue_completed boolean DEFAULT null;\r\nBEGIN\r\n    /* данные пользователя, который оценивает */\r\n    SELECT o.hierlevel, u.role, o.path, o.user_type, o.user_activity_type\r\n    INTO _hierlevel, _role, _path, _user_type, _user_activity_type\r\n    FROM public.user u \r\n    LEFT JOIN org_structure o ON o.id = u.org_structure_id \r\n    WHERE email = (hasura_session->>'x-hasura-user-id')::text;\r\n\r\n    /* данные по запросу и его ТТ */\r\n    SELECT (i.completed_at IS NOT NULL), pos_id IS NOT NULL, \r\n      p.info->>'channel', p.info->>'olSubTypeId', p.info->>'tsId'::text, p.info->>'networkName'::text,\r\n      i.assigned_user_id\r\n    INTO _issue_completed, _has_pos, \r\n      _pos_channel, _pos_sub_type, _pos_ts, _pos_network,\r\n      _target_user_id\r\n    FROM issue i\r\n    LEFT JOIN pos p ON p.id = i.pos_id\r\n    WHERE i.id = _issue;\r\n\r\n    /* данные пользователя, которого оценивают (который привязан к запросу) */\r\n    IF _target_user_id IS NOT NULL THEN\r\n     SELECT u.role INTO _target_user_role FROM public.user u WHERE email = _target_user_id;\r\n    END IF;\r\n\r\n    /* разрешенные анкеты */\r\n    RETURN QUERY\r\n    SELECT s.* \r\n    FROM survey s\r\n    JOIN survey_assign sa ON sa.survey_id = s.id\r\n    WHERE date_from <= NOW() AND (date_to IS NULL OR date_to >= NOW())\r\n    AND jsonb_exists_any(apply_in, ARRAY['issue'])\r\n\r\n    AND (sa.apply_data->'user_hierlevel' IS NULL OR (sa.apply_data->'user_hierlevel')::int = _hierlevel)\r\n    AND (sa.apply_data->'user_roles' IS NULL OR jsonb_exists_any(sa.apply_data->'user_roles', ARRAY[_role]))\r\n    AND (sa.apply_data->'target_user_roles' IS NULL OR jsonb_exists_any(sa.apply_data->'target_user_roles', ARRAY[_target_user_role]))\r\n    -- user types\r\n    AND (sa.apply_data->'user_types' IS NULL \r\n        OR jsonb_exists_any(sa.apply_data->'user_types', \r\n            ARRAY(SELECT jsonb_array_elements_text(_user_type))))\r\n    -- user activities types\r\n     AND (sa.apply_data->'user_activities' IS NULL \r\n        OR jsonb_exists_any(sa.apply_data->'user_activities', \r\n            ARRAY(SELECT jsonb_array_elements_text(_user_activity_type))))\r\n    \r\n    -- orgstructure\r\n    AND (sa.apply_data->'user_org_str' IS NULL \r\n        OR _path LIKE ANY (\r\n            SELECT o.path || '%' FROM org_structure o\r\n                WHERE o.id = ANY(select jsonb_array_elements_text(sa.apply_data->'user_org_str')::uuid)\r\n        )\r\n    )\r\n    \r\n    AND (sa.apply_data->'has_pos' IS NULL \r\n        OR ( _has_pos IS NOT NULL AND (sa.apply_data->'has_pos')::boolean = _has_pos ))\r\n    AND (sa.apply_data->'pos_channel' IS NULL \r\n        OR ( _pos_channel IS NOT NULL AND jsonb_exists_any(sa.apply_data->'pos_channel', ARRAY[_pos_channel]) ))\r\n    -- pos_sub_type\r\n    AND (sa.apply_data->'pos_sub_type' IS NULL \r\n        OR ( _pos_sub_type IS NOT NULL AND jsonb_exists_any(sa.apply_data->'pos_sub_type', ARRAY[_pos_sub_type]) ))\r\n    -- pos_ts\r\n    AND (sa.apply_data->'pos_ts' IS NULL \r\n        OR ( _pos_ts IS NOT NULL AND jsonb_exists_any(sa.apply_data->'pos_ts', ARRAY[_pos_ts]) ))\r\n    -- pos_network \r\n    AND (sa.apply_data->'pos_network' IS NULL \r\n        OR ( _pos_network IS NOT NULL AND jsonb_exists_any(sa.apply_data->'pos_network', ARRAY[_pos_network]) ))\r\n\r\n    AND (sa.apply_data->'issue_completed' IS NULL \r\n        OR ( _issue_completed IS NOT NULL AND (sa.apply_data->'issue_completed')::boolean = _issue_completed ))\r\n    AND (sa.apply_data->'issue_label' IS NULL \r\n        OR EXISTS (SELECT * FROM issue_m2m_label il WHERE il.issue_id = _issue AND jsonb_exists_any(apply_data->'issue_label', ARRAY[(il.label_id)::text])))\r\n\r\n    AND NOT EXISTS (SELECT * FROM survey_result sr \r\n        WHERE sr.survey_id = s.id \r\n        AND sr.issue_id = _issue\r\n        AND completed_at IS NOT NULL)\r\n    GROUP BY s.id;\r\nEND\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"survey","custom_fields":{}},{"name":"hasura_session","description":null,"mode":"IN","data_type":"json","custom_fields":{}},{"name":"_issue","description":null,"mode":"IN","data_type":"integer","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};