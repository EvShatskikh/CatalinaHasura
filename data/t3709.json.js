window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3709","name":"equip.equipment","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n                <html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                    <head>\r\n                        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n                        </title>\r\n                        <style type=\"text/css\">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs82292024{color:#000000;background-color:transparent;font-family:Segoe UI;font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class=\"cs2654AE3A\"><span class=\"cs82292024\">Оборудование (pos.tblPOS)</span></p></body>\r\n                </html>","summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"equip"},{"field":"Name","value":"equipment"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-33792","object_id":"column-33792","name":"id","description":"ID POS-оборудования (POS_ID)","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33793","object_id":"column-33793","name":"pos_id","description":"ID точки (tblLocation.Ol_id)","is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33794","object_id":"column-33794","name":"name","description":"Название POS-оборудования (POS_Name)","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33795","object_id":"column-33795","name":"type_id","description":"Идентификатор типа POS-оборудования (POSType_ID)","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33796","object_id":"column-33796","name":"brand_id","description":"Идентификатор бренда POS-оборудования (POSBrand_ID)","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33797","object_id":"column-33797","name":"serial_no","description":"Серийный номер оборудования (Serial_No)","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33798","object_id":"column-33798","name":"invent_no","description":"Инвентарный номер оборудования (Invent_No)","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33799","object_id":"column-33799","name":"bar_code","description":"Штрих-код (ScanCode)","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33800","object_id":"column-33800","name":"nfc_code","description":"NFC-код (NFC_Code)","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3862","name":"equip.nfc"}]},{"id":"column-33801","object_id":"column-33801","name":"install_date","description":"Дата установки (tblLocation.Date)","is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33802","object_id":"column-33802","name":"last_date_confirmation","description":"Последняя дата подтверждения (LastDateOfConfirmation)","is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33803","object_id":"column-33803","name":"last_date_inventory","description":"Последняя дата инвентаризации (LastDateOfInventory)","is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33804","object_id":"column-33804","name":"technical_cond_id","description":"Техническое состояние оборудования (TechnicalCondition)","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33805","object_id":"column-33805","name":"comment","description":"Комментарий (Comment)","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33806","object_id":"column-33806","name":"info","description":"server, Год выпуска оборудования (YearProduction), Количество дверей (DoorsQty)","is_pk":false,"is_identity":false,"data_type":"jsonb","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"'{}'::jsonb","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33807","object_id":"column-33807","name":"contract_info","description":"Информация по контракту (tblPOSContracts + tblPOSContractDetails)","is_pk":false,"is_identity":false,"data_type":"jsonb","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"'{}'::jsonb","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33808","object_id":"column-33808","name":"created_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33809","object_id":"column-33809","name":"created_by","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33810","object_id":"column-33810","name":"updated_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33811","object_id":"column-33811","name":"updated_by","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33812","object_id":"column-33812","name":"deleted","description":null,"is_pk":false,"is_identity":false,"data_type":"boolean","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"false","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33813","object_id":"column-33813","name":"wh_id","description":"ID склада (tblLocation.POSW_ID)","is_pk":false,"is_identity":false,"data_type":"uuid","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33814","object_id":"column-33814","name":"w_order_no","description":"Номер акта (pos.tblWarehouseOrders.WOrderNo)","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35065","object_id":"column-35065","name":"nfc_status_id","description":"статус проверки корректности привязки NFC-метки","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35066","object_id":"column-35066","name":"fts","description":null,"is_pk":false,"is_identity":false,"data_type":"tsvector","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35237","object_id":"column-35237","name":"nfc_confirmed_by","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35238","object_id":"column-35238","name":"nfc_confirmed_at","description":"Дата подтверждения NFC метки","is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35329","object_id":"column-35329","name":"capacitor_id","description":"Id устройства с которого изменена запись","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35330","object_id":"column-35330","name":"updated_client_at","description":"когда обновлено на клиенте (используется при синхронизации атлас)","is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"equipment_nfc_code_fkey","title":null,"description":null,"is_user_defined":false,"foreign_table":"equip.equipment","foreign_table_verbose":"equip.equipment","foreign_table_object_id":"t3709","primary_table":"equip.nfc","primary_table_verbose":"equip.nfc","primary_table_object_id":"t3862","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column":"id","foreign_column":"nfc_code"}],"custom_fields":{}}],"unique_keys":[],"triggers":[],"dependencies":{"uses":[{"object_name":"equip.equipment","object_type":"TABLE","object_id":"t3709","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"equip.nfc","object_type":"TABLE","object_id":"t3862","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"imported_at":"2024-02-15 12:25"};