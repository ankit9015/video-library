import React from "react";
import { VideoCard } from "../../components";
import { useLikes } from "../../context";

function Liked() {
  const { likesState } = useLikes();
  return (
    <div className="liked main--grid">
      {likesState?.length > 0 ? (
        likesState.map((item) => (
          <VideoCard variant="vertical" key={item._id} video={item} />
        ))
      ) : (
        <p className="text-lg page-center text-center">
          You have not liked any video yet.
        </p>
      )}
    </div>
  );
}

export default Liked;
