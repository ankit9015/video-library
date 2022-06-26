import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../components/SearchBox/SearchBox";
import { MdSearch, MdMenu } from "../constants/icon";
import { useAuth } from "../context/AuthContext/AuthContext";
import "./pageLayout.css";

function Header(props) {
  const [showSearchbox, setShowSearchbox] = useState(false);
  const { authState, logOutHandler } = useAuth();

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
        {authState.isLoggedIn ? (
          <button
            className="header__logout text-md button button-primary"
            onClick={() => logOutHandler()}
          >
            Log-out
          </button>
        ) : (
          <Link
            to="/login"
            className="header__login text-md button no-link button-primary"
          >
            Login
          </Link>
        )}
        {authState.userInfo && (
          <div className="header__avatar capsule-tag m-xs text-md">
            {authState.userInfo?.firstName}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
