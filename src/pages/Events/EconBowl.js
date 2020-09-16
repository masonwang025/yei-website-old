import React from "react";
import Page from "../../components/Page";
import { Helmet } from "react-helmet";
import useStyles from "../../styles/pages/eventsStyles";
import EconBowlHero from "../../components/events/econbowl/EconBowlHero";
import EconBowlContent from "../../components/events/econbowl/EconBowlContent";

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
      </Helmet>
      <EconBowlHero classes={classes} />
      <EconBowlContent classes={classes} />
    </Page>
  );
}
