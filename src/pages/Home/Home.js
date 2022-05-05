import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/cards/Card";
import "../pages.css";

function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/categories");
        setCategories(data.categories);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="home main--grid">
      <Banner />
      {categories.map((item) => (
        <Card
          title={item.categoryName}
          gif={item.gif}
          img={item.img}
          variant="category-card"
          className="m-xs category-card"
        />
      ))}
      <div className="home__trending-list"></div>
    </div>
  );
}

export default Home;
