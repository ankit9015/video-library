import React, { useState } from "react";
import { usePlaylist } from "../../context/Playlist/PlaylistContext";
import Modal from "../Modal/Modal";
import "./PlaylistModal.css";
import { useAuth } from "../../context/index";
import { addToPlaylistService, removeFromPlaylistService } from "../../service";
import CreatePlaylist from "./CreatePlaylist";
import {
  ADD_TO_PLAYLIST,
  REMOVE_FROM_PLAYLIST,
} from "../../constants/actionType";

function PlaylistModal(props) {
  const { video, showPlaylistModal, setShowPlaylistModal } = props;
  const { playlistsState, playlistsDispatch } = usePlaylist();
  const { authState } = useAuth();
  const [openCreate, toggleCreate] = useState(false);

  const addToPlaylist = async (playlist) => {
    const { data } = await addToPlaylistService(
      playlist,
      video,
      authState.authToken
    );
    playlistsDispatch({ type: ADD_TO_PLAYLIST, payload: data.playlist });
  };

  const removeFromPlaylist = async (playlist) => {
    const { data } = await removeFromPlaylistService(
      playlist._id,
      video._id,
      authState.authToken
    );
    playlistsDispatch({ type: REMOVE_FROM_PLAYLIST, payload: data.playlist });
  };

  return (
    <Modal
      open={showPlaylistModal}
      close={() => {
        setShowPlaylistModal(false);
        toggleCreate(false);
      }}
    >
      {!openCreate && (
        <div className="playlist-modal flex-column gap-5">
          <h4 className="text-md playlist-modal__title">Save to Playlist</h4>
          <div className="playlist-modal__suggestions invisible-scroll flex-column gap-5 text-md p-xs">
            {playlistsState &&
              playlistsState.map((item) => (
                <label className="flex-row" key={item._id}>
                  <input
                    className="text-md available-playlists"
                    type="checkbox"
                    checked={item.videos.some((item) => item._id === video._id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        addToPlaylist(item);
                      } else {
                        removeFromPlaylist(item);
                      }
                    }}
                  />
                  <p className="text-elipsis">{item.title}</p>
                </label>
              ))}
          </div>
          <div
            className="text-md cursor--pointer"
            onClick={() => toggleCreate(true)}
          >
            Add new
          </div>
        </div>
      )}
      {openCreate && <CreatePlaylist toggleCreate={toggleCreate} />}
    </Modal>
  );
}

export default PlaylistModal;
