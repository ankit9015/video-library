import React from "react";
import "./Banner.css";
import { truncateString } from "../../utility";
import Slider from "react-slick";

function Banner() {
  const BANNER_DESCRIPTION = `You’ve probably heard of Lorem Ipsum before – it’s the most-used dummy text excerpt out there. 
  People use it because it has a fairly normal distribution of letters and words (making it look like normal English), 
  but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing
   design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, 
   instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types,
    and more. `;

  const bannerImageDb = [
    {
      id: 1,
      title: "",
      description: "",
      img_1200w: "j-cole-everybody-dies.jpg",
      img_700w: "j-cole-everybody-dies-700w.jpg",
      imgPortrait: "j-cole-everybody-dies-portrait.jpg",
    },
    {
      id: 2,
      title: "",
      description: "",
      img_1200w: "lauv-mean-it.jpg",
      img_700w: "lauv-mean-it-700w.jpg",
      imgPortrait: "lauv-mean-it-portrait.jpg",
    },
    {
      id: 3,
      title: "",
      description: "",
      img_1200w: "marshmellow-stars.jpg",
      img_700w: "marshmellow-stars-700w.jpg",
      imgPortrait: "marshmellow-stars-portrait.jpg",
    },
    {
      id: 4,
      title: "",
      description: "",
      img_1200w: "meditation.jpg",
      img_700w: "meditation-700w.jpg",
      imgPortrait: "meditation-portrait.jpg",
    },
    {
      id: 5,
      title: "",
      description: "",
      img_1200w: "lofi.jpg",
      img_700w: "lofi-700w.jpg",
      imgPortrait: "lofi-portrait.jpg",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: "slider",
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        {bannerImageDb.map((item) => (
          <div className="banner__slider">
            <div className="banner__img-container">
              <picture>
                <source
                  className="banner__img"
                  media="(min-width: 500px)"
                  srcSet={`/assets/banner/${item.img_1200w} 1200w,
          /assets/banner/${item.img_700w} 700w`}
                  sizes="80vw"
                />
                <source
                  className="banner__img"
                  srcSet={`/assets/banner/${item.imgPortrait}`}
                />
                <img
                  className="banner__img"
                  src={`/assets/banner/${item.img_700w}`}
                  alt="lofi"
                />
              </picture>
            </div>

            <div className="banner__content">
              <h1 className="banner__title H2">Title</h1>
              <div className="banner__description text-md">
                {truncateString(BANNER_DESCRIPTION, 120)}
              </div>
              <button className="banner__button text-md">Play</button>
              <button className="banner__button text-md">Watch Later</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
