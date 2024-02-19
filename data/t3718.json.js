window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3718","name":"equip.request_repair","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n                <html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                    <head>\r\n                        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n                        </title>\r\n                        <style type=\"text/css\">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs82292024{color:#000000;background-color:transparent;font-family:Segoe UI;font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class=\"cs2654AE3A\"><span class=\"cs82292024\">заявки на ремонт оборудования</span></p></body>\r\n                </html>","summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"equip"},{"field":"Name","value":"request_repair"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-33929","object_id":"column-33929","name":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"(nextval('equip.request_repair_id_seq'::regclass))::text","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33930","object_id":"column-33930","name":"issue_origin","description":"postgresql - public.issue.origin (идентификатор визита)","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33931","object_id":"column-33931","name":"equipment_id","description":"postgresql - equip.equipment.id  (идентификатор оборудования)","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33932","object_id":"column-33932","name":"cust_id","description":"swe - dbo.tblCustomers.Cust_Id (идентификатор точки синхронизации)","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33933","object_id":"column-33933","name":"pos_id","description":"postgresql - public.pos.id (идентификатор торговой точки)","is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33934","object_id":"column-33934","name":"sc_id","description":"идентификатор сервисного центра","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33935","object_id":"column-33935","name":"wh_id","description":"postgresql - equip.warehouse.id (идентификатор склада)","is_pk":false,"is_identity":false,"data_type":"uuid","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33936","object_id":"column-33936","name":"swe_id","description":"swe - pos.tblRepairs.POSRepairs_ID (идентификатор заявки в swe)","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33937","object_id":"column-33937","name":"initiator_phone","description":"телефон инициатора","is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33938","object_id":"column-33938","name":"breakages","description":"swe - pos.tblBreakage.POSBreakage_ID (список идентификаторов неисправностей)","is_pk":false,"is_identity":false,"data_type":"jsonb","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33939","object_id":"column-33939","name":"date_confirm_supervisor","description":"swe - pos.tblRepairs.DateConfirm (дата подтверждения супервайзером)","is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33940","object_id":"column-33940","name":"request_date","description":"swe - pos.tblRepairs.POSRepairsDate (Дата принятия заявки на ремонтные работы)","is_pk":false,"is_identity":false,"data_type":"date","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33941","object_id":"column-33941","name":"supervisor_id","description":"swe - pos.tblRepairs.Supervisor_id (идентификатор супервайзера)","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33942","object_id":"column-33942","name":"request_status","description":"postgresql - equip.option_list.value (where object = 'request_repair_request_status')","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33943","object_id":"column-33943","name":"status","description":"postgresql - equip.option_list.value (where object = 'request_repair_status')","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"2","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33944","object_id":"column-33944","name":"sync_status","description":"not-synced, sync, error - статус синхронизации с swe","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"'not-synced'::text","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33945","object_id":"column-33945","name":"correction","description":"swe - pos.tblRepairs.ModelCorrection,pos.tblRepairs.SerialNumberCorrection,pos.tblRepairs.ReleaseDateCorrection,pos.tblRepairs.SPComment. {model, serial_number, date_release, comment_sc}. (Модель, корректировка;  Серийный номер, корректировка; Дата выпуска, корректировка; Комментарий сервисного центра)","is_pk":false,"is_identity":false,"data_type":"jsonb","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33946","object_id":"column-33946","name":"comment","description":"swe - pos.tblRepairs.Comment (комментарий)","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33947","object_id":"column-33947","name":"created_by","description":"кто создал заявку","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33948","object_id":"column-33948","name":"created_at","description":"время когда создали заявку","is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33949","object_id":"column-33949","name":"updated_by","description":"кто последний корректировал заявку","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33950","object_id":"column-33950","name":"updated_at","description":"дата последней корректировки заявки","is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33951","object_id":"column-33951","name":"created_in","description":"система в которой создана заявка","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33952","object_id":"column-33952","name":"deleted","description":"признак удаления","is_pk":false,"is_identity":false,"data_type":"boolean","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"false","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33953","object_id":"column-33953","name":"org_structure_id","description":null,"is_pk":false,"is_identity":false,"data_type":"uuid","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35337","object_id":"column-35337","name":"capacitor_id","description":"Id устройства с которого изменена запись","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35338","object_id":"column-35338","name":"updated_client_at","description":"когда обновлено на клиенте (используется при синхронизации атлас)","is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[],"triggers":[],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};