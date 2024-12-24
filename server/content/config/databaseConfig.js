import { createConnection } from "mysql2";

const db = createConnection({
  user: "root",
  host: "mysql-dr",
  password: "636mAMnAhymLQos/GjIhe+6uRHm5TK68uP4FPLIP4Yo",
  database: "darken",
  port: 3306,
});

export { db };
