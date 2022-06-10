import { useContext, createContext, useEffect, useState } from "react";
import {
  getLikedService,
  addLikedService,
  deleteLikedService,
} from "../../service";

import { useAuth } from "../AuthContext/AuthContext";

const LikesContext = createContext();

const LikesProvider = ({ children }) => {
  const [likesState, setLikesState] = useState([]);
  const { authState } = useAuth();
  useEffect(() => {
    if (authState.isLoggedIn) {
      (async () => {
        try {
          const { data } = await getLikedService(authState.authToken);
          setLikesState(data.likes);
        } catch (error) {
          console.error(error);
        }
      })();
    } else setLikesState([]);
  }, [authState]);

  const addToLikes = async (video) => {
    const { data } = await addLikedService(video, authState.authToken);
    setLikesState(data.likes);
  };

  const removeFromLikes = async (video) => {
    const { data } = await deleteLikedService(video._id, authState.authToken);
    setLikesState(data.likes);
  };

  return (
    <LikesContext.Provider
      value={{
        likesState,
        setLikesState,
        addToLikes,
        removeFromLikes,
      }}
    >
      {children}
    </LikesContext.Provider>
  );
};

const useLikes = () => useContext(LikesContext);
export { LikesProvider, useLikes };
