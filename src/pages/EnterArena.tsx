// import React from "react";
// import registerImage from "../assets/register.jpg";
// import { Link } from "react-router-dom";


// const Login: React.FC = () => {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Login</h1>
//       <label style={styles.label}>Email</label>
//       <input type="email" style={styles.input} placeholder="Enter your email" />
      
//       <label style={styles.label}>Password</label>
//       <input type="password" style={styles.input} placeholder="Enter your password" />

//   <p style={styles.registerText}>
//   Don't have an account yet?{" "}
//   <Link to="/registration" style={styles.registerLink}>Register.</Link>
// </p>

      
// <button style={styles.submitButton}>
//   <Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
//     Submit
//   </Link>
// </button>

//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     width: "100vw",
//     backgroundImage: `url(${registerImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     position: "relative",
//   },
//   heading: {
//     fontSize: "32px",
//     fontWeight: "bold",
//     color: "white",
//     textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
//     marginBottom: "20px",
//     zIndex: 2,
//   },
//   label: {
//     color: "white",
//     fontSize: "18px",
//     marginBottom: "8px",
//     zIndex: 2,
//   },
//   input: {
//     width: "300px",
//     padding: "10px",
//     fontSize: "16px",
//     border: "none",
//     borderRadius: "5px",
//     backgroundColor: "white",
//     marginBottom: "15px",
//     zIndex: 2,
//   },
//   registerText: {
//     color: "white",
//     fontSize: "14px",
//     marginTop: "10px",
//     zIndex: 2,
//   },
//   registerLink: {
//     color: "#FFD700",
//     cursor: "pointer",
//     textDecoration: "underline",
//   },
//   submitButton: {
//     marginTop: "15px",
//     backgroundColor: "#3B3FCB",
//     color: "white",
//     fontSize: "16px",
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     zIndex: 2,
//   },
// };

// export default Login;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

import registerImage from "../assets/register.jpg";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Successful:", formData);
    alert("Login Successful!");
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${registerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          padding: "30px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "2rem",
          color: "white",
          width: "350px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.6)",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "20px", fontFamily: "serif" }}>
          Login
        </Typography>

        {/* Form Start */}
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Typography sx={styles.label}>Email</Typography>
          <TextField
            type="email"
            variant="outlined"
            fullWidth
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={styles.input}
          />

          <Typography sx={styles.label}>Password</Typography>
          <TextField
            type="password"
            variant="outlined"
            fullWidth
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            sx={styles.input}
          />

          <Button type="submit" variant="contained" sx={styles.submitButton}>
            Submit
          </Button>
        </form>
        {/* Form End */}

        <Typography sx={styles.registerText}>
          Don't have an account?{" "}
          <Link to="/registration" style={styles.registerLink}>
            Register
          </Link>
        </Typography>

        {/* Move to Home Page Button */}
        <Button component={Link} to="/" variant="contained" sx={styles.submitButton}>
          Move to Home Page
        </Button>
      </Box>
    </Box>
  );
};

// Styles
const styles = {
  label: {
    alignSelf: "flex-start",
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  input: {
    marginTop: "5px",
    background: "white",
    borderRadius: "5px",
    "& .MuiOutlinedInput-root": {
      height: "40px",
      fontSize: "14px",
      "& input": {
        padding: "8px",
      },
    },
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    marginTop: "20px",
    background: "#3B3FCB",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    "&:hover": {
      background: "#3038a5",
    },
  },
  registerText: {
    marginTop: "15px",
    fontSize: "16px",
  },
  registerLink: {
    color: "#FFD700",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default Login;
