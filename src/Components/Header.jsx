import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { colors } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input className="header_input" placeholder="Search matebook"></input>
      </div>
      <div className="header_center">
        <HomeIcon className="header_options" />
        <OndemandVideoIcon className="header_options" />
        <PeopleIcon className="header_options" />
      </div>
      <div className="header_right">
        <NotificationsNoneIcon className="header_options" />
        <AccountCircleIcon className="header_options" />
        <h4>Sanju Shah</h4>
      </div>
    </div>
  );
}

export default Header;
