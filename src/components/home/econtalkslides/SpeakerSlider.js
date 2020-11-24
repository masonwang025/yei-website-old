import React from "react";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { IconButton } from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBackIos";
import ArrowForward from "@material-ui/icons/ArrowForwardIos";

import speakers from "../../../data/people/speakers";
import SlideItem from "./SlideItem";

import SlidesErrorBoundary from "./SlidesErrorBoundary";

export default function SpeakerSlider(props) {
  const universalPlugins = [
    "infinite",
    {
      resolve: arrowsPlugin,
      options: {
        arrowLeft: (
          <IconButton aria-label="left">
            <ArrowBack style={{ color: "#aaa" }} />
          </IconButton>
        ),
        arrowRight: (
          <IconButton aria-label="right">
            <ArrowForward style={{ color: "#aaa" }} />
          </IconButton>
        ),
        addArrowClickHandler: true,
      },
    },
    {
      resolve: autoplayPlugin,
      options: {
        interval: 3000,
      },
    },
  ];

  return (
    <SlidesErrorBoundary>
      <Carousel
        animationSpeed={1000}
        plugins={[
          ...universalPlugins,
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        breakpoints={{
          960: {
            plugins: [
              ...universalPlugins,
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
          1280: {
            plugins: [
              ...universalPlugins,
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ],
          },
        }}
      >
        {speakers.slice(0, 10).map((speaker) => {
          let key = speaker.name.replace(/[\W_]+/g, "-").toLowerCase();
          let imgURL = speaker.imgURL
            ? speaker.imgURL
            : `https://res.cloudinary.com/masonwang/image/upload/v1600135590/yei-website/speakers/${key}.jpg`;
          return (
            <SlideItem
              name={speaker.name}
              date={speaker.date}
              imgURL={imgURL}
              occupation={speaker.occupation}
              vid={speaker.vids ? speaker.vids[0] : null}
            />
          );
        })}
      </Carousel>
    </SlidesErrorBoundary>
  );
}
