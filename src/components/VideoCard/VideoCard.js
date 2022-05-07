import { useRef, useEffect, useState } from "react";
import { truncateString } from "../../utility";
import "../cards/Cards.css";
import "./VideoCard.css";
import {
  BiLike,
  MdOutlineWatchLater,
  MdPlaylistAdd,
} from "../../constants/icon";

function VideoCard(props) {
  const cardRef = useRef();
  const [cardWidth, setCardWidth] = useState(0);

  const handleResize = () => {
    setCardWidth(cardRef.current.offsetWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setCardWidth(cardRef.current.offsetWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card text-md p-xs flex-column ${props.variant ?? ""} ${
        props.className ?? ""
      }`}
    >
      <div className="card__media-container flex-row flex-center">
        <img className="card__media" src={`${props.img}`} alt="category-gif" />
      </div>
      <div className="video-card__buttons text-xl">
        <BiLike />
        <MdOutlineWatchLater />
        <MdPlaylistAdd />
      </div>
      <div className="card__content p-xs">
        <h4 className="card__title">
          {/* trucateString is taking the second parameter charCount by experimaentally 
          observing different denominator values and card width condition */}
          {truncateString(props.title, cardWidth / (cardWidth > 220 ? 5 : 4))}
        </h4>
        <a className="button-primary" href={`${props.link}`}>
          Watch Later
        </a>
      </div>
    </div>
  );
}

export default VideoCard;
