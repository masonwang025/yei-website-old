import React from "react";
import Page from "../../components/Page";
import SectionHero from "../../components/SectionHero";
import { Button } from "@material-ui/core";

export default function Clubs() {
  return (
    <Page>
      <SectionHero
        title="YEI Clubs"
        paragraph="Here is a short paragraph that has the page's key information."
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599259697/yei-website/section-heroes/clubsHero.png"
        callToAction={
          <Button variant="contained" color="secondary">
            Register Your Club
          </Button>
        }
      />
    </Page>
  );
}
