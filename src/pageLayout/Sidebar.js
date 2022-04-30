import React from "react";
import {
  BiLike,
  MdHistory,
  MdHome,
  MdOutlineWatchLater,
  MdPlaylistPlay,
  MdSettings,
} from "../constants/icon";

function Sidebar(props) {
  return (
    <div
      className={`sidebar p-xs text-md flex-column gap-5 ${
        props.showSidebar ? "sidebar--visible" : ""
      }`}
    >
      <div className="sidebar__nav-button m-xs flex-row gap-5 flex-align-center">
        <MdHome className="text-lg" />
        <p>Home</p>
      </div>
      <div className="sidebar__nav-button m-xs flex-row gap-5 flex-align-center">
        <MdHistory className="text-lg" />
        <p>History</p>
      </div>
      <div className="sidebar__nav-button m-xs flex-row gap-5 flex-align-center">
        <BiLike className="text-lg" />
        <p>Liked</p>
      </div>
      <div className="sidebar__nav-button m-xs flex-row gap-5 flex-align-center">
        <MdPlaylistPlay className="text-lg" />
        <p>Playlist</p>
      </div>

      <div className="sidebar__nav-button m-xs flex-row gap-5 flex-align-center">
        <MdOutlineWatchLater className="text-lg" />
        <p>Watch Later</p>
      </div>
      <div className="sidebar__nav-button m-xs flex-row gap-5 flex-align-center">
        <MdSettings className="text-lg" />
        <p>Settings</p>
      </div>
    </div>
  );
}

export default Sidebar;
