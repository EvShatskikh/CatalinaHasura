window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f280","name":"public.search_issue","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"search_issue"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.search_issue(hasura_session json, search text DEFAULT NULL::text, _pos_id bigint DEFAULT NULL::bigint, _pos_phones text DEFAULT NULL::text, _has_pos boolean DEFAULT NULL::boolean, _has_reminder boolean DEFAULT NULL::boolean, _is_completed boolean DEFAULT NULL::boolean, _is_started boolean DEFAULT NULL::boolean, _assigned_users text DEFAULT NULL::text, _assigned_groups text DEFAULT NULL::text, _assigned_all_in_groups text DEFAULT NULL::text, _participants text DEFAULT NULL::text, _datefrom timestamp with time zone DEFAULT NULL::timestamp with time zone, _dateto timestamp with time zone DEFAULT NULL::timestamp with time zone, _completed_datefrom timestamp with time zone DEFAULT NULL::timestamp with time zone, _completed_dateto timestamp with time zone DEFAULT NULL::timestamp with time zone, _labels text DEFAULT NULL::text, _event_actions text DEFAULT NULL::text, _ts text DEFAULT NULL::text, _sectors text DEFAULT NULL::text, _channels text DEFAULT NULL::text, _sort text DEFAULT NULL::text, _order text DEFAULT NULL::text, _limit integer DEFAULT NULL::integer, _offset integer DEFAULT 0)\r\n RETURNS SETOF issue\r\n LANGUAGE plpgsql\r\n STABLE\r\nAS $function$\r\nDECLARE\r\n  user_id text;\r\n  acl_groups text[];\r\n  acl_users text[];\r\n  select_query text;\r\n  filter_by_user boolean default TRUE;\r\n  labels_by_category text;\r\nBEGIN\r\n    /* залогиненый юзер */\r\n    user_id := (hasura_session->>'x-hasura-user-id')::text;\r\n    /* разрешенные группы */\r\n    select array(SELECT name FROM get_user_group(hasura_session, _assigned_groups)) INTO acl_groups;\r\n\r\n    /* разрешенные исполнители - все */\r\n    IF _assigned_users IS NULL AND _assigned_all_in_groups IS NULL THEN\r\n      select array(SELECT email FROM get_user(hasura_session)) INTO acl_users;\r\n      filter_by_user := FALSE;\r\n    /* из выбранных пользователей */\r\n    ELSIF _assigned_users IS NOT NULL AND _assigned_all_in_groups IS NULL THEN\r\n      select array(SELECT email FROM get_user(hasura_session, _assigned_users)) INTO acl_users;\r\n    /* из выбранных групп */\r\n    ELSIF _assigned_all_in_groups IS NOT NULL AND _assigned_users IS NULL THEN\r\n      select array(SELECT email FROM get_users_in_group(hasura_session, _assigned_all_in_groups)) INTO acl_users;\r\n    /* из выбранных групп и выбранных пользователей */\r\n    ELSE\r\n      select array(\r\n        SELECT email FROM get_user(hasura_session, _assigned_users)\r\n        UNION\r\n        SELECT email FROM get_users_in_group(hasura_session, _assigned_all_in_groups)\r\n        ) INTO acl_users;\r\n    END IF;\r\n\r\n    /* ЗАПРОС */\r\n    select_query := 'SELECT i.* FROM issue i ';\r\n\r\n    /* если есть фільтри по параметрам ТТ  */\r\n    IF _ts IS NOT NULL OR _channels IS NOT NULL OR _sectors IS NOT NULL OR _sort IS NOT NULL\r\n    THEN\r\n        select_query := select_query || ' JOIN pos p on p.id = i.pos_id';\r\n        /* фильтр по ТС */\r\n        IF _ts IS NOT NULL THEN\r\n          select_query := select_query || ' and p.info->>''tsId'' IN (' || _ts || ')';\r\n        END IF;\r\n        /* фильтр по Канале */\r\n        IF _channels IS NOT NULL THEN\r\n          select_query := select_query || ' and (p.info->''channelId'')::integer IN (' || _channels || ')';\r\n        END IF;\r\n        /* фильтр по сектору */\r\n        IF _sectors IS NOT NULL THEN\r\n          select_query := select_query || ' JOIN org_structure o on o.id = p.org_structure_id and o.path SIMILAR TO ' || quote_literal('%(' || _sectors || ')%') || ' ';\r\n        END IF;\r\n    END IF;\r\n\r\n    select_query := select_query || ' WHERE i.is_active = true ';\r\n\r\n    /* завершен ли */\r\n    IF _is_completed IS NOT NULL THEN\r\n      IF _is_completed THEN\r\n        select_query := select_query || ' AND i.completed_at IS NOT NULL ';\r\n      ELSE\r\n        select_query := select_query || ' AND i.completed_at IS NULL ';\r\n      END IF;\r\n    END IF;\r\n\r\n    /* начат визит */\r\n    IF _is_started IS NOT NULL THEN\r\n      IF _is_started THEN\r\n        select_query := select_query || ' AND i.start_at IS NOT NULL ';\r\n      ELSE\r\n        select_query := select_query || ' AND i.start_at IS NULL ';\r\n      END IF;\r\n    END IF;\r\n\r\n    /* дата открытия с */\r\n    IF _datefrom IS NOT NULL THEN\r\n      select_query := select_query || ' AND i.created_at >=  ' || quote_literal(_datefrom);\r\n    END IF;\r\n\r\n    /* дата открытия по */\r\n    IF _dateto IS NOT NULL THEN\r\n      select_query := select_query || ' AND i.created_at <=  ' || quote_literal(_dateto);\r\n    END IF;\r\n\r\n    /* дата закрытия с */\r\n    IF _completed_datefrom IS NOT NULL THEN\r\n      select_query := select_query || ' AND i.completed_at >=  ' || quote_literal(_completed_datefrom);\r\n    END IF;\r\n\r\n    /* дата закрытия по */\r\n    IF _completed_dateto IS NOT NULL THEN\r\n      select_query := select_query || ' AND i.completed_at <=  ' || quote_literal(_completed_dateto);\r\n    END IF;\r\n\r\n    /* назначено на */\r\n    IF filter_by_user AND _assigned_groups IS NOT NULL THEN\r\n      select_query := select_query || ' AND (assigned_user_id IN (''' || array_to_string(acl_users, ''', ''') || ''') OR assigned_group_id IN (''' || array_to_string(acl_groups, ''', ''') || ''')) ';\r\n    ELSIF filter_by_user THEN\r\n      select_query := select_query || ' AND assigned_user_id IN (''' || array_to_string(acl_users, ''', ''') || ''') ';\r\n    ELSIF _assigned_groups IS NOT NULL THEN\r\n      select_query := select_query || ' AND assigned_group_id IN (''' || array_to_string(acl_groups, ''', ''') || ''') ';\r\n    /* ACL */\r\n    ELSIF _participants IS NULL THEN\r\n      select_query := select_query || ' AND (assigned_user_id IN (''' || array_to_string(acl_users, ''', ''') || ''') OR assigned_group_id IN (''' || array_to_string(acl_groups, ''', ''') || ''') OR participants::text SIMILAR TO ' || quote_literal('%(\"' || user_id || '\")%') || ') ';\r\n    END IF;\r\n\r\n    /* участники - пока разрешен только залогиненый юзер */\r\n    IF _participants IS NOT NULL THEN\r\n      select_query := select_query || ' AND participants::text SIMILAR TO ' || quote_literal('%(\"' || user_id || '\")%');\r\n    END IF;\r\n\r\n    /* TT */\r\n    IF _pos_id IS NOT NULL THEN\r\n      select_query := select_query || ' AND (pos_id = ' || _pos_id;\r\n      IF _pos_phones IS NOT NULL THEN\r\n        select_query := select_query || ' OR pos_phone IN (' || _pos_phones || ') ';\r\n      END IF;\r\n      select_query := select_query || ' ) ';\r\n    ELSIF _has_pos IS NOT NULL THEN\r\n      IF _has_pos THEN\r\n        select_query := select_query || ' AND pos_id IS NOT NULL ';\r\n      ELSE\r\n        select_query := select_query || ' AND pos_id IS NULL ';\r\n      END IF;\r\n    END IF;\r\n\r\n    /* Reminder */\r\n    IF _has_reminder IS NOT NULL THEN\r\n      IF _has_reminder THEN\r\n        select_query := select_query || ' AND EXISTS (select id FROM reminder WHERE issue_id = i.id AND accepted_at IS NULL) ';\r\n      ELSE\r\n        select_query := select_query || ' AND NOT EXISTS (select id FROM reminder WHERE issue_id = i.id AND accepted_at IS NULL)  ';\r\n      END IF;\r\n    END IF;\r\n\r\n    /* метки */\r\n    IF _labels IS NOT NULL THEN\r\n      FOREACH labels_by_category IN ARRAY string_to_array(_labels, '|')::text[]\r\n      LOOP\r\n        select_query := select_query || ' AND EXISTS (select * FROM issue_m2m_label WHERE issue_id = i.id AND label_id IN (' || labels_by_category || ')) ';\r\n      END LOOP;\r\n    END IF;\r\n\r\n    /* поиск по запросу */\r\n    IF search IS NOT NULL THEN\r\n      select_query := select_query || ' AND ( fts @@ websearch_to_tsquery(' || quote_literal('russian') || ', ' || quote_literal(search) || ') ';\r\n      select_query := select_query || ' OR i.title || '' '' || pos_info ILIKE ' || quote_literal('%' || search || '%') || ') ';\r\n    END IF;\r\n\r\n    /* события */\r\n    IF _event_actions IS NOT NULL THEN\r\n      select_query := select_query || ' AND EXISTS (select * FROM issue_event WHERE issue_event.issue_id = i.id AND issue_event.action IN (' || _event_actions || ')) ';\r\n    END IF;\r\n\r\n    /* order by */\r\n    IF _sort IS NOT NULL THEN\r\n      IF _sort = 'pos_name' THEN\r\n        select_query := select_query || ' ORDER BY p.name ';\r\n      END IF;\r\n\r\n      IF _sort = 'pos_trading_name' THEN\r\n        select_query := select_query || ' ORDER BY p.trading_name ';\r\n      END IF;\r\n\r\n      -- order\r\n      IF _order IS NOT NULL THEN\r\n        IF _order = 'desc' THEN\r\n          select_query := select_query || ' DESC ';\r\n        ELSEIF _order = 'asc' THEN\r\n          select_query := select_query || ' ASC ';\r\n        ELSE\r\n          select_query := select_query || ' DESC ';\r\n        END IF;\r\n      END IF;\r\n    ELSE\r\n      select_query := select_query || ' ORDER BY i.id DESC ';\r\n    END IF;\r\n\r\n    /* limit */\r\n    IF _limit IS NOT NULL THEN\r\n      select_query := select_query || ' LIMIT ' || _limit || ' OFFSET ' || _offset;\r\n    END IF;\r\n\r\n    RETURN QUERY EXECUTE select_query;\r\nEND\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"issue","custom_fields":{}},{"name":"hasura_session","description":null,"mode":"IN","data_type":"json","custom_fields":{}},{"name":"search","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_pos_id","description":null,"mode":"IN","data_type":"bigint","custom_fields":{}},{"name":"_pos_phones","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_has_pos","description":null,"mode":"IN","data_type":"boolean","custom_fields":{}},{"name":"_has_reminder","description":null,"mode":"IN","data_type":"boolean","custom_fields":{}},{"name":"_is_completed","description":null,"mode":"IN","data_type":"boolean","custom_fields":{}},{"name":"_is_started","description":null,"mode":"IN","data_type":"boolean","custom_fields":{}},{"name":"_assigned_users","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_assigned_groups","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_assigned_all_in_groups","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_participants","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_datefrom","description":null,"mode":"IN","data_type":"timestamp with time zone","custom_fields":{}},{"name":"_dateto","description":null,"mode":"IN","data_type":"timestamp with time zone","custom_fields":{}},{"name":"_completed_datefrom","description":null,"mode":"IN","data_type":"timestamp with time zone","custom_fields":{}},{"name":"_completed_dateto","description":null,"mode":"IN","data_type":"timestamp with time zone","custom_fields":{}},{"name":"_labels","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_event_actions","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_ts","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_sectors","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_channels","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_sort","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_order","description":null,"mode":"IN","data_type":"text","custom_fields":{}},{"name":"_limit","description":null,"mode":"IN","data_type":"integer","custom_fields":{}},{"name":"_offset","description":null,"mode":"IN","data_type":"integer","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};