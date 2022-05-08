import { useRef, useEffect, useState } from "react";
import { truncateString } from "../../utility";
import "../cards/Cards.css";
import "./VideoCard.css";
import {
  BiLike,
  MdOutlineWatchLater,
  MdPlaylistAdd,
} from "../../constants/icon";
import { useNavigate } from "react-router-dom";

function VideoCard(props) {
  const contentRef = useRef();
  const [contentWidth, setContentWidth] = useState(0);
  const navigate = useNavigate();

  const handleResize = () => {
    setContentWidth(contentRef.current.offsetWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setContentWidth(contentRef.current.offsetWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`card video-card text-md p-xs ${
        props.variant === "vertical" ? "flex-column" : "flex-row"
      } ${props.className ?? ""}`}
    >
      <div
        className="card__media-container flex-row flex-center cursor--pointer"
        onClick={() => navigate(`../watch/${props.videoId}`)}
      >
        <img className="card__media" src={`${props.img}`} alt="category-gif" />
      </div>
      <div className="flex-column">
        <div className="video-card__buttons text-lg">
          <span data-tooltip="Like">
            <BiLike className="icon-button" />
          </span>
          <span data-tooltip="Watch Later">
            <MdOutlineWatchLater className="icon-button" />
          </span>
          <span data-tooltip="Add to Playlist">
            <MdPlaylistAdd className="icon-button" />
          </span>
        </div>
        <div ref={contentRef} className="card__content p-xs">
          <h4
            className="card__title cursor--pointer"
            onClick={() => navigate(`../watch/${props.videoId}`)}
          >
            {/* trucateString is taking the second parameter by experimentally 
          observing different denominator values and content width condition */}
            {truncateString(
              props.title,
              contentWidth / (contentWidth > 199 ? 5 : 6)
            )}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
