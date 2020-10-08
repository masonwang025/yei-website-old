import React from "react";
import Page from "../../components/Page";
import { Helmet } from "react-helmet";
import useStyles from "../../styles/pages/econbowlStyles";
import EconBowlHero from "../../components/events/econbowl/EconBowlHero";
import EconBowlContent from "../../components/events/econbowl/EconBowlContent";
import EconBowlIntro from "../../components/events/econbowl/EconBowlIntro";

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
      <EconBowlIntro classes={classes} />
      <EconBowlContent classes={classes} />
      {/* <Box pt={6.9}>
          <Grid container justify="center">
            <Grid item>
              <iframe
                title="Second Annual EconBowl Teaser"
                src="https://www.youtube.com/embed/3oiKAa7IIpc"
                className={classes.econbowlRecap}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Grid>
          </Grid>
        </Box> */}
    </Page>
  );
}
