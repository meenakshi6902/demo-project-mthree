import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fade } from "@mui/material"; // Import Fade for animation
import logo from "../assets/swords.jpg"; // Import logo
import backgroundImg from "../assets/dashboard.jpg"; // Import background image

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false); // Initially false

  // Trigger fade-in animation after component mounts
  useEffect(() => {
    setTimeout(() => setFadeIn(true), 500); // Delays animation slightly
  }, []);

  return (
    <div style={containerStyles}>
      {/* Sidebar - Toggle Open/Close */}
      <div style={{ ...sidebarStyles, left: isSidebarOpen ? "0" : "-250px" }}>
        <button onClick={() => setSidebarOpen(false)} style={closeButtonStyles}>
          ✖
        </button>
        <h3 style={sidebarTitleStyles}>Options</h3>
        <nav>
          <ul style={navListStyles}>
            <li><Link to="/" style={navLinkStyles}>Home</Link></li>
            <li><Link to="/profile" style={navLinkStyles}>Profile</Link></li>
            <li><Link to="/settings" style={navLinkStyles}>Logout</Link></li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div style={mainContentStyles}>
        {/* Navbar */}
        <header style={navbarStyles}>
          <button onClick={() => setSidebarOpen(true)} style={menuButtonStyles}>☰</button>
          <img src={logo} alt="Logo" style={logoStyles} /> {/* Logo added */}
          <h1 style={navbarTitleStyles}>QUIZENA</h1>
        </header>

        {/* Page Content */}
        <div style={contentStyles}>
          {/* Title with Fade Transition */}
          <Fade in={fadeIn} timeout={2000}>
            <h1 style={titleStyles}>WELCOME TO THE BATTLES OF THE QUIZ LORDS</h1>
          </Fade>

          <Link to="/queue">
            <button style={buttonStyles}>Start Game</button>
          </Link>
        </div>
      </div>
    </div>
  );
};


/* Styles */
const containerStyles: React.CSSProperties = {
  display: "flex",
  height: "100vh",
};

const sidebarStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: "-250px",
  width: "150px",
  height: "100%",
  background: "linear-gradient(to right, #2C3E50, #4CA1AF)", // Gradient applied
  color: "white",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  transition: "left 0.3s ease-in-out",
  boxShadow: "2px 0 10px rgba(0, 0, 0, 0.2)", // Slight shadow for depth
};

const sidebarTitleStyles: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "20px",
};

const navListStyles: React.CSSProperties = {
  listStyleType: "none",
  padding: 0,
};

const navLinkStyles: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  display: "block",
  padding: "10px",
  borderRadius: "5px",
  transition: "background 0.3s",
  fontSize: "18px",
  fontWeight: "bold",
};

const navbarStyles: React.CSSProperties = {
  background: "linear-gradient(to right, #2C3E50, #4CA1AF)", // Same gradient
  color: "white",
  padding: "15px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start", // Aligns all items to the left
  gap: "15px", // Space between menu button and title
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

const logoStyles: React.CSSProperties = {
  width: "40px",  // Adjust size as needed
  height: "40px",
  borderRadius: "50%", // Makes the logo circular
};

const navbarTitleStyles: React.CSSProperties = {
  margin: 0,
  fontSize: "1.8em",
  fontWeight: "bold",
};

const menuButtonStyles: React.CSSProperties = {
  fontSize: "24px",
  background: "transparent",
  color: "white",
  border: "none",
  cursor: "pointer",
  marginLeft: "10px",
};

const closeButtonStyles: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "15px",
  fontSize: "20px",
  background: "transparent",
  color: "white",
  border: "none",
  cursor: "pointer",
};

const mainContentStyles: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  backgroundImage: `url(${backgroundImg})`, // Background Image Added
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const contentStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  textAlign: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
  width: "100%",
  height: "100%",
};

const titleStyles: React.CSSProperties = {
  fontSize: "40px",
  fontWeight: "bolder",
  color: "white", // Ensures text is visible
  marginBottom: "20px",
};

const buttonStyles: React.CSSProperties = {
  padding: "10px 20px",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
  backgroundColor: "#41647a",
  color: "white",
  border: "none",
  borderRadius: "5px",
  transition: "0.3s",
};

export default Dashboard;
