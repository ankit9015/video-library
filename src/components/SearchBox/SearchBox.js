import { useState } from "react";
import { FaSearch } from "../../constants/icon";
import { useFilter } from "../../context";
import { SEARCH_FILTER } from "../../constants/actionType";
// import { Link } from "react-router-dom";

import "./SearchBox.css";
import { useNavigate } from "react-router-dom";

function SearchBox(props) {
  const { filterDispatch } = useFilter();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
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
          filterDispatch({
            type: SEARCH_FILTER,
            payload: searchQuery.trim(),
          });
          navigate("explore");
        }}
      >
        <FaSearch />
      </span>
    </div>
  );
}

export default SearchBox;
