import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../pages.css";
import "./Watch.css";
import {
  BiLike,
  MdOutlineWatchLater,
  MdPlaylistAdd,
} from "../../constants/icon";
import { useVideo } from "../../context/VideoContext/VideoContext";
import { randomElementsFromArray } from "../../utility";

import { useAuth, useHistory, useLikes, useWatchLater } from "../../context";
import { PlaylistModal, VideoCard } from "../../components";

function Watch() {
  const { videoId } = useParams();
  const { videos } = useVideo();
  const { historyDispatch, historyState } = useHistory();
  const { addToLikes, removeFromLikes, likesState } = useLikes();
  const { addToWatchLater, removeFromWatchLater, watchLaterState } =
    useWatchLater();
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { authState } = useAuth();
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

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

  useEffect(() => {
    if (authState.isLoggedIn && currVideo) {
      historyDispatch({ type: "ADD_TO_HISTORY", payload: currVideo });
    }
  }, [authState.isLoggedIn, currVideo, historyDispatch]);

  useEffect(() => {
    setSuggestedVideos(randomElementsFromArray(videos, 6));
  }, [videos]);

  console.log(historyState);

  return (
    <>
      {showPlaylistModal && (
        <PlaylistModal
          video={currVideo}
          showPlaylistModal={showPlaylistModal}
          setShowPlaylistModal={setShowPlaylistModal}
        />
      )}
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
              {likesState &&
              likesState.find((item) => item._id === currVideo._id) ? (
                <span
                  data-tooltip="Unlike"
                  className="color--primary"
                  onClick={() => removeFromLikes(currVideo)}
                >
                  <BiLike className="icon-button" />
                </span>
              ) : (
                <span data-tooltip="Like" onClick={() => addToLikes(currVideo)}>
                  <BiLike className="icon-button" />
                </span>
              )}
              {watchLaterState &&
              watchLaterState.find((item) => item._id === currVideo._id) ? (
                <span
                  data-tooltip="Remove from Watch Later"
                  onClick={() => removeFromWatchLater(currVideo)}
                  className="color--primary"
                >
                  <MdOutlineWatchLater className="icon-button " />
                </span>
              ) : (
                <span
                  data-tooltip="Watch Later"
                  onClick={() => addToWatchLater(currVideo)}
                >
                  <MdOutlineWatchLater className="icon-button" />
                </span>
              )}
              <span
                className="tooltip-bottom-left"
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
            </div>
          </div>
          <div className="watch__info flex-column gap-5 p-xs">
            <div className="video__category-tags flex-row text-md">
              Category Tags:
              {currVideo &&
                currVideo["categoryTags"].map((item) => (
                  <div key={item._id} className="capsule-tag text-md">
                    {item}
                  </div>
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
                video={item}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Watch;
