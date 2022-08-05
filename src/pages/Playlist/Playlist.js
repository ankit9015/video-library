import { useState } from "react";
import { CreatePlaylist, PlaylistCard, Modal } from "../../components";
import { usePlaylist } from "../../context";
import "../pages.css";

function Playlist() {
  const { playlistsState } = usePlaylist();
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

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
      {playlistsState?.length > 0 ? (
        playlistsState.map((item) => (
          <PlaylistCard key={item._id} playlist={item} />
        ))
      ) : (
        <p className="text-lg page-center text-center">
          You have not created any Playlists yet.
        </p>
      )}
    </div>
  );
}

export default Playlist;
