import React, { useState } from "react";
import { createPlaylistService } from "../../service";
import { useAuth, usePlaylist } from "../../context/index";
import { ADD_PLAYLIST } from "../../constants/actionType";

function CreatePlaylist(props) {
  const [newPlaylist, setNewPlaylist] = useState({
    title: "",
    description: "",
  });

  const { authState } = useAuth();

  const { playlistsState, playlistsDispatch } = usePlaylist();
  const uniquePlaylist = playlistsState
    ? playlistsState.map((item) => item.title)
    : [];

  const createPlaylist = async (newPlaylist) => {
    const { data } = await createPlaylistService(
      newPlaylist,
      authState.authToken
    );
    playlistsDispatch({ type: ADD_PLAYLIST, payload: data.playlists });
  };

  const createButtonHandler = () => {
    if (
      newPlaylist.title !== "" &&
      !uniquePlaylist.includes(newPlaylist.title)
    ) {
      createPlaylist(newPlaylist);
    }
    props.toggleCreate(false);
  };

  return (
    <div className="playlist-modal flex-column gap-5">
      <h4 className="text-md playlist-modal__title">Create Playlist</h4>
      <label className="text-md playlist-modal__new-playlist flex-column">
        <span className="flex-row">
          <p>Title: </p>
          <p>{newPlaylist.title.length}/100</p>
        </span>
        <input
          value={newPlaylist.title}
          type="text"
          maxLength="100"
          onChange={(e) =>
            setNewPlaylist({ ...newPlaylist, title: e.target.value })
          }
        />
      </label>
      <label className="text-md playlist-modal__new-playlist description flex-column">
        <span className="flex-row">
          <p>Description: </p>
          <p>{newPlaylist.description.length}/150</p>
        </span>
        <textarea
          value={newPlaylist.description}
          type="text"
          maxLength="150"
          onChange={(e) =>
            setNewPlaylist({ ...newPlaylist, description: e.target.value })
          }
        />
      </label>

      <button
        className="create-button button-primary button text-md"
        onClick={createButtonHandler}
      >
        Create
      </button>
    </div>
  );
}

export default CreatePlaylist;
