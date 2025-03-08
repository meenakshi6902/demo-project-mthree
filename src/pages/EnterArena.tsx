import React from "react";
import { Link } from "react-router-dom";

const EnterArena: React.FC = () => {
  return (
    <div style={styles}>
      <h1>Hi, I am Enter the Arena Route</h1>
      <div style={{ marginTop: "20px" }}>
        <Link to="/registration" style={linkStyle}>Registration</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
      </div>
    </div>
  );
};

// Explicitly define styles as React.CSSProperties
const styles: React.CSSProperties = { 
  display: "flex", 
  flexDirection: "column", 
  justifyContent: "center", 
  alignItems: "center", 
  height: "100vh" 
};

const linkStyle: React.CSSProperties = { 
  textDecoration: "underline", 
  color: "blue", 
  margin: "10px", 
  fontSize: "1.5em" 
};

export default EnterArena;
