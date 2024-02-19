window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3859","name":"atlas.poc","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n                <html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                    <head>\r\n                        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n                        </title>\r\n                        <style type=\"text/css\">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs82292024{color:#000000;background-color:transparent;font-family:Segoe UI;font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class=\"cs2654AE3A\"><span class=\"cs82292024\">POC - Показатели эффективности ТТ</span></p></body>\r\n                </html>","summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"atlas"},{"field":"Name","value":"poc"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-35124","object_id":"column-35124","name":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"nextval('atlas.poc_id_seq'::regclass)","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35125","object_id":"column-35125","name":"name","description":"название показателя","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35126","object_id":"column-35126","name":"channel_id","description":"канал ТТ","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35127","object_id":"column-35127","name":"formula","description":"название процедуры, по которой будет рассчитан показатель","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"'sum'::text","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35128","object_id":"column-35128","name":"formula_data","description":"настройки необходимые для расчета показателя","is_pk":false,"is_identity":false,"data_type":"jsonb","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"jsonb_build_object()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35129","object_id":"column-35129","name":"points","description":"баллы за выполнение показателя","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35130","object_id":"column-35130","name":"is_active","description":null,"is_pk":false,"is_identity":false,"data_type":"boolean","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"true","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35131","object_id":"column-35131","name":"created_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35132","object_id":"column-35132","name":"created_by","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35133","object_id":"column-35133","name":"updated_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35134","object_id":"column-35134","name":"updated_by","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35135","object_id":"column-35135","name":"path","description":"иерархия показателей","is_pk":false,"is_identity":false,"data_type":"ltree","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35136","object_id":"column-35136","name":"sort","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"1","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35137","object_id":"column-35137","name":"sort_path","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"''::text","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35138","object_id":"column-35138","name":"deleted","description":null,"is_pk":false,"is_identity":false,"data_type":"boolean","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"false","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35231","object_id":"column-35231","name":"pos_on","description":null,"is_pk":false,"is_identity":false,"data_type":"jsonb","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"jsonb_build_object()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35232","object_id":"column-35232","name":"pos_off","description":null,"is_pk":false,"is_identity":false,"data_type":"jsonb","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"jsonb_build_object()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[],"triggers":[],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};