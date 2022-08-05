import React from "react";
import { VideoCard } from "../../components";
import { useWatchLater } from "../../context";

function WatchLater() {
  const { watchLaterState } = useWatchLater();
  return (
    <div className="watch-later main--grid">
      {watchLaterState?.length > 0 ? (
        watchLaterState.map((item) => (
          <VideoCard variant="vertical" key={item._id} video={item} />
        ))
      ) : (
        <p className="text-lg page-center text-center">
          You have not added any video to Watch Later.
        </p>
      )}
    </div>
  );
}

export default WatchLater;
