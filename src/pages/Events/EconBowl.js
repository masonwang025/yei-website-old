import React from "react";
import Page from "../../components/Page";
import { Helmet } from "react-helmet";
import useStyles from "../../styles/pages/econbowlStyles";
import EconBowlHero from "../../components/events/econbowl/EconBowlHero";
import EconBowlContent from "../../components/events/econbowl/EconBowlContent";
import EconBowlIntro from "../../components/events/econbowl/EconBowlIntro";
import EconBowlTeaser from "../../components/events/econbowl/EconBowlTeaser";

export default function EconBowl() {
  const classes = useStyles();
  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EconBowl - Youth Economics Initiative (YEI)</title>
        <meta
          name="description"
          content="Youth Economics Initiative's (YEI) Fall Competition, students compete in teams of 3 or 4 for a $1500 Prize Pool.  Competition consists of a Written Exam and Quiz Bowl Rounds. Presented with the Wen & Yung Family Foundation."
        />
        <link rel="icon" href="../../assets/favicon.ico" />
      </Helmet>
      <EconBowlHero classes={classes} />
      <EconBowlTeaser classes={classes} />
      <EconBowlIntro classes={classes} />
      <EconBowlContent classes={classes} />
    </Page>
  );
}
