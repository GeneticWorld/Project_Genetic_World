import { createPool  } from "mysql2/promise";

const pool = createPool ({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})