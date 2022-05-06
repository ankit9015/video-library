import axios from "axios";
import { useState, useEffect } from "react";
import VideoCard from "../../components/VideoCard/VideoCard";

function Explore() {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        setVideoList(response.data.videos);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  console.log(videoList);
  return (
    <div className="home main--grid">
      {videoList &&
        videoList.map((item) => (
          <VideoCard
            variant="video-card"
            key={item._id}
            img={`https://img.youtube.com/vi/${item._id}/maxresdefault.jpg`}
          />
        ))}
    </div>
  );
}

export default Explore;
