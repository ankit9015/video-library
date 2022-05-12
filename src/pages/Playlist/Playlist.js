import { useState } from "react";
import { CreatePlaylist, PlaylistCard, Modal } from "../../components";
import { usePlaylist } from "../../context";
import "../pages.css";

function Playlist() {
  const { playlistsState } = usePlaylist();
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  console.log(playlistsState);
  return (
    <div className="playlist-page main--grid">
      <div className="playlist-header">
        <button
          className="button button-primary text-md"
          onClick={() => setShowPlaylistModal(true)}
        >
          Create Playlist
        </button>
        {showPlaylistModal && (
          <Modal
            open={showPlaylistModal}
            close={() => setShowPlaylistModal(false)}
          >
            <CreatePlaylist toggleCreate={setShowPlaylistModal} />
          </Modal>
        )}
      </div>
      {playlistsState &&
        playlistsState.map((item) => (
          <PlaylistCard key={item._id} playlist={item} />
        ))}
    </div>
  );
}

export default Playlist;
