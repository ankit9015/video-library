import { useContext, createContext, useEffect, useState } from "react";
import { addWatchLaterService, deleteWatchLaterService } from "../../service";
import getWatchLaterService from "../../service/WatchLater/getWatchLaterService";
import { useAuth } from "../AuthContext/AuthContext";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const [WatchLaterState, setWatchLaterState] = useState([]);
  const { authState } = useAuth();
  useEffect(() => {
    if (authState.isLoggedIn) {
      (async () => {
        try {
          const { data } = await getWatchLaterService(authState.authToken);
          setWatchLaterState(data.WatchLater);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [authState]);

  const addToWatchLater = async (video) => {
    const { data } = await addWatchLaterService(video, authState.authToken);
    setWatchLaterState(data.WatchLater);
  };

  const removeFromWatchLater = async (video) => {
    const { data } = await deleteWatchLaterService(
      video._id,
      authState.authToken
    );
    setWatchLaterState(data.WatchLater);
  };

  return (
    <WatchLaterContext.Provider
      value={{
        WatchLaterState,
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
