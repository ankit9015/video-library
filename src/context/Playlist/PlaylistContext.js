import { createContext, useContext, useReducer, useState } from "react";
import { playlistReducer } from "./playListReducer";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [playlistsState, playlistsDispatch] = useReducer(playlistReducer, []);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  console.log(showPlaylistModal);

  return (
    <PlaylistContext.Provider
      value={{
        playlistsState,
        playlistsDispatch,
        showPlaylistModal,
        setShowPlaylistModal,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);
export { usePlaylist, PlaylistProvider };
