import React from "react";
import HomeHero from "../components/home/HomeHero";

import useStyles from "../styles/pages/homeStyles";
import HomeAsSeenOn from "../components/home/HomeAsSeenOn";
import HomeNumbers from "../components/home/HomeNumbers";
import OpenForm from "../components/clubs/OpenForm";
import HomeCarousel from "../components/home/HomeCarousel";
import HomeAbout from "../components/home/HomeAbout";
import HomeEconClubs from "../components/home/HomeEconClubs";

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <OpenForm />
      <HomeHero classes={classes} />
      <HomeAbout classes={classes} />
      <HomeAsSeenOn classes={classes} />
      <HomeEconClubs classes={classes} />
      <HomeNumbers classes={classes} />
      <HomeCarousel classes={classes} />
    </div>
  );
}
