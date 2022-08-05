import { useContext, createContext, useEffect, useState } from "react";
import {
  getWatchLaterService,
  addWatchLaterService,
  deleteWatchLaterService,
} from "../../service";
import { useAuth } from "../AuthContext/AuthContext";
import { toast } from "react-hot-toast";

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
    try {
      const { data } = await addWatchLaterService(video, authState.authToken);
      setWatchLaterState(data.watchlater);
      toast.success("Video added to Watch Later");
    } catch {
      toast("Video already added to watch later");
    }
  };

  const removeFromWatchLater = async (video) => {
    try {
      const { data } = await deleteWatchLaterService(
        video._id,
        authState.authToken
      );
      setWatchLaterState(data.watchlater);
      toast.success("Video removed from Watch Later.");
    } catch {
      return;
    }
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
