import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";
import { truncateString } from "../../utility";
import Slider from "react-slick";
import { bannerImageDb } from "./banner_db";
import { useAuth, useVideo, useWatchLater } from "../../context";

function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: "slider",
  };

  const { authState } = useAuth();
  const { addToWatchLater } = useWatchLater();
  const { videos } = useVideo();

  const navigate = useNavigate();

  return (
    <div className="banner">
      <Slider {...settings}>
        {bannerImageDb.map((item) => (
          <div key={item.id} className="banner__slider">
            <div className="banner__img-container">
              <picture>
                <source
                  className="banner__img"
                  media="(min-width: 1000px)"
                  srcSet={`./assets/banner/${item.img_1200w}`}
                  sizes="80vw"
                />
                <source
                  className="banner__img"
                  media="(min-width: 500px)"
                  srcSet={`./assets/banner/${item.img_700w}`}
                />
                <source
                  className="banner__img"
                  srcSet={`./assets/banner/${item.imgPortrait}`}
                />
                <img
                  className="banner__img"
                  src={`./assets/banner/${item.img_700w}`}
                  alt="lofi"
                />
              </picture>
            </div>
            <div className="banner__content">
              <h1 className="banner__title H2">{item.title}</h1>
              <div className="banner__description text-md">
                {truncateString(item.description, 120)}
              </div>
              <button
                className="banner__button text-md cursor--pointer"
                onClick={() => navigate(`../watch/${item.videoId}`)}
              >
                Play
              </button>
              <button
                className="banner__button text-md cursor--pointer"
                onClick={() => {
                  if (authState.isLoggedIn) {
                    const currVideo = videos.find(
                      (video) => video._id === item.videoId
                    );

                    addToWatchLater(currVideo);
                  } else {
                    navigate("../login");
                  }
                }}
              >
                Watch Later
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
