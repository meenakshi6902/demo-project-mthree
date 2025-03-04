import React from "react";
import registerImage from "../assets/register.jpg";
import { Link } from "react-router-dom";


const Login: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Login</h1>
      <label style={styles.label}>Email</label>
      <input type="email" style={styles.input} placeholder="Enter your email" />
      
      <label style={styles.label}>Password</label>
      <input type="password" style={styles.input} placeholder="Enter your password" />

  <p style={styles.registerText}>
  Don't have an account yet?{" "}
  <Link to="/registration" style={styles.registerLink}>Register.</Link>
</p>

      
<button style={styles.submitButton}>
  <Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
    Submit
  </Link>
</button>

    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${registerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
    marginBottom: "20px",
    zIndex: 2,
  },
  label: {
    color: "white",
    fontSize: "18px",
    marginBottom: "8px",
    zIndex: 2,
  },
  input: {
    width: "300px",
    padding: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "white",
    marginBottom: "15px",
    zIndex: 2,
  },
  registerText: {
    color: "white",
    fontSize: "14px",
    marginTop: "10px",
    zIndex: 2,
  },
  registerLink: {
    color: "#FFD700",
    cursor: "pointer",
    textDecoration: "underline",
  },
  submitButton: {
    marginTop: "15px",
    backgroundColor: "#3B3FCB",
    color: "white",
    fontSize: "16px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    zIndex: 2,
  },
};

export default Login;
