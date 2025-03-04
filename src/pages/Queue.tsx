import React from "react";
import { Link } from "react-router-dom";
import queueImage from "../assets/queue.jpg";  // Adjust path if needed
import loadingImage from "../assets/loading.jpg";  // Adjust path if needed

const Queue: React.FC = () => {
  return (
    <div style={{ ...styles.container, backgroundImage: `url(${queueImage})` }}>
      <h1 style={styles.heading}>THE ARENA AWAITS ..</h1>
      <img src={loadingImage} alt="Loading" style={styles.loadingImage} />
      <p style={styles.queueText}>You are in queue, please wait....</p>

      {/* Proceed Button */}
      <Link to="/quiz" style={styles.proceedButton}>
        Proceed
      </Link>
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
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  loadingImage: {
    width: "100px", // Adjust size as needed
    marginBottom: "50px",
  },
  queueText: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  proceedButton: {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#3B3FCB",
    textDecoration: "none",
    borderRadius: "5px",
    marginTop: "20px",
  },
};

export default Queue;
