import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import quizBackground from "../assets/Quiz.jpg"; 
import profileIcon from "../assets/profile.png"; // Profile Icon

const Quiz: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(120);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeUp(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Convert seconds to MM:SS format
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${quizBackground})` }}>
      {timeUp ? (
        // Time Up Modal
        <div style={styles.modal}>
          <h2 style={{ color: "red", fontSize: "24px", marginBottom: "20px" }}>Time Up!</h2>
          <Link to="/dashboard">
            <button style={styles.backButton}>Back to Home</button>
          </Link>
        </div>
      ) : (
        <>
          {/* Player 1 */}
          <div style={styles.playerSection}>
            {/* <img src={profileIcon} alt="Player 1" style={styles.profileIcon} /> */}
            <p style={styles.playerText}>Player 1</p>
          </div>

          {/* Quiz Card */}
          <div style={styles.quizCard}>
            <h2 style={styles.heading}>Simple Quiz</h2>
            <p style={styles.question}>What is the capital of India?</p>

            {/* Options */}
            <div style={styles.optionsContainer}>
              <button style={styles.option}>A. Delhi</button>
              <button style={styles.option}>B. Mumbai</button>
              <button style={styles.option}>C. Kolkata</button>
              <button style={styles.option}>D. Chennai</button>
            </div>

            {/* Timer Box */}
            <div style={styles.timerBox}>
              <p style={styles.timerText}>{formatTime(timeLeft)}</p>
            </div>
          </div>

          {/* Player 2 */}
          <div style={styles.playerSection}>
            {/* <img src={profileIcon} alt="Player 2" style={styles.profileIcon} /> */}
            <p style={styles.playerText}>Player 2</p>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px",
  },
  playerSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profileIcon: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  playerText: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
  },
  quizCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    width: "400px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  question: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  option: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#3B3FCB",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  timerBox: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "5px",
    border: "2px solid red",
    textAlign: "center",
    width: "80px",
    margin: "auto",
  },
  timerText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "red",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  },
  backButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#3B3FCB",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Quiz;
