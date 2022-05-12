import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../pages.css";
import "./Watch.css";
import {
  BiDislike,
  BiLike,
  MdOutlineWatchLater,
  MdPlaylistAdd,
} from "../../constants/icon";
import { useVideo } from "../../context/VideoContext/VideoContext";
import { randomElementsFromArray } from "../../utility";
import VideoCard from "../../components/VideoCard/VideoCard";

function Watch() {
  const { videoId } = useParams();
  const { videos } = useVideo();
  const suggestedVideos = randomElementsFromArray(videos, 6);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWindowWidth]);

  const currVideo = videos.filter((item) => item._id === videoId)[0];
  return (
    <div className="watch flex-row">
      <div className="watch__main-video">
        <div className="watch__video-container">
          <iframe
            className="watch__video-player"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="video-container__buttons flex-row text-lg">
            <span data-tooltip="Like">
              <BiLike className="icon-button" />
            </span>
            <span data-tooltip="Dislike">
              <BiDislike className="icon-button" />
            </span>
            <span data-tooltip="Watch Later">
              <MdOutlineWatchLater className="icon-button" />
            </span>
            <span data-tooltip="Add to Playlist">
              <MdPlaylistAdd className="icon-button" />
            </span>
          </div>
        </div>
        <div className="watch__info flex-column gap-5 p-xs">
          <div className="video__category-tags flex-row text-md">
            Category Tags:
            {currVideo &&
              currVideo["categoryTags"].map((item) => (
                <div className="capsule-tag text-md">{item}</div>
              ))}
          </div>
          <p className="text-md m-xs">
            Desription: {currVideo && currVideo["description"]}
          </p>
        </div>
      </div>

      <div className="watch__suggestions">
        {suggestedVideos &&
          suggestedVideos.map((item) => (
            <VideoCard
              variant={windowWidth < 1100 ? "vertical" : "horizontal"}
              key={item._id}
              videoId={item._id}
              img={`https://img.youtube.com/vi/${item._id}/maxresdefault.jpg`}
              link={`https://youtu.be/${item._id}`}
              title={item.title}
              creator={item.creator}
            />
          ))}
      </div>
    </div>
  );
}

export default Watch;
