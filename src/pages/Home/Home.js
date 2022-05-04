import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/cards/Card";
// import fetchCategories from "../../service/fetch/fetchCategories";
import "../pages.css";

function Home() {
  // const category = ["Drama", "Comedy", "Horror"];
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

  console.log(categories);
  return (
    <div className="home main--grid">
      <Banner />
      {categories.map((item) => (
        <Card
          title={item.categoryName}
          gif={item.gif}
          img={item.img}
          variant="category-card"
          className="m-xs"
        />
      ))}
      <div className="home__trending-list">
        {/* <h4>Trending</h4> */}
        {/* {trending.map((item) => (
          <div>ite</div>
        ))} */}
      </div>
    </div>
  );
}

export default Home;
