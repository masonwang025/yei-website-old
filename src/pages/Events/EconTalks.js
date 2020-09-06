import React from "react";
import Page from "../../components/Page";
import SectionHero from "../../components/SectionHero";
import { Button } from "@material-ui/core";

export default function EconTalks() {
  return (
    <Page>
      <SectionHero
        title="YEI Speaker EconTalks"
        paragraph="Here is a short paragraph that has the page's key information."
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599405239/yei-website/manypixels-isometric/econTalksHero.png"
        callToAction={
          <Button variant="contained" color="secondary">
            Join Today
          </Button>
        }
      />
    </Page>
  );
}
