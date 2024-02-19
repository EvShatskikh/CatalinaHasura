window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f234","name":"public.matrix_copy","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"matrix_copy"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.matrix_copy(_from_month integer, _to_month integer)\r\n RETURNS SETOF return_int_f\r\n LANGUAGE plpgsql\r\nAS $function$\r\n\r\nBEGIN\r\n\r\n    IF EXISTS( SELECT id from public.matrix WHERE month = _to_month )\r\n        THEN RETURN QUERY SELECT -1::bigint ;\r\n        RETURN;\r\n    END IF; \r\n    \r\n    INSERT INTO public.matrix (name, is_auto, created_at, created_by, updated_at, updated_by, \r\n    created_by_id, is_active, region, auto_filters, month, previous_id)\r\n    SELECT\r\n        name,\r\n        is_auto,\r\n        now(),          -- created_at\r\n        created_by,\r\n        now(),          -- updated_at\r\n        updated_by,\r\n        created_by_id,\r\n        is_active,\r\n        region,\r\n        auto_filters,\r\n        _to_month,\r\n        id              -- previous_id\r\n    FROM public.matrix m\r\n    WHERE month = _from_month and m.is_active = true;\r\n\r\n    -- добавить поля в public.matrix_m2m_pos\r\n    INSERT INTO public.matrix_m2m_pos (matrix_id, pos_id, created_at, created_by, updated_at, updated_by, month)\r\n    SELECT\r\n        m.id,           -- matrix_id\r\n        mp.pos_id,\r\n        now(),          -- created_at\r\n        mp.created_by,\r\n        now(),          -- updated_at\r\n        mp.updated_by,\r\n        _to_month    -- month\r\n    FROM public.matrix_m2m_pos mp\r\n    JOIN public.matrix m ON mp.matrix_id = m.previous_id\r\n    WHERE m.month = _to_month and m.is_active = true;\r\n\r\n    -- добавить поля в public.matrix_m2m_sku\r\n    INSERT INTO public.matrix_m2m_sku (matrix_id, sku_id, created_at, created_by, updated_at, updated_by)\r\n    SELECT\r\n        m.id,           -- matrix_id\r\n        ms.sku_id,\r\n        now(),          -- created_at\r\n        ms.created_by,\r\n        now(),          -- updated_at\r\n        ms.updated_by\r\n    FROM public.matrix_m2m_sku ms\r\n    JOIN public.matrix m ON ms.matrix_id = m.previous_id\r\n    WHERE m.month = _to_month and m.is_active = true;\r\n\r\n    RETURN QUERY SELECT count(*)::bigint FROM matrix WHERE month = _to_month;\r\n   \r\nEND\r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"return_int_f","custom_fields":{}},{"name":"_from_month","description":null,"mode":"IN","data_type":"integer","custom_fields":{}},{"name":"_to_month","description":null,"mode":"IN","data_type":"integer","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};