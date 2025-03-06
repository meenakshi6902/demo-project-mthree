import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

// Setup PostgreSQL connection
const sql = postgres(process.env.DATABASE_URL, {
    ssl: "require",
});

export default sql;  // Exporting sql instance for reuse
