import React from "react";
import Page from "../../components/Page";
import PageHero from "../../components/PageHero";
import { Button } from "@material-ui/core";

export default function CurrentClubs() {
  return (
    <Page>
      <PageHero
        title="YEI Current Clubs"
        paragraph="Here is a short paragraph that has the page's key information."
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599407419/yei-website/manypixels-isometric/currentClubsHero.png"
        callToAction={
          <Button variant="contained" color="secondary">
            Register Your Club
          </Button>
        }
      />
    </Page>
  );
}
