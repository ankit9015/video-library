import React from "react";
import { MdMenu, FaRegUserCircle } from "../constants/icon";
import "./pageLayout.css";

function Header() {
  return (
    <div className="header flex-row  flex-align-center p-xs">
      <div className="flex-row  flex-align-center gap-5">
        <span className="header__menu-button text-xl icon-button">
          <MdMenu />
        </span>
        <span className="header__logo text-md m-xs">Logo</span>
      </div>
      <span className="header__search-box">searchbox</span>
      <div className="flex-row  flex-align-center gap-5">
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
