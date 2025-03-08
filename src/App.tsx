// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import swordsLogo from "./assets/swords.jpg";
// import loginImage from "./assets/Login.jpg";
// import AppRoutes from "./pages/routes/AppRoutes";

// const App: React.FC = () => {
//   const location = useLocation();

//   // Show layout only on the home page
//   const showLayout = location.pathname === "/";

//   return (
//     <div style={{ position: "relative", zIndex: 1 }}>
//       {/* Show header & background only on the home page */}
//       {showLayout && (
//         <>
//           <header style={headerStyle}>
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <img src={swordsLogo} alt="Swords Logo" style={{ height: "40px", marginRight: "10px" }} />
//               <div style={{ fontSize: "2em", fontWeight: "bold" }}>QUIZENA</div>
//             </div>
//             <nav style={{ display: "flex", gap: "20px", marginRight: "50px" }}>
//               <Link to="/" style={linkStyle}>HOME</Link>  
//               <Link to="/rules" style={linkStyle}>RULES</Link>
//               <Link to="/profile" style={linkStyle}>PROFILE</Link>
//             </nav>
//           </header>

//           <div style={backgroundStyle}>
//             <div style={titleStyle}>WELCOME TO THE BATTLES OF THE QUIZ LORDS</div>
//             <div style={buttonContainerStyle}>
//               <Link to="/enter-arena" style={actionLinkStyle}>ENTER THE ARENA</Link>
//               <Link to="/leaderboard" style={actionLinkStyle}>LEADERBOARD</Link>
//             </div>
//           </div>
//         </>
//       )}

//       {/* Routes: Only load the respective page */}
//       <div style={{ position: "relative", zIndex: 5 }}>
//         <AppRoutes />
//       </div>
//     </div>
//   );
// };

// /* Styles */
// const headerStyle: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   padding: "20px",
//   color: "black",
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100vw",
//   background: "linear-gradient(to right, #ffffff 0%, #4074B0 100%)",
//   zIndex: 100, 
// };

// const linkStyle: React.CSSProperties = {
//   color: "black",
//   textDecoration: "none",
//   fontWeight: "bold",
//   zIndex: 100,
// };

// const backgroundStyle: React.CSSProperties = {
//   position: 'relative',
//   width: '100vw',
//   height: '100vh',
//   backgroundImage: `url(${loginImage})`,
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   zIndex: 1,
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   color: 'white',
//   textAlign: 'center',
// };

// const titleStyle: React.CSSProperties = {
//   fontSize: '2.5em',
//   fontWeight: 'bold',
//   textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
//   zIndex: 10,
// };

// const buttonContainerStyle: React.CSSProperties = {
//   marginTop: "30px",
//   display: "flex",
//   gap: "30px",
//   zIndex: 10,
// };

// const actionLinkStyle: React.CSSProperties = {
//   color: 'white',
//   fontSize: '1.2em',
//   fontWeight: 'bold',
//   textDecoration: 'underline',
//   cursor: 'pointer',
//   zIndex: 100,
//   position: "relative",
// };

// export default App;


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Slide } from "@mui/material"; // Import Slide for animation
import swordsLogo from "./assets/swords.jpg";
import loginImage from "./assets/Login.jpg";
import AppRoutes from "./pages/routes/AppRoutes";

const App: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // State for triggering the transition
  const [showTitle, setShowTitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    if (isHomePage) {
      setTimeout(() => setShowTitle(true), 500); // Show title first
      setTimeout(() => setShowButtons(true), 1200); // Show buttons later
    }
  }, [isHomePage]);

  return (
    <div style={containerStyle}>
      {isHomePage && (
        <>
          <header style={headerStyle}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={swordsLogo} alt="Swords Logo" style={logoStyle} />
              <div style={titleLogoStyle}>QUIZENA</div>
            </div>
            <nav style={navStyle}>
              <Link to="/rules" style={linkStyle}>RULES</Link>
              <Link to="/profile" style={linkStyle}>PROFILE</Link>
              <Link to="/registration" style={linkStyle}>REGISTER</Link>
            </nav>
          </header>

          {/* Static Background Wrapper */}
          <div style={backgroundStyle}>
            {/* Transitioning Title */}
            <Slide direction="up" in={showTitle} timeout={1000}>
              <div style={titleStyle}>WELCOME TO THE BATTLES OF THE QUIZ LORDS</div>
            </Slide>

            {/* Transitioning Buttons (Appears Slightly Later) */}
            <Slide direction="up" in={showButtons} timeout={1000}>
              <div style={buttonContainerStyle}>
                <Link to="/enter-arena" style={actionLinkStyle}>ENTER THE ARENA</Link>
                <Link to="/leaderboard" style={actionLinkStyle}>LEADERBOARD</Link>
              </div>
            </Slide>
          </div>
        </>
      )}

      {/* Load other pages via routes */}
      <div>
        <AppRoutes />
      </div>
    </div>
  );
};

/* Styles */
const containerStyle: React.CSSProperties = {
  width: "100%",
  minHeight: "100vh",
  overflowX: "hidden",
  boxSizing: "border-box",
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  color: "black",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  background: "linear-gradient(to right, #ffffff 0%, #4074B0 100%)",
  zIndex: 100,
  boxSizing: "border-box",
};

const navStyle: React.CSSProperties = {
  display: "flex",
  gap: "20px",
  marginRight: "50px",
};

const linkStyle: React.CSSProperties = {
  color: "black",
  textDecoration: "none",
  fontWeight: "bold",
  zIndex: 100,
};

/** ✅ FIX: Background is now applied to a non-animated wrapper */
const backgroundStyle: React.CSSProperties = {
  width: "100%",
  minHeight: "100vh",
  backgroundImage: `url(${loginImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  textAlign: "center",
  overflow: "hidden",
  boxSizing: "border-box",
};

const titleStyle: React.CSSProperties = {
  fontSize: "2.5em",
  fontWeight: "bold",
  textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
  zIndex: 10,
};

const buttonContainerStyle: React.CSSProperties = {
  marginTop: "30px",
  display: "flex",
  gap: "30px",
  zIndex: 10,
};

const actionLinkStyle: React.CSSProperties = {
  color: "white",
  fontSize: "1.2em",
  fontWeight: "bold",
  textDecoration: "underline",
  cursor: "pointer",
  zIndex: 100,
};

const logoStyle: React.CSSProperties = {
  height: "40px",
  marginRight: "10px",
};

const titleLogoStyle: React.CSSProperties = {
  fontSize: "2em",
  fontWeight: "bold",
};

// Ensure no horizontal scrolling on the entire page
document.documentElement.style.overflowX = "hidden";
document.body.style.overflowX = "hidden";

export default App;
