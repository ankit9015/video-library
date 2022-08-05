import { useParams } from "react-router-dom";
import { VideoCard } from "../../components";
import { REMOVE_FROM_PLAYLIST } from "../../constants/actionType";
import { useAuth, usePlaylist } from "../../context";
import { removeFromPlaylistService } from "../../service";

function PlaylistDetail() {
  const { playlistId } = useParams();
  const { authState } = useAuth();

  const { playlistsState, playlistsDispatch } = usePlaylist();

  const removeFromPlaylist = async (videoId) => {
    const { data } = await removeFromPlaylistService(
      playlistId,
      videoId,
      authState.authToken
    );
    playlistsDispatch({ type: REMOVE_FROM_PLAYLIST, payload: data.playlist });
  };

  const playlist =
    playlistsState.filter((playlist) => playlist._id === playlistId)?.[0] ?? {};

  return (
    <div className="playlist-detail main--grid">
      {playlist && (
        <div className="playlist-detail__info flex-column ">
          <h1 className="text-lg word-break">Title: {playlist.title}</h1>
          <p className="text-md word-break">
            Description: {playlist.description}
          </p>
          <p className="text-sm">Videos count: {playlist.videos.length}</p>
        </div>
      )}
      {playlist?.videos &&
        playlist.videos.map((item) => (
          <VideoCard
            key={item._id}
            variant="vertical"
            video={item}
            removeFromplaylist={() => removeFromPlaylist(item._id)}
          />
        ))}
    </div>
  );
}

export default PlaylistDetail;
