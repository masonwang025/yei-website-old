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
        <title>Programs - Youth Economics Initiative (YEI)</title>
        <meta
          name="description"
          content="The Youth Economics Initiative (YEI) offers a number of exclusive supplemental programs for our EconClubs and members created to prepare aspiring leaders through community service and real work experience. Learn more about YEI programs such as FLIP and EARN."
        />
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
