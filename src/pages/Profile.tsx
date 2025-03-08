import React, { useState, useEffect } from "react";
import { IconButton, Slide } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import profileBg from "../assets/profile.jpg"; // Adjust the path if necessary

const styles: React.CSSProperties = {
  width: "100vw",
  minHeight: "100vh",
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingTop: "100px",
  backgroundImage: `url(${profileBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflowX: "hidden",
  boxSizing: "border-box",
  position: "relative",
};

const tableStyles: React.CSSProperties = {
  width: "90%",
  maxWidth: "600px",
  borderCollapse: "collapse",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent for readability
  marginTop: "20px",
};

const cellStyles: React.CSSProperties = {
  padding: "10px",
  border: "none", // Removed borders
  textAlign: "left",
  color: "white",
};

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [showTable, setShowTable] = useState(false);

  // Trigger slide-in animation when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => setShowTable(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles}>
      {/* Back Button */}
      <IconButton
        onClick={() => navigate("/")}
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          color: "white",
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      <h1>Welcome to your Profile</h1>

      {/* Slide-in Animation for Table */}
      <Slide direction="up" in={showTable} timeout={1000}>
        <table style={tableStyles}>
          <tbody>
            <tr>
              <td style={cellStyles}>Rank:</td>
              <td style={cellStyles}></td>
              <td style={cellStyles}>Ties:</td>
              <td style={cellStyles}></td>
            </tr>
            <tr>
              <td style={cellStyles}>Username:</td>
              <td style={cellStyles}></td>
              <td style={cellStyles}>Wins:</td>
              <td style={cellStyles}></td>
            </tr>
            <tr>
              <td style={cellStyles}>Matches played:</td>
              <td style={cellStyles}></td>
              <td style={cellStyles}>Losses:</td>
              <td style={cellStyles}></td>
            </tr>
          </tbody>
        </table>
      </Slide>
    </div>
  );
};

// Ensure no horizontal scrolling on the entire page
document.documentElement.style.overflowX = "hidden";
document.body.style.overflowX = "hidden";

export default Profile;
