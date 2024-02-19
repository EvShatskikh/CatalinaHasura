window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3802","name":"public.product","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"product"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34685","object_id":"column-34685","name":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"nextval('product_id_seq'::regclass)","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34686","object_id":"column-34686","name":"name","description":"название из первоисточника","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34687","object_id":"column-34687","name":"origin","description":"первоисточник данных в формате swe_111 или b2b_111","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34688","object_id":"column-34688","name":"info","description":"параметры и ИД внешних систем {swe_id, b2b_id...}","is_pk":false,"is_identity":false,"data_type":"jsonb","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"jsonb_build_object()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34689","object_id":"column-34689","name":"sku_id","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34690","object_id":"column-34690","name":"sku_name","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34691","object_id":"column-34691","name":"brand_name","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34692","object_id":"column-34692","name":"volume","description":"объем, дал","is_pk":false,"is_identity":false,"data_type":"numeric","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34693","object_id":"column-34693","name":"unit_name","description":"тип упаковки (банка, бутылка, кег и пр.)","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34694","object_id":"column-34694","name":"qty_in_pack","description":"кол-во шт в упаковке","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34695","object_id":"column-34695","name":"is_alcohol_free","description":"признак безалкогольной продукции","is_pk":false,"is_identity":false,"data_type":"boolean","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34696","object_id":"column-34696","name":"tare_id","description":"ИД тары, self FK","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34697","object_id":"column-34697","name":"mix_products","description":"состав (для сборной упаковки) ([{id: 'self FK'\", quantity:\"кол-во шт\"}}])","is_pk":false,"is_identity":false,"data_type":"jsonb","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34698","object_id":"column-34698","name":"deleted","description":null,"is_pk":false,"is_identity":false,"data_type":"boolean","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"false","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34699","object_id":"column-34699","name":"updated_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[],"triggers":[],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};