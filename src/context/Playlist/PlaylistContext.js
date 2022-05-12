import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";

import { playlistReducer } from "./playListReducer";
import { useAuth } from "../AuthContext/AuthContext";
import { getPlaylistsService } from "../../service";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [playlistsState, playlistsDispatch] = useReducer(playlistReducer, []);

  const { authState } = useAuth();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    if (authState.isLoggedIn) {
      (async () => {
        try {
          const { data } = await getPlaylistsService(authState.authToken);
          setPlaylists(data.playlists);
        } catch (error) {
          console.error(error);
        }
      })();
    } else {
      setPlaylists([]);
    }
  }, [authState]);

  return (
    <PlaylistContext.Provider
      value={{
        playlistsState,
        playlistsDispatch,
        playlists,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);
export { usePlaylist, PlaylistProvider };
