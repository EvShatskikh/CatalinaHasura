window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f229","name":"public.kb_article_upsert_trigger","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"kb_article_upsert_trigger"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.kb_article_upsert_trigger()\r\n RETURNS trigger\r\n LANGUAGE plpgsql\r\nAS $function$ \r\nDECLARE\r\n  category_title jsonb;\r\n  search_ru text;\r\n  search_ua text;\r\nbegin  \r\n    /* получаем название категории */\r\n    SELECT title INTO category_title FROM kb_category WHERE id = new.category_id;\r\n\r\n    /* RU */ \r\n    search_ru := COALESCE(new.title->>'ru', '') ||' '||  COALESCE(new.description->>'ru', '') ||' '||  COALESCE(new.tags->>'ru', '') ||' '||  COALESCE(category_title->>'ru', '');\r\n    new.fts_ru := to_tsvector('russian', search_ru);\r\n\r\n    /* UA */ \r\n    search_ua := COALESCE(new.title->>'ua', '') ||' '||  COALESCE(new.description->>'ua', '') ||' '||  COALESCE(new.tags->>'ua', '') ||' '||  COALESCE(category_title->>'ua', '');\r\n    new.fts_ua := to_tsvector('russian', search_ua);\r\n\r\n    return new;\r\nend  \r\n$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"trigger","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};