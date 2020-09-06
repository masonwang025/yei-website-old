import React from "react";
import Page from "../../components/Page";
import SectionHero from "../../components/SectionHero";
import { Button } from "@material-ui/core";
import SectionAbout from "../../components/SectionAbout";

export default function Clubs() {
  return (
    <Page>
      <SectionHero
        title="YEI EconClubs"
        paragraph="Take your economics club to the next level."
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599407913/yei-website/manypixels-isometric/clubsHero.png"
        callToAction={
          <Button variant="contained" color="secondary">
            Register Your Club
          </Button>
        }
      />
      <SectionAbout
        title="What are YEI EconClubs?"
        content={
          <span>
            YEI EconClubs is the premier high school economics club program for
            students who want to supercharge their economics journey. Whether
            your a student hoping to start a new economics club or already have
            an existing club, YEI will provide you with all of the resources and
            support for your club to thrive.
          </span>
        }
        callToAction={
          <Button variant="contained" color="primary" size="large">
            Register Your Club
          </Button>
        }
      />
    </Page>
  );
}
