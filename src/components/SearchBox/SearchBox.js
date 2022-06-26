import { useState, useEffect } from "react";
import { FaSearch } from "../../constants/icon";

import "./SearchBox.css";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function SearchBox(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes("explore")) {
      setSearchQuery("");
    } else {
      setSearchQuery(searchParams.get("search") ?? "");
    }
  }, [location, searchParams]);

  return (
    <div className={`search-box text-md ${props.className}`}>
      <input
        type="search"
        className="text-md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <span
        className="icon-button"
        onClick={() => {
          if (location.pathname === "/explore") {
            if (searchQuery) {
              setSearchParams({
                search: searchQuery,
                categories: searchParams.getAll("categories"),
              });
            } else {
              setSearchParams({
                categories: searchParams.getAll("categories"),
              });
            }
          } else {
            navigate({
              pathname: "explore",
              search: createSearchParams({ search: searchQuery }).toString(),
            });
          }
          props.setShowSearchbox(false);
        }}
      >
        <FaSearch />
      </span>
    </div>
  );
}

export default SearchBox;
