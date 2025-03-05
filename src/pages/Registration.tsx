import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

import registerImage from "../assets/register.jpg";

const Registration: React.FC = () => {
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
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.6)", // Increased blur, spread & opacity
        }}
      >

        <Typography variant="h4" sx={{ marginBottom: "20px", fontFamily: "serif" }}>
          Sign Up
        </Typography>

        <Typography sx={styles.label}>Username</Typography>
        <TextField variant="outlined" fullWidth placeholder="Enter username" sx={styles.input} />

        <Typography sx={styles.label}>Email</Typography>
        <TextField type="email" variant="outlined" fullWidth placeholder="Enter email" sx={styles.input} />

        <Typography sx={styles.label}>Password</Typography>
        <TextField type="password" variant="outlined" fullWidth placeholder="Enter password" sx={styles.input} />

        <Button variant="contained" sx={styles.submitButton}>
          Submit
        </Button>

        <Typography sx={styles.loginText}>
          Already have an account?{" "}
          <Link to="/enter-arena" style={styles.loginLink}>
            Login
          </Link>
        </Typography>

        {/* Move to Home Page Button with Submit Button Styling */}
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={styles.submitButton}
        >
          Move to Home Page
        </Button>
      </Box>
    </Box>
  );
};

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
      height: "40px", // Reduced height
      fontSize: "14px", // Slightly smaller text inside input
      "& input": {
        padding: "8px", // Adjust input padding
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
  loginText: {
    marginTop: "15px",
    fontSize: "16px",
  },
  loginLink: {
    color: "#3B3FCB",
    textDecoration: "underline",
    cursor: "pointer",
  },
};


export default Registration;
