window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3818","name":"public.survey_result","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs416E45A4{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">Анкеты - результат опроса</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"survey_result"},{"field":"Type","value":"Table"},{"field":"Module","value":[{"_type":"link","name":"Survey","id":"m110"}]}],"columns":[{"id":"column-34805","object_id":"column-34805","name":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"(nextval('survey_result_id_seq'::regclass))::text","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34806","object_id":"column-34806","name":"survey_id","description":"анкета, по которой отвечает респондент","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34807","object_id":"column-34807","name":"user_id","description":"пользователь, который заполняет анкету","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34808","object_id":"column-34808","name":"org_structure_id","description":"орд.структура, к которой привязан отвечающий пользователь (если установлена для пользователя)","is_pk":false,"is_identity":false,"data_type":"uuid","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34809","object_id":"column-34809","name":"issue_id","description":"запрос, по которому заполняется анкета (если анкета по запросу)","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34810","object_id":"column-34810","name":"pos_id","description":"ТТ, по которой проводится опрос (если опрос по ТТ)","is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3798","name":"public.pos (Торговая точка)"}]},{"id":"column-34811","object_id":"column-34811","name":"comment","description":"комментарий к анкете","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34812","object_id":"column-34812","name":"completed_at","description":"дата выполнения анкеты","is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34813","object_id":"column-34813","name":"survey_info","description":"информация по анкете для историчности (название и т.п)","is_pk":false,"is_identity":false,"data_type":"jsonb","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"'{}'::jsonb","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34814","object_id":"column-34814","name":"created_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34815","object_id":"column-34815","name":"updated_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34816","object_id":"column-34816","name":"created_by","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34817","object_id":"column-34817","name":"updated_by","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34818","object_id":"column-34818","name":"call_id","description":"звонок, по которому заполняется анкета","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34819","object_id":"column-34819","name":"points","description":"кол-во набранных баллов за анкету","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34820","object_id":"column-34820","name":"points_max","description":"максимальное кол-во баллов за анкету","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34821","object_id":"column-34821","name":"points_block","description":"включен блок-фактор по анкете","is_pk":false,"is_identity":false,"data_type":"boolean","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"false","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34822","object_id":"column-34822","name":"target_user_id","description":"id пользователя, которого оценивают","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34823","object_id":"column-34823","name":"target_org_structure_id","description":"орг. структура  пользователя, которого оценивают","is_pk":false,"is_identity":false,"data_type":"uuid","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34824","object_id":"column-34824","name":"issue_origin","description":"origin запроса (для синка с атласом)","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35347","object_id":"column-35347","name":"capacitor_id","description":"Id устройства с которого изменена запись","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35348","object_id":"column-35348","name":"updated_client_at","description":"когда обновлено на клиенте (используется при синхронизации атлас)","is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"survey_result_pos_id_fkey","title":null,"description":null,"is_user_defined":false,"foreign_table":"public.survey_result","foreign_table_verbose":"public.survey_result","foreign_table_object_id":"t3818","primary_table":"public.pos","primary_table_verbose":"public.pos (Торговая точка)","primary_table_object_id":"t3798","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column":"id","foreign_column":"pos_id"}],"custom_fields":{}}],"unique_keys":[],"triggers":[],"dependencies":{"uses":[{"object_name":"public.survey_result","object_type":"TABLE","object_id":"t3818","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"public.pos (Торговая точка)","object_type":"TABLE","object_id":"t3798","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[{"object_name":"public.survey_result","object_type":"TABLE","object_id":"t3818","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"atlas.last_survey_result","object_type":"VIEW","object_id":"v3830","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"public.survey_view","object_type":"VIEW","object_id":"v3844","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]}]}]},"imported_at":"2024-02-15 12:25"};