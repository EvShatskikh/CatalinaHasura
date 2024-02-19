window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3815","name":"public.survey_category","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs416E45A4{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">Анкета - категории вопросов</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"survey_category"},{"field":"Type","value":"Table"},{"field":"Module","value":[{"_type":"link","name":"Survey","id":"m110"}]}],"columns":[{"id":"column-34769","object_id":"column-34769","name":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"nextval('survey_category_id_seq'::regclass)","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34770","object_id":"column-34770","name":"survey_id","description":"анкета, к которой привязана категория","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3813","name":"public.survey"}]},{"id":"column-34771","object_id":"column-34771","name":"name","description":"название категории","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34772","object_id":"column-34772","name":"sort","description":"порядок сортировка","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34773","object_id":"column-34773","name":"dependency","description":"зависимости (ответы на вопросы, от которых зависит категория)","is_pk":false,"is_identity":false,"data_type":"jsonb","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34774","object_id":"column-34774","name":"created_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34775","object_id":"column-34775","name":"updated_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34776","object_id":"column-34776","name":"created_by","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34777","object_id":"column-34777","name":"updated_by","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34778","object_id":"column-34778","name":"is_active","description":"отображать ли категорию","is_pk":false,"is_identity":false,"data_type":"boolean","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"true","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"survey_category_survey_id_fkey","title":null,"description":null,"is_user_defined":false,"foreign_table":"public.survey_category","foreign_table_verbose":"public.survey_category","foreign_table_object_id":"t3815","primary_table":"public.survey","primary_table_verbose":"public.survey","primary_table_object_id":"t3813","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column":"id","foreign_column":"survey_id"}],"custom_fields":{}},{"name":"survey_question_category_id_fkey","title":null,"description":null,"is_user_defined":false,"foreign_table":"public.survey_question","foreign_table_verbose":"public.survey_question","foreign_table_object_id":"t3816","primary_table":"public.survey_category","primary_table_verbose":"public.survey_category","primary_table_object_id":"t3815","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column":"id","foreign_column":"category_id"}],"custom_fields":{}}],"unique_keys":[],"triggers":[],"dependencies":{"uses":[{"object_name":"public.survey_category","object_type":"TABLE","object_id":"t3815","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"public.survey","object_type":"TABLE","object_id":"t3813","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[{"object_name":"public.survey_category","object_type":"TABLE","object_id":"t3815","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"public.survey_question","object_type":"TABLE","object_id":"t3816","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"imported_at":"2024-02-15 12:25"};