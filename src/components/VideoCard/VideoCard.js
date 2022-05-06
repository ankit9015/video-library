import React from "react";
import "../cards/Cards.css";
import "./VideoCard.css";
// import { MdOutlinePlayCircle } from "../../constants/icon";

function VideoCard(props) {
  return (
    <div
      className={`card p-xs flex-column ${props.variant ?? ""} ${
        props.className ?? ""
      }`}
    >
      <div className="card__media-container flex-row flex-center">
        <img className="card__media" src={`${props.img}`} alt="category-gif" />
      </div>
      <div className="card__content p-xs">
        <h4 className="card__title text-md">Title</h4>
        <button>Watch Later</button>
      </div>
    </div>
  );
}

export default VideoCard;
