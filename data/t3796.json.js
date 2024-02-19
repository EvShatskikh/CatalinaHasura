window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3796","name":"public.operator_status_log","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n                <html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                    <head>\r\n                        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n                        </title>\r\n                        <style type=\"text/css\">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs82292024{color:#000000;background-color:transparent;font-family:Segoe UI;font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class=\"cs2654AE3A\"><span class=\"cs82292024\">лог изменений статусов операторов</span></p></body>\r\n                </html>","summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"operator_status_log"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34617","object_id":"column-34617","name":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"nextval('operator_status_log_id_seq'::regclass)","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34618","object_id":"column-34618","name":"operator","description":"номер оператора","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34619","object_id":"column-34619","name":"status","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34620","object_id":"column-34620","name":"created_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34621","object_id":"column-34621","name":"created_by","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34622","object_id":"column-34622","name":"date_from","description":"время перехода в статус","is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34623","object_id":"column-34623","name":"date_to","description":"время завершения статуса (если NULL то до текущего момента)","is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34624","object_id":"column-34624","name":"calc","description":"фиктивное поле для возврата времени в статусе через функцию calc_operator_status","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[],"triggers":[],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};