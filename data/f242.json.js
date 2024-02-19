window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f242","name":"public.pg_stat_statements","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Hasura","id":"d4"}},{"field":"Schema","value":"public"},{"field":"Name","value":"pg_stat_statements"},{"field":"Type","value":"Function"}],"script":"CREATE OR REPLACE FUNCTION public.pg_stat_statements(showtext boolean, OUT userid oid, OUT dbid oid, OUT toplevel boolean, OUT queryid bigint, OUT query text, OUT plans bigint, OUT total_plan_time double precision, OUT min_plan_time double precision, OUT max_plan_time double precision, OUT mean_plan_time double precision, OUT stddev_plan_time double precision, OUT calls bigint, OUT total_exec_time double precision, OUT min_exec_time double precision, OUT max_exec_time double precision, OUT mean_exec_time double precision, OUT stddev_exec_time double precision, OUT rows bigint, OUT shared_blks_hit bigint, OUT shared_blks_read bigint, OUT shared_blks_dirtied bigint, OUT shared_blks_written bigint, OUT local_blks_hit bigint, OUT local_blks_read bigint, OUT local_blks_dirtied bigint, OUT local_blks_written bigint, OUT temp_blks_read bigint, OUT temp_blks_written bigint, OUT blk_read_time double precision, OUT blk_write_time double precision, OUT temp_blk_read_time double precision, OUT temp_blk_write_time double precision, OUT wal_records bigint, OUT wal_fpi bigint, OUT wal_bytes numeric, OUT jit_functions bigint, OUT jit_generation_time double precision, OUT jit_inlining_count bigint, OUT jit_inlining_time double precision, OUT jit_optimization_count bigint, OUT jit_optimization_time double precision, OUT jit_emission_count bigint, OUT jit_emission_time double precision)\r\n RETURNS SETOF record\r\n LANGUAGE c\r\n PARALLEL SAFE STRICT\r\nAS '$libdir/pg_stat_statements', $function$pg_stat_statements_1_10$function$","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"record","custom_fields":{}},{"name":"showtext","description":null,"mode":"IN","data_type":"boolean","custom_fields":{}},{"name":"userid","description":null,"mode":"OUT","data_type":"oid","custom_fields":{}},{"name":"dbid","description":null,"mode":"OUT","data_type":"oid","custom_fields":{}},{"name":"toplevel","description":null,"mode":"OUT","data_type":"boolean","custom_fields":{}},{"name":"queryid","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"query","description":null,"mode":"OUT","data_type":"text","custom_fields":{}},{"name":"plans","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"total_plan_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}},{"name":"min_plan_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}},{"name":"max_plan_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}},{"name":"mean_plan_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}},{"name":"stddev_plan_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}},{"name":"calls","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"total_exec_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}},{"name":"min_exec_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}},{"name":"max_exec_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}},{"name":"mean_exec_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}},{"name":"stddev_exec_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}},{"name":"rows","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"shared_blks_hit","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"shared_blks_read","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"shared_blks_dirtied","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"shared_blks_written","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"local_blks_hit","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"local_blks_read","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"local_blks_dirtied","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"local_blks_written","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"temp_blks_read","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"temp_blks_written","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"blk_read_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}},{"name":"blk_write_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}},{"name":"temp_blk_read_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}},{"name":"temp_blk_write_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}},{"name":"wal_records","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"wal_fpi","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"wal_bytes","description":null,"mode":"OUT","data_type":"numeric","custom_fields":{}},{"name":"jit_functions","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"jit_generation_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}},{"name":"jit_inlining_count","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"jit_inlining_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}},{"name":"jit_optimization_count","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"jit_optimization_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}},{"name":"jit_emission_count","description":null,"mode":"OUT","data_type":"bigint","custom_fields":{}},{"name":"jit_emission_time","description":null,"mode":"OUT","data_type":"double precision","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2024-02-15 12:25"};