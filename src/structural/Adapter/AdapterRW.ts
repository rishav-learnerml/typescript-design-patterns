class PostgreSql {
  connectToPostgresDB(_uri: string) {
    console.log(`Connecting to Postgres DB`);
  }
  queryPostgresDB(_query: string) {
    console.log(`Querying Postgres DB : ${_query}`);
  }
}

class MySql {
  connectToMySqlDB(_uri: string) {
    console.log(`Connecting to MySql DB`);
  }
  queryMySqlDB(_query: string) {
    console.log(`Querying MySql DB : ${_query}`);
  }
}

class DBAdapter {
  constructor(private _postgres: PostgreSql) {}
  connectToMySqlDB(_uri: string) {
    this._postgres.queryPostgresDB(_uri);
  }
  queryMySqlDB(_query: string) {
    this._postgres.queryPostgresDB(_query);
  }
}

export { MySql, PostgreSql, DBAdapter };
