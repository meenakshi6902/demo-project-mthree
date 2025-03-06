import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import postgres from "postgres";
import authRoutes from "./authRoutes.js";  // Fixed import

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Setup PostgreSQL connection
const sql = postgres(process.env.DATABASE_URL, {
    ssl: "require",
});

// Test Database Connection
const checkConnection = async () => {
    try {
        await sql`SELECT 1`;
        console.log("✅ Database connection successful");
    } catch (error) {
        console.error("❌ Database connection failed:", error);
    }
};
checkConnection();

// Use the authentication routes
app.use("/auth", authRoutes);  // Prefix the routes with /auth

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
