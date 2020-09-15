import React from "react";
import Page from "../../components/Page";
import PageHero from "../../components/PageHero";
import { Helmet } from "react-helmet";
// import useStyles from "../../styles/pages/eventsStyles";

export default function Events() {
  // const classes = useStyles();
  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Events - The Youth Economics Initiative</title>
      </Helmet>
      <PageHero
        moreText
        title="YEI Events"
        paragraph="Through YEI Events, students gain access to a expansive network of driven and motivated students and professionals, while finding their unique path toward applying their knowledge. Win cash prizes, network with professors and professionals, learn material, find your pathway to a career in economics, finance or business."
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599405238/yei-website/manypixels-isometric/eventsHero.png"
      />
    </Page>
  );
}
