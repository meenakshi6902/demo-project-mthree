import React from "react";
import { Link } from "react-router-dom";

import registerImage from "../assets/register.jpg";


const Registration: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Sign Up</h1>

        <label style={styles.label}>Username</label>
        <input type="text" style={styles.input} placeholder="Enter username" />

        <label style={styles.label}>Email</label>
        <input type="email" style={styles.input} placeholder="Enter email" />

        <label style={styles.label}>Password</label>
        <input type="password" style={styles.input} placeholder="Enter password" />

        <button style={styles.submitButton}>Submit</button>

        <p style={styles.loginText}>
          Already have an account? <Link to="/enter-arena"style={styles.loginLink}>Login</Link>
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${registerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    background: "rgba(255, 255, 255, 0.8)",
    padding: "30px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "300px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  label: {
    alignSelf: "flex-start",
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    marginTop: "20px",
    background: "#3B3FCB",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  loginText: {
    marginTop: "15px",
    fontSize: "14px",
  },
  loginLink: {
    color: "#3B3FCB",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default Registration;
