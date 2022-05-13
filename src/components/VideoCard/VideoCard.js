import { useRef, useEffect, useState } from "react";
import { truncateString } from "../../utility";
import "../cards/Cards.css";
import "./VideoCard.css";
import {
  BiLike,
  CgPlayListRemove,
  MdOutlineWatchLater,
  MdPlaylistAdd,
} from "../../constants/icon";
import { useNavigate, useLocation } from "react-router-dom";
import PlaylistModal from "../PlaylistModal/PlaylistModal";
import { useAuth } from "../../context";

function VideoCard(props) {
  const contentRef = useRef();
  const { authState } = useAuth();
  const [contentWidth, setContentWidth] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

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
    <>
      {showPlaylistModal && (
        <PlaylistModal
          video={props.video}
          showPlaylistModal={showPlaylistModal}
          setShowPlaylistModal={setShowPlaylistModal}
        />
      )}
      <div
        className={`card video-card text-md p-xs ${
          props.variant === "vertical" ? "flex-column" : "flex-row"
        } ${props.className ?? ""}`}
      >
        <div
          className="card__media-container flex-row flex-center cursor--pointer"
          onClick={() => navigate(`../watch/${props.video._id}`)}
        >
          <img
            className="card__media"
            src={`https://img.youtube.com/vi/${props.video._id}/maxresdefault.jpg`}
            alt="category-gif"
          />
        </div>
        <div className="flex-column">
          <div className="video-card__buttons text-lg">
            <span data-tooltip="Like">
              <BiLike className="icon-button" />
            </span>
            <span data-tooltip="Watch Later">
              <MdOutlineWatchLater className="icon-button" />
            </span>
            {location.pathname.includes("playlist") ? (
              <span
                data-tooltip="Remove from Playlist"
                onClick={() => {
                  props.removeFromplaylist();
                }}
              >
                <CgPlayListRemove className="icon-button" />
              </span>
            ) : (
              <span
                data-tooltip="Add to Playlist"
                onClick={() => {
                  if (authState.isLoggedIn) {
                    setShowPlaylistModal(true);
                  } else {
                    navigate(
                      "../login",
                      { state: { from: location } },
                      { replace: true }
                    );
                  }
                }}
              >
                <MdPlaylistAdd className="icon-button" />
              </span>
            )}
          </div>
          <div ref={contentRef} className="card__content p-xs">
            <h4
              className="card__title cursor--pointer"
              onClick={() => navigate(`../watch/${props.video._id}`)}
            >
              {/* trucateString is taking the second parameter by experimentally 
          observing different denominator values and content width condition */}
              {truncateString(
                props.video.title,
                contentWidth / (contentWidth > 199 ? 5 : 6)
              )}
            </h4>
            <p className="text-sm m-xs">{props.video.creator}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
