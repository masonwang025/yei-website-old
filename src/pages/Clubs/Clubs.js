import React from "react";
import PageHero from "../../components/PageHero";
import { Button, Box } from "@material-ui/core";
import PageSection from "../../components/PageSection";
import ClubBenefits from "../../components/clubs/ClubBenefits";
import { Link } from "react-router-dom";
import OpenForm from "../../components/clubs/OpenForm";
import { Helmet } from "react-helmet";

export default function Clubs() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Clubs - Youth Economics Initiative (YEI)</title>
        <meta
          name="description"
          content="EconClubs is Youth Economics Initiative's (YEI) premier high school economics club program for students who want to supercharge their economics journey."
        />
      </Helmet>
      <PageHero
        title="YEI EconClubs"
        paragraph="Take your economics club to the next level."
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599500302/yei-website/manypixels-isometric/clubsHero.png"
        callToAction={
          <Link to="/clubs/current-clubs">
            <Button aria-label="button" variant="contained" color="secondary">
              View Current Clubs
            </Button>
          </Link>
        }
      />
      <Box pb={3}>
        <PageSection
          light
          title="What are YEI EconClubs?"
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
            <OpenForm>
              <Button
                aria-label="button"
                variant="contained"
                color="primary"
                size="large"
              >
                Register Your Club
              </Button>
            </OpenForm>
          }
        />
        <ClubBenefits />
      </Box>
    </div>
  );
}
