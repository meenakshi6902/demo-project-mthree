import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Rules from "../Rules";
import Profile from "../Profile";
import EnterArena from "../EnterArena";
import Leaderboard from "../Leaderboard";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/enter-arena" element={<EnterArena />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
};

export default AppRoutes;
