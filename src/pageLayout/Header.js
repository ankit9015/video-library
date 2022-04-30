import { useState } from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import { MdSearch, MdMenu, FaRegUserCircle } from "../constants/icon";
import "./pageLayout.css";

function Header(props) {
  const [showSearchbox, setShowSearchbox] = useState(false);
  return (
    <div className="header flex-row  flex-align-center p-xs">
      <div className="flex-row  flex-align-center gap-5">
        <span
          className="header__menu-button text-xl icon-button"
          onClick={() => props.setShowSidebar((prev) => !prev)}
        >
          <MdMenu />
        </span>
        <span className="header__logo text-md m-xs">Logo</span>
      </div>
      <span
        className={`header__search-box ${
          showSearchbox ? "searchbox--visible" : ""
        }`}
      >
        <SearchBox setShowSearchbox={setShowSearchbox} />
      </span>
      <div className="flex-row  flex-align-center gap-5">
        <span
          className="header__search-show-button icon-button text-xl"
          onClick={() => setShowSearchbox((prev) => !prev)}
        >
          <MdSearch />
        </span>
        <button className="header__login text-md">Login</button>
        <div className=" header__avatar avatar m-xs avatar-text">
          {/* <span className="text-lg">G</span> */}
          <FaRegUserCircle />
        </div>
      </div>
    </div>
  );
}

export default Header;
