import React from "react";
import { VideoCard } from "../../components";
import { useLikes } from "../../context";

function Liked() {
  const { likesState } = useLikes();
  return (
    <div className="liked main--grid">
      {likesState &&
        likesState.map((item) => (
          <VideoCard variant="vertical" key={item._id} video={item} />
        ))}
    </div>
  );
}

export default Liked;
