import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { truncateString } from "../../utility";
import "./PlaylistCard.css";
import { BiTrash } from "../../constants/icon";
import Modal from "../Modal/Modal";
import { removePlaylistService } from "../../service";
import { useAuth, usePlaylist } from "../../context";
import { REMOVE_PLAYLIST } from "../../constants/actionType";

function PlaylistCard(props) {
  const { playlist } = props;
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { playlistsDispatch } = usePlaylist();
  const contentRef = useRef();
  const [contentWidth, setContentWidth] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

  const deletePlaylist = async () => {
    const { data } = await removePlaylistService(
      playlist._id,
      authState.authToken
    );
    playlistsDispatch({ type: REMOVE_PLAYLIST, payload: data.playlists });
  };

  return (
    <div className={`card playlist-card text-md p-xs ${props.className ?? ""}`}>
      <div
        className="card__media-container flex-row flex-center cursor--pointer"
        onClick={() => navigate(`../playlist/${playlist._id}`)}
      >
        <div className="playlist-card__media-overlay flex-column flex-center">
          <p className="text-md text-center">
            Videos count: {playlist.videos.length}
          </p>
        </div>
        <img
          className="card__media"
          src={`https://img.youtube.com/vi/${playlist.videos[0]?._id}/maxresdefault.jpg`}
          alt="playlist-img"
        />
      </div>

      <div ref={contentRef} className="card__content p-xs">
        <div className="playlist-card__buttons text-lg">
          <span
            className="icon-button"
            onClick={() => setShowDeleteModal(true)}
          >
            <BiTrash className="text-lg" />
          </span>
          {showDeleteModal && (
            <Modal
              open={showDeleteModal}
              close={() => setShowDeleteModal(false)}
            >
              <div className="playlist--delete-modal text-md text-center">
                <p>Do you want to delete {playlist.title} ?</p>
                <div className="flex-row flex-center flex-wrap gap-5 m-xs">
                  <button
                    className="button"
                    onClick={() => {
                      deletePlaylist();
                      setShowDeleteModal(false);
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className="button"
                    onClick={() => setShowDeleteModal(false)}
                  >
                    No
                  </button>
                </div>
              </div>
            </Modal>
          )}
        </div>
        <h4
          className="card__title cursor--pointer"
          onClick={() => navigate(`../playlist/${playlist._id}`)}
        >
          {/* trucateString is taking the second parameter by experimentally 
        observing different denominator values and content width condition */}
          {truncateString(
            playlist.title,
            contentWidth / (contentWidth > 199 ? 5 : 6)
          )}
        </h4>
      </div>
    </div>
  );
}

export default PlaylistCard;
