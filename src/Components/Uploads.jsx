import React, { useState } from "react";
import "../ComponentStyles/PostMessage.css";
import NewsFeed from "./NewsFeed";

import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";

export default function Uploads({ profileImg }) {
  const [inputText, setInputText] = useState("");

  const [feedPost, setFeedPost] = useState([
    {
      profileImg:
        "https://scontent-dus1-1.xx.fbcdn.net/v/t1.6435-1/104653108_3147818108630537_3213906670708588248_n.jpg?stp=dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGxYun_KMmHk_Tnido3fuo1eW6jf6-GgPh5bqN_r4aA-NGRNZBccei92v0cAEujgdM-qvPs0DdrqvurdITRXFEY&_nc_ohc=31bPdk8XDpoAb6wFdE7&_nc_ht=scontent-dus1-1.xx&oh=00_AfDbDra-Gsx7nYACEKRO7cdzmQPBf_ObatdwPlW7sXPm8g&oe=66465073",
      img: "https://scontent-dus1-1.xx.fbcdn.net/v/t1.6435-9/81159697_2517279791893251_889593701024661504_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEjMjHIE7MsPCl6n9hLybvErsjN2GVzftquyM3YZXN-2pq3mema3cXdANEC390loE3s3YOqKXYWmz-tgy5d8VS1&_nc_ohc=EPT2mzaJAeoAb4Skf-E&_nc_ht=scontent-dus1-1.xx&oh=00_AfCBMc-Js2ny11zEPhf2SX_Lw2xgGebAhB2wFigkHueSqw&oe=66464F57",
      username: "Sushil Gupta",
      message: "",
    },
    {
      profileImg:
        "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-1/432748772_25377985111792978_8067359069931907874_n.jpg?stp=dst-jpg_p480x480&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHK4lYoJVtNa-IzH9U16VvICo9AXCQgDpsKj0BcJCAOmyws3V5fyY5HI3PWyS3sQuRl5eKzfJRt7ilrMlYs_Sg5&_nc_ohc=QCynRlt6UcAAb4vWF20&_nc_oc=Adg4eDC5BSr8CH1odxFO3hzzJEEWZcgLo8wDaVuEvEG7lbj2RLxG8mGf2VhszPiZQK9ntRpYB7tM8QyGjzQfcw-O&_nc_ht=scontent-dus1-1.xx&oh=00_AfC1NHxa9ybg4knomHSNYll4c_Do6M5wv4IWIZHDDFsbkQ&oe=66249A5D",
      img: "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/424595540_25162823806642444_6209461403294073194_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEYqDVtaeAaSMuIV3N7LG_2rIOx5xDBbNmsg7HnEMFs2fZH5anMdggCrlK-CdokiMPW3vQSadJvUKRH2wDXIqx-&_nc_ohc=rfO7EWTTVWwAb7hQZlV&_nc_ht=scontent-dus1-1.xx&oh=00_AfBqiM491qeRlUlPmtFNcKh5ZghseWoDNSFq7wrNqnPCtg&oe=6624899A",
      username: "Amit Shah",
      message: "",
    },

    {
      profileImg:
        "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-1/296720016_5460634184000796_2675672341767341150_n.jpg?stp=dst-jpg_s480x480&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_aid=0&_nc_eui2=AeEW5YvNX4mo5WCCoChtXyz5XA8007cDKyBcDzTTtwMrIDafmLuAbLmjaEf0VwcopqglF6Ti1V0w_rVECLAPbLfg&_nc_ohc=QPp-BUezQ6kAb4sm-7v&_nc_ht=scontent-dus1-1.xx&oh=00_AfCSvS_bCC16DUAbtM8o_dBf6huNq5VqROezNd2GjLGXvw&oe=6624A438",
      img: "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/272884769_1826612197728842_7846778150527381825_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHck4-gwBkC25_F-8sEKX9BPEqkWsmnrCQ8SqRayaesJDPXmuDb8wzi2Zqa3BISsO1bronS3HsAB0Y2Eh1z4df-&_nc_ohc=HiAQsPFsuKYAb7fk8sc&_nc_ht=scontent-dus1-1.xx&oh=00_AfDYl-EE6IVlqfxUETWHsSgcQBfP7UH111MITNVk0ahawg&oe=662496F0",
      username: "Rakesh Shah",
      message: "",
    },
  ]);
  const StringifiedObj = JSON.stringify(feedPost);
  localStorage.setItem("feedPost", StringifiedObj);
  const HandleSubmit = (event) => {
    const recentObj = {
      profileImg:
        "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-1/431447379_3705031163118102_9113357281616239589_n.jpg?stp=dst-jpg_s480x480&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHsJtDqlBivk7RiswBweVy8RYqJ1-lyDAZFionX6XIMBh5vznIRNswtmGpB1MgbI8BFaTVHTMiiS41kDNXj6F1T&_nc_ohc=H7M6MuVQzIAAb4Eu8r2&_nc_ht=scontent-dus1-1.xx&oh=00_AfBA0Qbmg-OCgrWhYO3l-l9CEUoLhEFF7keFdkD7cWXitQ&oe=6624B5BC",
      img: "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/433245763_3710398755914676_2125972950910912209_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGt0D-rNY938lppV-Jp0DuPpzAqnY51O7KnMCqdjnU7stvxNU1aqfCg8OOm0mP7YPgWoJzHeBikhncwoTEb-lRp&_nc_ohc=-9KOdguAebEAb5dINte&_nc_ht=scontent-dus1-1.xx&oh=00_AfCZ__udxOFVZnNo7tu6zR0ZYLygilPOhiagggYCo__MBw&oe=6624992B",
      username: "Sanju Shah",
      message: inputText,
    };
    event.preventDefault();
    setFeedPost([...feedPost, recentObj]);
    const newStringifiedObj = JSON.stringify(feedPost);
    localStorage.setItem("feedPost", newStringifiedObj);
  };

  return (
    <div>
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
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button className="submit_btn" type="submit" onClick={HandleSubmit}>
            Hidden Button
          </button>
        </form>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <div style={{ color: "red", display: "flex", gap: "4px" }}>
            <VideocamOutlinedIcon />
            <p
              style={{
                color: "grey",
                fontWeight: "bold",
              }}
            >
              Live video
            </p>
          </div>
          <div
            style={{
              color: "green",
              display: "flex",
              gap: "4px",
            }}
          >
            <PhotoLibraryOutlinedIcon />
            <p
              style={{
                color: "grey",
                fontWeight: "bold",
              }}
            >
              Photos
            </p>
          </div>
          <div style={{ color: "orange", display: "flex", gap: "4px" }}>
            <EmojiEmotionsOutlinedIcon />
            <p style={{ color: "grey", fontWeight: "bold" }}>
              Feeling/activity
            </p>
          </div>
        </div>
      </div>
      <NewsFeed />
    </div>
  );
}
