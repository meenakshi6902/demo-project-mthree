import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 
import dotenv from "dotenv";
import authenticateToken from "./authMiddleware"; 
import sql from './db'; 

dotenv.config();

const router = express.Router();
const JWT_SECRET = process.env.JSONTOKEN || "defaultsecret";

// Register User API
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        console.log("Received data:", { username, email, password });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await sql`
            INSERT INTO users (username, email, password) 
            VALUES (${username}, ${email}, ${hashedPassword}) 
            RETURNING id, username, email;
        `;

        console.log("Database response:", result);

        res.status(201).json({ message: "User registered successfully", user: result[0] });
    } catch (error) {
        console.error("Error inserting user:", error);
        res.status(500).json({ error: "Database error", details: error.message });
    }
});

// Login User API
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        // Check if user exists
        const user = await sql`SELECT * FROM users WHERE email = ${email}`;

        if (user.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user[0].password);

        if (!isMatch) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user[0].id, username: user[0].username }, JWT_SECRET, {
            expiresIn: "24h", // Token expiration time
        });

        // Login successful
        res.status(200).json({
            message: "Login successful",
            user: { id: user[0].id, email: user[0].email, username: user[0].username },
            token, // Sending the JWT token back
        });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: "Database error" });
    }
});

// Protected Route Example - Using the authenticateToken middleware
router.get("/protected", authenticateToken, (req, res) => {
    res.status(200).json({
        message: "This is a protected route",
        user: req.user, 
    });
});

export default router;
