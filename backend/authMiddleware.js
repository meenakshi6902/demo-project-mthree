import jwt from 'jsonwebtoken';

// Middleware to authenticate JWT token
const authenticateToken = (req, res, next) => {
    // Extract token from the Authorization header
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) return res.status(401).json({ error: "No token provided" });

    // Verify the token
    jwt.verify(token, process.env.JSONTOKEN, (err, user) => {
        if (err) return res.status(403).json({ error: "Invalid token" });

        req.user = user;  // Attach the user information to the request object
        next();  // Proceed to the next middleware/route handler
    });
};

export default authenticateToken;
