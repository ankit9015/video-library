import VideoCard from "../../components/VideoCard/VideoCard";
import { useVideo } from "../../context/VideoContext/VideoContext";
import { useEffect } from "react";
import "../pages.css";

function Explore() {
  const { videos, categories } = useVideo();

  useEffect(() => {
    document.title = "Explore";
  }, []);

  return (
    <div className="explore main--grid">
      <div className="explore__categories invisible-scroll">
        {categories.map((item) => (
          <div className="capsule-tag text-md cursor--pointer" key={item._id}>
            {item.categoryName}
          </div>
        ))}
      </div>
      {videos &&
        videos.map((item) => (
          <VideoCard variant="vertical" key={item._id} video={item} />
        ))}
    </div>
  );
}

export default Explore;
