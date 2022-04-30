import React from "react";
import { NavLink } from "react-router-dom";
import {
  BiLike,
  MdHistory,
  MdHome,
  MdOutlineWatchLater,
  MdPlaylistPlay,
  MdSettings,
} from "../constants/icon";

function Sidebar(props) {
  const getActiveLinkStyle = ({ isActive }) => ({
    color: isActive ? "var(--secondary-color)" : "",
    fontWeight: "bold",
  });
  return (
    <div
      className={`sidebar p-xs text-md flex-column gap-5 ${
        props.showSidebar ? "sidebar--visible" : ""
      }`}
    >
      <NavLink
        style={getActiveLinkStyle}
        to="/"
        className="sidebar__nav-button no-link m-xs flex-row gap-5 flex-align-center"
      >
        <MdHome className="text-lg" />
        <p>Home</p>
      </NavLink>

      <NavLink
        style={getActiveLinkStyle}
        to="/history"
        className="sidebar__nav-button no-link m-xs flex-row gap-5 flex-align-center"
      >
        <MdHistory className="text-lg" />
        <p>History</p>
      </NavLink>

      <NavLink
        style={getActiveLinkStyle}
        to="/liked"
        className="sidebar__nav-button no-link m-xs flex-row gap-5 flex-align-center"
      >
        <BiLike className="text-lg" />
        <p>Liked</p>
      </NavLink>

      <NavLink
        style={getActiveLinkStyle}
        to="/playlist"
        className="sidebar__nav-button no-link m-xs flex-row gap-5 flex-align-center"
      >
        <MdPlaylistPlay className="text-lg" />
        <p>Playlist</p>
      </NavLink>

      <NavLink
        style={getActiveLinkStyle}
        to="/watch-later"
        className="sidebar__nav-button no-link m-xs flex-row gap-5 flex-align-center"
      >
        <MdOutlineWatchLater className="text-lg" />
        <p>Watch Later</p>
      </NavLink>

      <NavLink
        style={getActiveLinkStyle}
        to="/settings"
        className="sidebar__nav-button no-link m-xs flex-row gap-5 flex-align-center"
      >
        <MdSettings className="text-lg" />
        <p>Settings</p>
      </NavLink>

      <NavLink
        style={getActiveLinkStyle}
        to="/mock-api"
        className="sidebar__nav-button no-link m-xs flex-row gap-5 flex-align-center"
      >
        <MdSettings className="text-lg" />
        <p>MockAPI</p>
      </NavLink>
    </div>
  );
}

export default Sidebar;
