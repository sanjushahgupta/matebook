import React from "react";
import "../ComponentStyles/SideBarRow.css";

function SideBarRow({ Icon, Title }) {
  return (
    <div className="sidebar-row">
      {Icon}
      <p className="row-text">{Title}</p>
    </div>
  );
}

export default SideBarRow;
