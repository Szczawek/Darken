import { createConnection } from "mysql2";

const db = createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "9goFK18O7XNFZI",
  database: "darken",
  port: 3306,
});

export { db };
