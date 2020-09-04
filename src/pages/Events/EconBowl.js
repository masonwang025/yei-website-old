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
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599260959/yei-website/section-heroes/econEventHero2.png"
        callToAction={
          <Button variant="contained" color="secondary">
            Join Today
          </Button>
        }
      />
    </Page>
  );
}
