import React from "react";
import "./Cards.css";
import { MdOutlinePlayCircle } from "../../constants/icon";

function Card(props) {
  return (
    <div
      className={`card p-xs ${props.variant ?? ""} ${props.className ?? ""}`}
    >
      <div className="card__media-container flex-row flex-center">
        <img className="card__media" src={props.media} alt="media" />
      </div>
      <div className="card__content">
        <h4 className="card__title m-xs">{props.title}</h4>
      </div>
      <div className="card__play-button icon-button flex-row flex-center text-xxl">
        <MdOutlinePlayCircle />
      </div>
    </div>
  );
}

export default Card;
