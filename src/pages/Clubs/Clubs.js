import React from "react";
import PageHero from "../../components/PageHero";
import { Button } from "@material-ui/core";
import PageSection from "../../components/PageSection";
import ClubBenefits from "../../components/clubs/ClubBenefits";

export default function Clubs() {
  return (
    <div>
      <PageHero
        title="YEI EconClubs"
        paragraph="Take your economics club to the next level."
        callToAction={
          <Button variant="contained" color="secondary">
            Register Your Club
          </Button>
        }
      />
      <PageSection
        title="What are YEI EconClubs?"
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599405239/yei-website/manypixels-isometric/teamHero.png"
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
      {/* <ClubBenefits /> */}
    </div>
  );
}
