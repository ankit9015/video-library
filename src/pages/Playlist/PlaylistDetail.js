// import { useState } from "react";
import { useParams } from "react-router-dom";
import { usePlaylist } from "../../context";

function PlaylistDetail() {
  const { playlistId } = useParams();
  //   const [playlist, setPlaylist] = useState(null);

  const { playlistsState } = usePlaylist();

  const playlist =
    playlistsState.filter((playlist) => playlist._id === playlistId)?.[0] ?? {};
  console.log(playlist);

  return <div>PlaylistDetail {playlistId}</div>;
}

export default PlaylistDetail;
