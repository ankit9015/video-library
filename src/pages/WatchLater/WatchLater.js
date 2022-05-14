import React from "react";
import { VideoCard } from "../../components";
import { useWatchLater } from "../../context";

function WatchLater() {
  const { watchLaterState } = useWatchLater();
  return (
    <div className="watch-later main--grid">
      {watchLaterState &&
        watchLaterState.map((item) => (
          <VideoCard variant="vertical" key={item._id} video={item} />
        ))}
    </div>
  );
}

export default WatchLater;
