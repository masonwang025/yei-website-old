import React from "react";
import PageHero from "../../components/PageHero";
import { Button } from "@material-ui/core";
import PageSection from "../../components/PageSection";
import ClubBenefits from "../../components/clubs/ClubBenefits";
import { Link } from "react-router-dom";
import OpenForm from "../../components/clubs/OpenForm";
import useStyles from "../../styles/pages/clubStyles";
import ClubProcess from "../../components/clubs/ClubProcess";
import Page from "../../components/Page";

export default function Clubs() {
  const classes = useStyles();
  return (
    <Page
      pageTitle="Clubs"
      desc="EconClubs is Youth Economics Initiative's (YEI) premier high school economics club program for students who want to supercharge their economics journey."
    >
      <PageHero
        title="YEI EconClubs"
        paragraph="Take your economics club to the next level."
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599500302/yei-website/manypixels-isometric/clubsHero.png"
        callToAction={
          <Link to="/clubs/current-clubs">
            <Button
              aria-label="current clubs"
              variant="contained"
              color="secondary"
            >
              View Current Clubs
            </Button>
          </Link>
        }
      />
      <PageSection
        pt={2}
        light
        title="What are YEI EconClubs?"
        content={
          <span>
            YEI EconClubs is the premier high school economics club program for
            students who want to supercharge their economics journey. Whether
            you're a student hoping to start a new economics club or already
            have an existing club, YEI will provide you with all of the
            resources and support for your club to thrive.
          </span>
        }
        callToAction={
          <Button
            aria-label="register your club"
            variant="contained"
            color="primary"
          >
            <OpenForm>Register Your Club</OpenForm>
          </Button>
        }
      />
      <ClubBenefits />
      <ClubProcess classes={classes} />
    </Page>
  );
}
