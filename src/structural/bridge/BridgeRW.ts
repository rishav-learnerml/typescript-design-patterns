interface ImplementDB {
  connectToDb(): void;
  queryDB(query: string): void;
  close(): void;
}

class PostgresDb implements ImplementDB {
  public connectToDb(): void {
    console.log("Connected to Postgres...");
  }

  public queryDB(query: string): void {
    console.log(`Executing ${query} on postgres DB...`);
  }

  public close(): void {
    console.log("Closing Postgres Connection...");
  }
}

class MongoDb implements ImplementDB {
  public connectToDb(): void {
    console.log("Connected to MongoDB...");
  }

  public queryDB(query: string): void {
    console.log(`Executing ${query} on Mongo DB...`);
  }

  public close(): void {
    console.log("Closing Mongo Connection...");
  }
}

abstract class DatabaseService {
  constructor(protected database: ImplementDB) {}

  public abstract fetchData(query: string): void;
}

class ClientDbService extends DatabaseService {
  public fetchData(query: string): void {
    this.database.connectToDb();
    this.database.queryDB(query);
    this.database.close();
  }
}

export { PostgresDb, MongoDb, ClientDbService };
