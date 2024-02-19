window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3745","name":"order.product_last_order","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"order"},{"field":"Name","value":"product_last_order"},{"field":"Type","value":"Table"},{"field":"Module","value":[{"_type":"link","name":"Order","id":"m105"}]}],"columns":[{"id":"column-34226","object_id":"column-34226","name":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"nextval('\"order\".product_last_order_id_seq'::regclass)","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34227","object_id":"column-34227","name":"product_id","description":"id продукта с таблицы \"public.product\"","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34228","object_id":"column-34228","name":"pos_id","description":"id ТТ с таблицы \"public.pos\"","is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34229","object_id":"column-34229","name":"last_order_date","description":"дата последнего заказа. данные с swe(dbo.tblOutletOrderH.OlOrderDate)\"","is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34230","object_id":"column-34230","name":"last_order_count","description":"кол-во с последнего заказа. данные с swe(dbo.tblOutletOrderD.Product_qty)\"","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34231","object_id":"column-34231","name":"week1","description":"кол-во за 7 дней от текущей даты. данные с swe(dbo.tblOutletOrderD.Product_qty)\"","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34232","object_id":"column-34232","name":"week2","description":"кол-во за период 7-14 дней от текущей даты. данные с swe(dbo.tblOutletOrderD.Product_qty)\"","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34233","object_id":"column-34233","name":"week3","description":"кол-во за период 14-21 дней от текущей даты. данные с swe(dbo.tblOutletOrderD.Product_qty)\"","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34234","object_id":"column-34234","name":"week4","description":"кол-во за период 21-28 дней от текущей даты. данные с swe(dbo.tblOutletOrderD.Product_qty)\"","is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34235","object_id":"column-34235","name":"updated_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"now()","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[],"triggers":[],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};