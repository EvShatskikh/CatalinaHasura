window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3790","name":"public.matrix_m2m_pos (Связка матрицы и точки)","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs416E45A4{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">связь матриц и точек (в каждом месяце точка может быть привязана к 1 матрице)</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"matrix_m2m_pos"},{"field":"Type","value":"Table"},{"field":"Title","value":"Связка матрицы и точки"},{"field":"Module","value":[{"_type":"link","name":"Matrix","id":"m104"}]}],"columns":[{"id":"column-34581","object_id":"column-34581","name":"pos_id","description":"ТТ, привязанная к матрице","is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3798","name":"public.pos (Торговая точка)"}]},{"id":"column-34582","object_id":"column-34582","name":"month","description":"месяц действия связи","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34583","object_id":"column-34583","name":"matrix_id","description":"матрица","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3784","name":"public.matrix (Матрица)"}]},{"id":"column-34584","object_id":"column-34584","name":"created_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34585","object_id":"column-34585","name":"created_by","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34586","object_id":"column-34586","name":"updated_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34587","object_id":"column-34587","name":"updated_by","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"matrix_m2m_pos_matrix_id_fkey","title":null,"description":null,"is_user_defined":false,"foreign_table":"public.matrix_m2m_pos","foreign_table_verbose":"public.matrix_m2m_pos (Связка матрицы и точки)","foreign_table_object_id":"t3790","primary_table":"public.matrix","primary_table_verbose":"public.matrix (Матрица)","primary_table_object_id":"t3784","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column":"id","foreign_column":"matrix_id"}],"custom_fields":{}},{"name":"matrix_m2m_pos_pos_id_fkey","title":null,"description":null,"is_user_defined":false,"foreign_table":"public.matrix_m2m_pos","foreign_table_verbose":"public.matrix_m2m_pos (Связка матрицы и точки)","foreign_table_object_id":"t3790","primary_table":"public.pos","primary_table_verbose":"public.pos (Торговая точка)","primary_table_object_id":"t3798","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column":"id","foreign_column":"pos_id"}],"custom_fields":{}}],"unique_keys":[],"triggers":[],"dependencies":{"uses":[{"object_name":"public.matrix_m2m_pos (Связка матрицы и точки)","object_type":"TABLE","object_id":"t3790","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"public.matrix (Матрица)","object_type":"TABLE","object_id":"t3784","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"public.pos (Торговая точка)","object_type":"TABLE","object_id":"t3798","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"imported_at":"2024-02-15 12:25"};