import { VideoCard } from "../../components";
import { useEffect } from "react";
import "../pages.css";
import { useFilter, useVideo } from "../../context";
import { CATEGORY_FILTER, SEARCH_FILTER } from "../../constants/actionType";
import { useSearchParams } from "react-router-dom";

function Explore() {
  const { categories } = useVideo();
  const { filteredVideos, filterDispatch } = useFilter();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    document.title = "Explore";
  }, []);

  useEffect(() => {
    filterDispatch({
      type: CATEGORY_FILTER,
      payload: searchParams.getAll("categories"),
    });
    filterDispatch({
      type: SEARCH_FILTER,
      payload: searchParams.get("search"),
    });
  }, [filterDispatch, searchParams]);

  const categoriesToUrl = (categoryName) => {
    let paramCategories = searchParams.getAll("categories");
    const searchParamsArr = Array.from(searchParams);
    if (paramCategories?.includes(categoryName)) {
      setSearchParams(
        searchParamsArr.filter(
          (item) => !(item[0] === "categories" && item[1] === categoryName)
        )
      );
    } else {
      setSearchParams([...searchParamsArr, ["categories", categoryName]]);
    }
  };
  return (
    <div className="explore main--grid">
      <div className="explore__categories invisible-scroll">
        {categories.map((item) => (
          <div
            className={`capsule-tag text-md cursor--pointer ${
              searchParams.getAll("categories")?.includes(item.categoryName)
                ? "active"
                : ""
            }`}
            key={item._id}
            onClick={() => {
              categoriesToUrl(item.categoryName);
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
