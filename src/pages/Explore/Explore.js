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
      <div className="explore__categories ">
        {categories.map((item) => (
          <div className="capsule-tag text-md cursor--pointer" key={item._id}>
            {item.categoryName}
          </div>
        ))}
      </div>
      {videos &&
        videos.map((item) => (
          <VideoCard
            variant="vertical"
            key={item._id}
            videoId={item._id}
            img={`https://img.youtube.com/vi/${item._id}/maxresdefault.jpg`}
            link={`https://youtu.be/${item._id}`}
            title={item.title}
            creator={item.creator}
          />
        ))}
    </div>
  );
}

export default Explore;
