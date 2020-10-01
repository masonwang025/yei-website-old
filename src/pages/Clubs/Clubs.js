import React from "react";
import PageHero from "../../components/PageHero";
import { Button, Box, Typography } from "@material-ui/core";
import PageSection from "../../components/PageSection";
import ClubBenefits from "../../components/clubs/ClubBenefits";
import { Link } from "react-router-dom";
import OpenForm from "../../components/clubs/OpenForm";
import { Helmet } from "react-helmet";
import useStyles from "../../styles/pages/clubStyles";

export default function Clubs() {
  const classes = useStyles();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Clubs - Youth Economics Initiative (YEI)</title>
        <meta
          name="description"
          content="EconClubs is Youth Economics Initiative's (YEI) premier high school economics club program for students who want to supercharge their economics journey."
        />
        <link rel="icon" href="../../assets/favicon.ico" />
      </Helmet>
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
        pt={4.2}
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
          <OpenForm>
            <Button
              aria-label="register your club"
              variant="contained"
              color="primary"
            >
              Register Your Club
            </Button>
          </OpenForm>
        }
      />
      <ClubBenefits />
      <Box mt={5} className={classes.darkerBg}>
        <PageSection
          dark
          pb={5}
          title="Start Your Economics Club in 3 Steps"
          forceCenter
        >
          {[
            {
              title: "Register your Club!",
              content:
                "Let’s get acquainted! Fill out the registration form below!",
            },
            {
              title: "Onboarding Call!",
              content: "Our Expansion Team will call you over zoom!",
            },
            {
              title: "Launch your Club!",
              content: "Receive your Launch Package and get started!",
            },
          ].map((step, index) => (
            <Box key={index} pb={4.2}>
              <Typography gutterBottom variant="h4">
                <span className={classes.appNumbers}>{index + 1}</span>{" "}
                {step.title}
              </Typography>
              <Typography variant="body1">{step.content}</Typography>
            </Box>
          ))}
          <OpenForm>
            <Button
              aria-label="register your club"
              variant="contained"
              color="primary"
            >
              Register Your Club
            </Button>
          </OpenForm>
        </PageSection>
      </Box>
    </div>
  );
}
