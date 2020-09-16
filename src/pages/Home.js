import React from "react";
import HomeHero from "../components/home/HomeHero";
import { Helmet } from "react-helmet";

import useStyles from "../styles/pages/homeStyles";
import HomeAsSeenOn from "../components/home/HomeAsSeenOn";
import HomeNumbers from "../components/home/HomeNumbers";
import OpenForm from "../components/clubs/OpenForm";
import HomeAbout from "../components/home/HomeAbout";
import HomeEconClubs from "../components/home/HomeEconClubs";
import HomeEventsAndIniatives from "../components/home/HomeEventsAndInitiatives";
import HomeSupporters from "../components/home/HomeSupporters";

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Youth Economics Initiative (YEI)</title>
      </Helmet>
      <OpenForm />
      <HomeHero classes={classes} />
      <HomeAbout classes={classes} />
      <HomeAsSeenOn classes={classes} />
      <HomeEconClubs classes={classes} />
      <HomeNumbers classes={classes} />
      <HomeEventsAndIniatives classes={classes} />
      <HomeSupporters classes={classes} />
    </div>
  );
}
