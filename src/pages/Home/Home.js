import React, { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/cards/Card";
import { useVideo } from "../../context/VideoContext/VideoContext";
import "../pages.css";

function Home() {
  const { categories } = useVideo();

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="home main--grid">
      <Banner />
      {categories.map((item) => (
        <Card
          key={item._id}
          title={item.categoryName}
          gif={item.gif}
          img={item.img}
          variant="category-card"
          className="m-xs category-card "
        />
      ))}
      <div className="home__trending-list"></div>
    </div>
  );
}

export default Home;
