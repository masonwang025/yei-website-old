import React from "react";
import Page from "../../components/Page";
import PageHero from "../../components/PageHero";
import PastSpeakers from "../../components/events/econtalks/PastSpeakers";
import useStyles from "../../styles/pages/eventsStyles";

export default function EconTalks() {
  const classes = useStyles();
  return (
    <Page
      pageTitle="EconTalks"
      desc="Hear from Youth Economics Initiative's (YEI) invited speakers from institutions such as NYU Stern, UPenn, EPA & UVA about the impact current events or trends have on the economy."
    >
      <PageHero
        title="YEI EconTalks"
        paragraph="Hear from our guest speakers."
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599405239/yei-website/manypixels-isometric/econTalksHero.png"
      />
      <PastSpeakers classes={classes} />
    </Page>
  );
}
