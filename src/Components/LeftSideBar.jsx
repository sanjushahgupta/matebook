import React from "react";
import SideBarRow from "./SideBarRow";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AssistantPhotoTwoToneIcon from "@mui/icons-material/AssistantPhotoTwoTone";
import ChatTwoToneIcon from "@mui/icons-material/ChatTwoTone";

function LeftSideBar() {
  return (
    <div className="LeftSideBarRow">
      <SideBarRow Icon={<AccountCircleIcon />} Title={"Sanju"}></SideBarRow>
      <SideBarRow Icon={<PeopleIcon />} Title={"Friends"}></SideBarRow>
      <SideBarRow Icon={<StorefrontIcon />} Title={"Marketplace"}></SideBarRow>
      <SideBarRow
        Icon={<AssistantPhotoTwoToneIcon />}
        Title={"Pages"}
      ></SideBarRow>
      <SideBarRow Icon={<ChatTwoToneIcon />} Title={"Messenger"}></SideBarRow>
    </div>
  );
}

export default LeftSideBar;
