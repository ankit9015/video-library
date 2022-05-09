import React, { useState } from "react";
import { usePlaylist } from "../../context/Playlist/PlaylistContext";
import Modal from "../Modal/Modal";
import "./PlaylistModal.css";

function PlaylistModal() {
  const {
    showPlaylistModal,
    setShowPlaylistModal,
    playlistsState,
    playlistsDispatch,
  } = usePlaylist();
  const [newPlaylist, setNewPlaylist] = useState("");
  return (
    <Modal open={showPlaylistModal} close={setShowPlaylistModal}>
      <div className="playlist-modal flex-column gap-5">
        <h4 className="text-md playlist-modal__title">Save to Playlist</h4>
        <div className="playlist-modal__suggestions invisible-scroll flex-column gap-5 text-md p-xs">
          {playlistsState &&
            playlistsState.map((item) => (
              <label>
                <input type="checkbox" /> {item}
              </label>
            ))}
        </div>
        <label className="text-md playlist-modal__new-playlist flex-row">
          <span>Name: </span>
          <input
            value={newPlaylist.newPlaylist}
            type="text"
            onChange={(e) => setNewPlaylist(e.target.value)}
          />
        </label>
        <button
          className="create-button button-primary button text-md"
          onClick={() =>
            playlistsDispatch({
              action: "",
              payload: newPlaylist,
            })
          }
        >
          Create
        </button>
      </div>
    </Modal>
  );
}

export default PlaylistModal;
