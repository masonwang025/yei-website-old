import React from "react";
import Page from "../../components/Page";
import PageHero from "../../components/PageHero";
import { Button } from "@material-ui/core";
import { Helmet } from "react-helmet";

export default function EconOlympiad() {
  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EconOlympiad - The Youth Economics Initiative</title>
      </Helmet>
      <PageHero
        title="YEI EconOlympiad"
        paragraph="Here is a short paragraph that has the page's key information."
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599405238/yei-website/manypixels-isometric/econOlympiadHero.png"
        callToAction={
          <Button variant="contained" color="secondary">
            Join Today
          </Button>
        }
      />
    </Page>
  );
}
