import React from "react";

function Sidebar(props) {
  return (
    <div className={`sidebar ${props.showSidebar ? "sidebar--visible" : ""}`}>
      Sidebar
    </div>
  );
}

export default Sidebar;
