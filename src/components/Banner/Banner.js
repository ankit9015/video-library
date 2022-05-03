import React from "react";
import "./Banner.css";
import { truncateString } from "../../utility";
// import Slider from "react-slick";

function Banner() {
  const BANNER_DESCRIPTION = `You’ve probably heard of Lorem Ipsum before – it’s the most-used dummy text excerpt out there. 
  People use it because it has a fairly normal distribution of letters and words (making it look like normal English), 
  but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing
   design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, 
   instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types,
    and more.

  `;

  // const banner__list = ["./assets/banner/phirleaayadil.jpg"];
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   lazyLoad: "progressive",
  //   autoplay: true,
  //   className: "banner__img-container",
  // };
  return (
    <div className="banner">
      {/* <Slider {...settings}> */}
      <div className="banner__img-container">
        {/* <img
            className="banner__img"
            src="./assets/banner/1st.jpg"
            alt="banner-img"
          /> */}
        <h3>1</h3>
      </div>
      {/* <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
      {/* </Slider> */}
      {/* <img src="./assets/banner/phirleaayadil.jpg" alt="banner-img" /> */}
      <div className="banner__content">
        <h1 className="banner__title H2">Title</h1>
        <div className="banner__description text-md">
          {truncateString(BANNER_DESCRIPTION, 120)}
        </div>
        <button className="banner__button text-md">Play</button>
        <button className="banner__button text-md">Watch Later</button>
      </div>
    </div>
  );
}

export default Banner;
