import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        // console.log(response.data.videos);
        setVideos(response.data.videos);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/categories");
        setCategories(data.categories);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <VideoContext.Provider value={{ videos, categories }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
