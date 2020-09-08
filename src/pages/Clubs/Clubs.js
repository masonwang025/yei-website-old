import React from "react";
import PageHero from "../../components/PageHero";
import { Button, Box } from "@material-ui/core";
import PageSection from "../../components/PageSection";
import ClubBenefits from "../../components/clubs/ClubBenefits";
import { Link } from "react-router-dom";

export default function Clubs() {
  return (
    <div>
      <PageHero
        title="YEI EconClubs"
        paragraph="Take your economics club to the next level."
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599500302/yei-website/manypixels-isometric/clubsHero.png"
        callToAction={
          <Link to="/clubs/current-clubs">
            <Button variant="contained" color="secondary">
              View Current Clubs
            </Button>
          </Link>
        }
      />
      <Box pb={3}>
        <PageSection
          light={true}
          title="What are YEI EconClubs?"
          imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599407419/yei-website/manypixels-isometric/clubsPageImg.png"
          content={
            <span>
              YEI EconClubs is the premier high school economics club program
              for students who want to supercharge their economics journey.
              Whether you're a student hoping to start a new economics club or
              already have an existing club, YEI will provide you with all of
              the resources and support for your club to thrive.
            </span>
          }
          callToAction={
            <Button variant="contained" color="primary" size="large">
              Register Your Club
            </Button>
          }
        />
        <ClubBenefits />
      </Box>
    </div>
  );
}
