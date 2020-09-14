import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "../styles/pages/programStyles";
import { Helmet } from "react-helmet";
import ProgramsHero from "../components/programs/ProgramsHero";
import EARNHero from "../components/programs/EARNHero";
import FLIPHero from "../components/programs/FLIPHero";
import FLIPAbout from "../components/programs/FLIPAbout";
import EARNBenefits from "../components/programs/EARNBenefits";
import EARNGreatCandidate from "../components/programs/EARNGreatCandidate";

export default function Programs() {
  const classes = useStyles();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Programs - The Youth Economics Initiative</title>
      </Helmet>
      <ProgramsHero classes={classes} />
      <Box className={classes.flipBg}>
        <FLIPHero classes={classes} />
        <FLIPAbout classes={classes} />
      </Box>
      <Box className={classes.earnBg}>
        <EARNHero classes={classes} />
        <EARNBenefits />
        <EARNGreatCandidate />
      </Box>
    </div>
  );
}
