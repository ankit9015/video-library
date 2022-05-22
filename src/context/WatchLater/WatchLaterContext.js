import { useContext, createContext, useEffect, useState } from "react";
import {
  getWatchLaterService,
  addWatchLaterService,
  deleteWatchLaterService,
} from "../../service";
import { useAuth } from "../AuthContext/AuthContext";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const [watchLaterState, setWatchLaterState] = useState([]);
  const { authState } = useAuth();
  useEffect(() => {
    if (authState.isLoggedIn) {
      (async () => {
        try {
          const { data } = await getWatchLaterService(authState.authToken);
          setWatchLaterState(data.watchlater);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [authState]);

  const addToWatchLater = async (video) => {
    const { data } = await addWatchLaterService(video, authState.authToken);
    setWatchLaterState(data.watchlater);
  };

  const removeFromWatchLater = async (video) => {
    const { data } = await deleteWatchLaterService(
      video._id,
      authState.authToken
    );
    setWatchLaterState(data.watchlater);
  };

  return (
    <WatchLaterContext.Provider
      value={{
        watchLaterState,
        setWatchLaterState,
        addToWatchLater,
        removeFromWatchLater,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);
export { WatchLaterProvider, useWatchLater };
