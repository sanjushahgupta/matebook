import React from "react";
import "../ComponentStyles/PostMessage.css";
import CameraIndoorTwoToneIcon from "@mui/icons-material/CameraIndoorTwoTone";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";

export default function PostMessage({ profileImg }) {
  const HandleSubmit = (event) => {
    event.preventDefault();
    alert("Post is entered.");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: "20px 0px",
      }}
    >
      <form>
        <img src={`${profileImg}`} className="profile_img" />
        <input
          className="input_field"
          placeholder="What's on your mind?"
          type="text"
        />
        <button className="submit_btn" type="submit" onClick={HandleSubmit}>
          Hidden Button
        </button>
      </form>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ color: "red", paddingLeft: "8px" }}>
          <CameraIndoorTwoToneIcon />
          <p style={{ color: "grey", fontWeight: "bold" }}>Live video</p>
        </div>
        <div style={{ color: "green", paddingLeft: "8px" }}>
          <PhotoLibraryOutlinedIcon />
          <p style={{ color: "grey", fontWeight: "bold" }}>Photos</p>
        </div>
        <div style={{ color: "orange", paddingLeft: "8px" }}>
          <EmojiEmotionsOutlinedIcon />
          <p style={{ color: "grey", fontWeight: "bold" }}>Feeling/activity</p>
        </div>
      </div>
    </div>
  );
}

/* //  <div className="source">
  //
</div> */
