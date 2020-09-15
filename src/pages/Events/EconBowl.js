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
        <title>EconBowl - The Youth Economics Initiative</title>
      </Helmet>
      <EconBowlHero classes={classes} />
      <EconBowlContent classes={classes} />
    </Page>
  );
}
