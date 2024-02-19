window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3701","name":"atlas.sm","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n                <html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                    <head>\r\n                        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n                        </title>\r\n                        <style type=\"text/css\">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs82292024{color:#000000;background-color:transparent;font-family:Segoe UI;font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class=\"cs2654AE3A\"><span class=\"cs82292024\">Smart-Merch: инфо по фотографированию сцен при визите в ТТ</span></p></body>\r\n                </html>","summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"atlas"},{"field":"Name","value":"sm"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-33704","object_id":"column-33704","name":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33705","object_id":"column-33705","name":"scene_id","description":"код сцены (от smart merch)","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33706","object_id":"column-33706","name":"pos_id","description":"код точки","is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33707","object_id":"column-33707","name":"issue_origin","description":"код визита = issue.origin","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33708","object_id":"column-33708","name":"img_qty","description":"количество сделанных фото по сцене","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33709","object_id":"column-33709","name":"img_uploaded","description":"скільки фото вже завантажено","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33710","object_id":"column-33710","name":"name","description":"название  сцены","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33711","object_id":"column-33711","name":"created_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33712","object_id":"column-33712","name":"updated_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33713","object_id":"column-33713","name":"created_by","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33714","object_id":"column-33714","name":"response_image","description":"адрес результата распознавания от smart merch","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33715","object_id":"column-33715","name":"response_json","description":"ссылка на результат распознавания от smart merch","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33716","object_id":"column-33716","name":"response_stat","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33717","object_id":"column-33717","name":"scene_no","description":"номер сцены из одинаковых сцен в рамках визита","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33718","object_id":"column-33718","name":"region","description":"страна ( ru, ua )","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"'ru'::text","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33719","object_id":"column-33719","name":"deleted","description":"сцена удалена","is_pk":false,"is_identity":false,"data_type":"boolean","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"false","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33720","object_id":"column-33720","name":"updated_client_at","description":"когда обновлено на клиенте (используется при синхронизации)","is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33721","object_id":"column-33721","name":"camera_log","description":"лог действий от smart merch","is_pk":false,"is_identity":false,"data_type":"jsonb","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35236","object_id":"column-35236","name":"planogram_id","description":"Id планограммы (plano.planogram) по которой сделана сцена","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35327","object_id":"column-35327","name":"capacitor_id","description":"Id устройства с которого изменена запись","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[],"triggers":[],"dependencies":{"uses":[],"used_by":[{"object_name":"atlas.sm","object_type":"TABLE","object_id":"t3701","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"atlas.view_last_visit_scenes","object_type":"VIEW","object_id":"v3831","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]}]}]},"imported_at":"2024-02-15 12:25"};