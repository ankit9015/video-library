import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  HistoryProvider,
  LikesProvider,
  PlaylistProvider,
  VideoProvider,
} from "./context";

// Call make Server
makeServer();
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>
          <PlaylistProvider>
            <HistoryProvider>
              <LikesProvider>
                <App />
              </LikesProvider>
            </HistoryProvider>
          </PlaylistProvider>
        </VideoProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
