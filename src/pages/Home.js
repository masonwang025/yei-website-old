import React from "react";
import HomeHero from "../components/home/HomeHero";

import useStyles from "../styles/pages/homeStyles";
import HomeAsSeenOn from "../components/home/HomeAsSeenOn";
import HomeNumbers from "../components/home/HomeNumbers";
import PageSection from "../components/PageSection";
import { Link } from "react-router-dom";
import { Button, Box } from "@material-ui/core";
import OpenForm from "../components/clubs/OpenForm";
import HomeCarousel from "../components/home/HomeCarousel";

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <OpenForm />
      <HomeHero classes={classes} />
      {/* About */}
      <PageSection
        light
        id="home-about"
        homepage
        title="What is the Youth Economics Intiative?"
        content={
          <span>
            <b>We're not just a collective of Economics Clubs.</b> By promoting
            cross-collaboration and friendly competition, we open up the ever
            growing field of economics to students in a fast-paced world. We
            provide pathways toward careers in economics, business, and finance
            and equip tomorrow's leaders with the tools necessary to make
            change.
          </span>
        }
        callToAction={
          <Box mt={0.5}>
            <Link to="/events">
              <Button variant="contained" color="secondary" size="large">
                Our Events
              </Button>
            </Link>
          </Box>
        }
      />
      {/* EconClubs */}
      <PageSection
        pt={-2}
        homepage
        title="EconClubs"
        content={
          <span>
            EconClubs is YEI’s signature program and is designed to help
            students launch economics clubs at their own schools. Every YEI
            EconClub is provided with our custom-designed AP/IB curriculum,
            mentorship from our global leadership team, exclusive access to
            certain YEI events, YEI brand recognition, and support from an
            international community of aspiring economists. Existing economics
            clubs are also welcome to join the EconClubs program.
          </span>
        }
        callToAction={
          <Box mt={0.5}>
            <Link to="/clubs">
              <Button variant="contained" color="secondary" size="large">
                Learn More
              </Button>
            </Link>
          </Box>
        }
      />
      {/* Numbers */}
      <HomeNumbers classes={classes} />
      {/* Slider */}
      <HomeCarousel classes={classes} />
      {/* As seen on */}
      <HomeAsSeenOn />
    </div>
  );
}
