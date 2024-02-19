window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3726","name":"hdb_catalog.hdb_cron_event_invocation_logs","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"hdb_catalog"},{"field":"Name","value":"hdb_cron_event_invocation_logs"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34025","object_id":"column-34025","name":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34026","object_id":"column-34026","name":"event_id","description":null,"is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3727","name":"hdb_catalog.hdb_cron_events"}]},{"id":"column-34027","object_id":"column-34027","name":"status","description":null,"is_pk":false,"is_identity":false,"data_type":"integer","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34028","object_id":"column-34028","name":"request","description":null,"is_pk":false,"is_identity":false,"data_type":"json","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34029","object_id":"column-34029","name":"response","description":null,"is_pk":false,"is_identity":false,"data_type":"json","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34030","object_id":"column-34030","name":"created_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp with time zone","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"hdb_cron_event_invocation_logs_event_id_fkey","title":null,"description":null,"is_user_defined":false,"foreign_table":"hdb_catalog.hdb_cron_event_invocation_logs","foreign_table_verbose":"hdb_catalog.hdb_cron_event_invocation_logs","foreign_table_object_id":"t3726","primary_table":"hdb_catalog.hdb_cron_events","primary_table_verbose":"hdb_catalog.hdb_cron_events","primary_table_object_id":"t3727","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column":"id","foreign_column":"event_id"}],"custom_fields":{}}],"unique_keys":[],"triggers":[],"dependencies":{"uses":[{"object_name":"hdb_catalog.hdb_cron_event_invocation_logs","object_type":"TABLE","object_id":"t3726","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"hdb_catalog.hdb_cron_events","object_type":"TABLE","object_id":"t3727","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"imported_at":"2024-02-15 12:25"};