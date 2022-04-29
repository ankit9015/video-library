import { FaSearch, FaFilter } from "../../constants/icon";
// import { Link } from "react-router-dom";

import "./SearchBox.css";

function SearchBox(props) {
  return (
    <div className={`search-box text-md ${props.className}`}>
      <span
        className="icon-button"
        onClick={() => props.setShowSearchbox((prev) => !prev)}
      >
        {/* <Link className="no-link " to="/"> */}
        <FaSearch />
        {/* </Link> */}
      </span>

      <input type="search" className="text-md" />

      <span className="icon-button">
        {/* <Link className="no-link " to="/"> */}
        <FaFilter />
        {/* </Link> */}
      </span>
    </div>
  );
}

export default SearchBox;
