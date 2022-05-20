import { VideoCard } from "../../components";
import { useEffect } from "react";
import "../pages.css";
import { useFilter, useVideo } from "../../context";
import { CATEGORY_FILTER } from "../../constants/actionType";

function Explore() {
  const { categories } = useVideo();
  const { filterState, filteredVideos } = useFilter();
  const { filterDispatch } = useFilter();

  useEffect(() => {
    document.title = "Explore";
  }, []);

  const selectedCategories = filterState.categories;
  return (
    <div className="explore main--grid">
      <div className="explore__categories invisible-scroll">
        {categories.map((item) => (
          <div
            className={`capsule-tag text-md cursor--pointer ${
              selectedCategories?.includes(item.categoryName) ? "active" : ""
            }`}
            key={item._id}
            onClick={() => {
              filterDispatch({
                type: CATEGORY_FILTER,
                payload: item.categoryName,
              });
            }}
          >
            {item.categoryName}
          </div>
        ))}
      </div>
      {filteredVideos &&
        filteredVideos.map((item) => (
          <VideoCard variant="vertical" key={item._id} video={item} />
        ))}
    </div>
  );
}

export default Explore;
