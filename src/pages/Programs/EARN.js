import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "../../styles/pages/programStyles";
import { Helmet } from "react-helmet";
import EarnHero from "../../components/programs/earn/EARNHero";
import EarnIntro from "../../components/programs/earn/EARNIntro";
import EARNBenefits from "../../components/programs/earn/EARNBenefits";
import EARNGreatCandidate from "../../components/programs/earn/EARNGreatCandidate";

export default function EARN() {
  const classes = useStyles();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EARN - Youth Economics Initiative (YEI)</title>
        <link rel="icon" href="../../assets/favicon.ico" />
        <meta
          name="description"
          content="The Youth Economics Initiative (YEI) offers a number of exclusive supplemental programs for our EconClubs and members created to prepare aspiring leaders through community service and real work experience. Learn more about YEI programs such as FLIP and EARN."
        />
      </Helmet>
      <EarnHero classes={classes} />
      <Box className={classes.earnBg}>
        <EarnIntro classes={classes} />
        <EARNBenefits />
        <EARNGreatCandidate classes={classes} />
      </Box>
    </div>
  );
}
