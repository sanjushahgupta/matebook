import { Avatar, Card } from "@mui/material";
import React from "react";

export default function Story({ imageSrc, backgroundImg }) {
  return (
    <Card
      style={{
        height: "200px",
        width: "150px",
        margin: "8px",
        backgroundSize: "cover",
        backgroundImage: `url("${backgroundImg}")`,
      }}
    >
      <Avatar
        style={{
          height: "40px",
          width: "40px",
          margin: "5px",
          backgroundSize: "cover",
        }}
        src={`${imageSrc}`}
      />
    </Card>
  );
}
