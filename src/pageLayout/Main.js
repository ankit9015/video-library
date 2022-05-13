import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext/AuthContext";

import {
  History,
  Home,
  Liked,
  Login,
  Playlist,
  Settings,
  Signup,
  Explore,
  WatchLater,
  Watch,
  PlaylistDetail,
} from "../pages";
import MockAPI from "../pages/Mockapi";

function PrivateRoute({ children }) {
  const { authState } = useAuth();
  const location = useLocation();

  return (
    <div>
      {authState.isLoggedIn ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </div>
  );
}

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/watch/:videoId" element={<Watch />} />
        <Route
          path="/history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route
          path="/liked"
          element={
            <PrivateRoute>
              <Liked />
            </PrivateRoute>
          }
        />
        <Route
          path="/watch-later"
          element={
            <PrivateRoute>
              <WatchLater />
            </PrivateRoute>
          }
        />
        <Route
          path="/playlist"
          element={
            <PrivateRoute>
              <Playlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/playlist/:playlistId"
          element={
            <PrivateRoute>
              <PlaylistDetail />
            </PrivateRoute>
          }
        />
        <Route path="/settings" element={<Settings />} />

        <Route path="/mock-api" element={<MockAPI />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}

export default Main;
