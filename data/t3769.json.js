window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3769","name":"public.field","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n                <html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                    <head>\r\n                        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n                        </title>\r\n                        <style type=\"text/css\">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs82292024{color:#000000;background-color:transparent;font-family:Segoe UI;font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class=\"cs2654AE3A\"><span class=\"cs82292024\">дополнительные поля в запросах</span></p></body>\r\n                </html>","summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"field"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34394","object_id":"column-34394","name":"name","description":"название поля","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34395","object_id":"column-34395","name":"group_id","description":"группа, к которой относится поле","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3824","name":"public.user_group"}]},{"id":"column-34396","object_id":"column-34396","name":"type","description":"тип данныз для поля: text, number, date","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"'text'::text","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34397","object_id":"column-34397","name":"created_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34398","object_id":"column-34398","name":"created_by","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34399","object_id":"column-34399","name":"updated_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34400","object_id":"column-34400","name":"updated_by","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"field_group_id_fkey","title":null,"description":null,"is_user_defined":false,"foreign_table":"public.field","foreign_table_verbose":"public.field","foreign_table_object_id":"t3769","primary_table":"public.user_group","primary_table_verbose":"public.user_group","primary_table_object_id":"t3824","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column":"name","foreign_column":"group_id"}],"custom_fields":{}},{"name":"issue_m2m_field_field_id_fkey","title":null,"description":null,"is_user_defined":false,"foreign_table":"public.issue_m2m_field","foreign_table_verbose":"public.issue_m2m_field","foreign_table_object_id":"t3776","primary_table":"public.field","primary_table_verbose":"public.field","primary_table_object_id":"t3769","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column":"name","foreign_column":"field_id"}],"custom_fields":{}}],"unique_keys":[],"triggers":[],"dependencies":null,"imported_at":"2023-11-29 12:21"};