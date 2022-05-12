// import { useState } from "react";
import { useParams } from "react-router-dom";
import { VideoCard } from "../../components";
import { usePlaylist } from "../../context";

function PlaylistDetail() {
  const { playlistId } = useParams();

  const { playlistsState } = usePlaylist();

  const playlist =
    playlistsState.filter((playlist) => playlist._id === playlistId)?.[0] ?? {};

  return (
    <div className="playlist-detail main--grid">
      {playlist && (
        <div className="playlist-detail__info flex-column ">
          <h1 className="text-lg">Title: {playlist.title}</h1>
          <p className="text-md">Description: {playlist.description}</p>
          <p className="text-sm">Videos count: {playlist.videos.length}</p>
        </div>
      )}
      {playlist?.videos &&
        playlist.videos.map((item) => (
          <VideoCard
            key={item._id}
            variant="vertical"
            video={item}
            img={`https://img.youtube.com/vi/${item._id}/maxresdefault.jpg`}
            link={`https://youtu.be/${item._id}`}
            title={item.title}
            creator={item.creator}
          />
        ))}
    </div>
  );
}

export default PlaylistDetail;
