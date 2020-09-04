import React from "react";
import Page from "../../components/Page";
import SectionHero from "../../components/SectionHero";
import { Button } from "@material-ui/core";

export default function EconOlympiad() {
  return (
    <Page>
      <SectionHero
        title="YEI EconOlympiad"
        paragraph="Here is a short paragraph that has the page's key information."
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599260960/yei-website/section-heroes/econEventHero1.png"
        callToAction={
          <Button variant="contained" color="secondary">
            Join Today
          </Button>
        }
      />
    </Page>
  );
}
