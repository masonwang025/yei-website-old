import React from "react";
import Page from "../../components/Page";
import { Helmet } from "react-helmet";
import useStyles from "../../styles/pages/econbowlStyles";
import EconBowlHero from "../../components/events/econbowl/EconBowlHero";
import EconBowlRecap from "../../components/events/econbowl/EconBowlRecap";
import EconBowlPrep from "../../components/events/econbowl/EconBowlPrep";
import EconBowlTeaser from "../../components/events/econbowl/EconBowlTeaser";
import EconBowlPrizes from "../../components/events/econbowl/EconBowlPrizes";
import EconBowlSponsors from "../../components/events/econbowl/EconBowlSponsors";
import EconBowlSponsorUs from "../../components/events/econbowl/EconBowlSponsorUs";
import EconBowlSpeaker from "../../components/events/econbowl/EconBowlSpeaker";
import EconBowlAgenda from "../../components/events/econbowl/EconBowlAgenda";
import EconBowlFAQ from "../../components/events/econbowl/EconBowlFAQ";

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
      <EconBowlAgenda classes={classes} />
      <EconBowlPrep classes={classes} />
      <EconBowlSpeaker classes={classes} />
      <EconBowlPrizes classes={classes} />
      <EconBowlFAQ classes={classes} />
      <EconBowlSponsors classes={classes} />
      <EconBowlSponsorUs classes={classes} />
      <EconBowlRecap classes={classes} />
    </Page>
  );
}
