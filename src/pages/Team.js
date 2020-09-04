import React from "react";
import Page from "../components/Page";
import SectionHero from "../components/SectionHero";
import { Button } from "@material-ui/core";

export default function Team() {
  return (
    <Page>
      <SectionHero
        title="Meet our team"
        paragraph="Here is a short paragraph that has the page's key information."
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599249199/yei-website/section-heroes/teamHero.png"
        callToAction={
          <Button variant="contained" color="secondary">
            Join Team
          </Button>
        }
      />
    </Page>
  );
}
