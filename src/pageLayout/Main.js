import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  History,
  Home,
  Liked,
  Login,
  Playlist,
  Settings,
  Signup,
  WatchLater,
} from "../pages";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/history" element={<History />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </div>
  );
}

export default Main;
