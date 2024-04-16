import React from "react";
import StoriesReels from "./StoriesReels";
import PostMessage from "./PostMessage";

function MainFeed() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
    >
      <StoriesReels />
      <PostMessage profileImg="https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-1/431447379_3705031163118102_9113357281616239589_n.jpg?stp=dst-jpg_s480x480&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHsJtDqlBivk7RiswBweVy8RYqJ1-lyDAZFionX6XIMBh5vznIRNswtmGpB1MgbI8BFaTVHTMiiS41kDNXj6F1T&_nc_ohc=H7M6MuVQzIAAb4Eu8r2&_nc_ht=scontent-dus1-1.xx&oh=00_AfDrQu6XFr-j24jcGNK6qk6qzWdPgWS82uJ71JL-k1Jp0g&oe=6624453C" />
    </div>
  );
}

export default MainFeed;
