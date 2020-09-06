import React from "react";
import Page from "../../components/Page";
import SectionHero from "../../components/SectionHero";
import { Button } from "@material-ui/core";

export default function EconBowl() {
  return (
    <Page>
      <SectionHero
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
