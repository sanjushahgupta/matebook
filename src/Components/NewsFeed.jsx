import React, { useEffect } from "react";
import { Avatar } from "@mui/material";

export default function NewsFeed() {
  const newsFeed = localStorage.getItem("feedPost");
  const parsedPost = JSON.parse(newsFeed);

  return (
    <div>
      {parsedPost &&
        parsedPost.map((val, index) => (
          <div
            style={{
              display: "flex",
              backgroundColor: "white",
              textAlign: "center",
              margin: "15px 0px",
              gap: "8px",
              padding: "8px",
            }}
            key={index}
          >
            <Avatar
              style={{
                height: "40px",
                width: "40px",
                margin: "5px",
                backgroundSize: "cover",
              }}
              src={val.profileImg}
            />
            <h4>{val.username}</h4>
            <img
              style={{ padding: "10px", width: "300px", margin: "0px 20px" }}
              key={index + 3}
              src={val.img}
            />
            <h4>{val.message}</h4>
          </div>
        ))}
    </div>
  );
}
