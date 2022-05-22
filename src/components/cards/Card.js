import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import "./Cards.css";
import { MdOutlinePlayCircle } from "../../constants/icon";

function Card(props) {
  const navigate = useNavigate();
  return (
    <div
      className={`card p-xs ${props.variant ?? ""} ${props.className ?? ""}`}
      onClick={() => {
        navigate({
          pathname: "explore",
          search: createSearchParams({ categories: props.title }).toString(),
        });
      }}
    >
      <div className="card__media-container flex-row flex-center">
        <img
          className="card__media"
          src={`/assets/categories/${props.gif}`}
          alt="category-gif"
        />
      </div>
      <div className="card__content">
        <img
          className="card__content-background"
          src={`/assets/categories/${props.img}`}
          alt="category-background-img"
        />
        <h4 className="card__title m-xs">{props.title}</h4>
      </div>
      <div
        data-tooltip={`Go to ${props.title}`}
        className="card__play-button icon-button flex-row flex-center text-xxl tooltip-bottom-left"
      >
        <MdOutlinePlayCircle />
      </div>
    </div>
  );
}

export default Card;
