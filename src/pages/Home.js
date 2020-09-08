import React from "react";
import HomeHero from "../components/home/HomeHero";

import useStyles from "../styles/pages/homeStyles";
import HomeAsSeenOn from "../components/home/HomeAsSeenOn";
import HomeNumbers from "../components/home/HomeNumbers";
import PageSection from "../components/PageSection";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import OpenForm from "../components/clubs/OpenForm";

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <OpenForm />
      <HomeHero classes={classes} />
      {/* About */}
      <PageSection
        pt={1}
        pb={1}
        id="home-about"
        homepage={true}
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
          <Link to="/events">
            <Button variant="contained" color="secondary" size="large">
              Our Events
            </Button>
          </Link>
        }
      ></PageSection>
      {/* Numbers */}
      <HomeNumbers classes={classes} />
      {/* As seen on */}
      <HomeAsSeenOn />
    </div>
  );
}
