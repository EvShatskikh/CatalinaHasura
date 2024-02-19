window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3883","name":"route_mgr.inclusion","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"route_mgr"},{"field":"Name","value":"inclusion"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-35316","object_id":"column-35316","name":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35317","object_id":"column-35317","name":"org_structure_id","description":null,"is_pk":false,"is_identity":false,"data_type":"uuid","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3797","name":"public.org_structure (Оргструктура)"}]},{"id":"column-35318","object_id":"column-35318","name":"data_include","description":null,"is_pk":false,"is_identity":false,"data_type":"date","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35319","object_id":"column-35319","name":"comment","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35320","object_id":"column-35320","name":"created_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35321","object_id":"column-35321","name":"created_by","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35322","object_id":"column-35322","name":"updated_by","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35323","object_id":"column-35323","name":"is_active","description":null,"is_pk":false,"is_identity":false,"data_type":"boolean","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35324","object_id":"column-35324","name":"updated_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"inclusion_org_structure_id_fkey","title":null,"description":null,"is_user_defined":false,"foreign_table":"route_mgr.inclusion","foreign_table_verbose":"route_mgr.inclusion","foreign_table_object_id":"t3883","primary_table":"public.org_structure","primary_table_verbose":"public.org_structure (Оргструктура)","primary_table_object_id":"t3797","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column":"id","foreign_column":"org_structure_id"}],"custom_fields":{}}],"unique_keys":[],"triggers":[],"dependencies":{"uses":[{"object_name":"route_mgr.inclusion","object_type":"TABLE","object_id":"t3883","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"public.org_structure (Оргструктура)","object_type":"TABLE","object_id":"t3797","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"imported_at":"2024-02-15 12:25"};