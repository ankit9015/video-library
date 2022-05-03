import React from "react";
import Banner from "../../components/Banner/Banner";
import "../pages.css";

function Home() {
  const category = ["Drama", "Comedy", "Horror"];
  return (
    <div className="home main--grid">
      <Banner />
      <div className="home__category-list flex-row">
        {category.map((item) => (
          <div className="category-name capsule-tag text-md">{item}</div>
        ))}
      </div>
    </div>
  );
}

export default Home;
