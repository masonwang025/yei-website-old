import React from "react";
import Page from "../../components/Page";
import PageHero from "../../components/PageHero";
import { Button } from "@material-ui/core";
import { Helmet } from "react-helmet";

export default function EconBowl() {
  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EconBowl - The Youth Economics Initiative</title>
      </Helmet>
      <PageHero
        title="YEI EconBowl"
        paragraph="Here is a short paragraph that has the page's key information."
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599405239/yei-website/manypixels-isometric/econBowlHero.png"
        callToAction={
          <Button variant="contained" color="secondary">
            Join Today
          </Button>
        }
      />
    </Page>
  );
}
