import React from "react";

import Carousel from "react-elastic-carousel";

import { IconButton } from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBackIos";
import ArrowForward from "@material-ui/icons/ArrowForwardIos";

import speakers from "../../../data/people/speakers";
import SlideItem from "./SlideItem";

export default function SpeakerSlider() {
  const bp = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
  ];

  return (
    <Carousel breakPoints={bp} renderArrow={Arrow} pagination={false}>
      {speakers.slice(0, 10).map((speaker) => {
        let key = speaker.name.replace(/[\W_]+/g, "-").toLowerCase();
        let imgURL = speaker.imgURL
          ? speaker.imgURL
          : `https://res.cloudinary.com/masonwang/image/upload/v1600135590/yei-website/speakers/${key}.jpg`;
        return (
          <SlideItem
            key={key}
            name={speaker.name}
            date={speaker.date}
            imgURL={imgURL}
            occupation={speaker.occupation}
            vid={speaker.vids ? speaker.vids[0] : null}
          />
        );
      })}
    </Carousel>
  );
}

function Arrow({ type, onClick, isEdge }) {
  const buttonStyle = {
    color: isEdge ? "#555" : "#E0E0E0",
    transition: "1.2s all",
  };
  const pointer =
    type === "PREV" ? (
      <ArrowBack style={buttonStyle} />
    ) : (
      <ArrowForward style={buttonStyle} />
    );
  return (
    <IconButton
      disableRipple
      onClick={onClick}
      disabled={isEdge}
      style={{ background: "transparent" }}
    >
      {pointer}
    </IconButton>
  );
}
