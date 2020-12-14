import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "../../styles/pages/programStyles";
import FLIPHero from "../../components/programs/flip/FLIPHero";
import FLIPIntro from "../../components/programs/flip/FLIPIntro";
import FLIPAbout from "../../components/programs/flip/FLIPAbout";
import Page from "../../components/Page";

export default function FLIP() {
  const classes = useStyles();
  return (
    <Page
      pageTitle="FLIP"
      desc="The Youth Economics Initiative (YEI) offers a number of exclusive supplemental programs for our EconClubs and members created to prepare aspiring leaders through community service and real work experience. Learn more about YEI programs such as FLIP and EARN."
    >
      <FLIPHero classes={classes} />
      <Box className={classes.flipBg}>
        <FLIPIntro classes={classes} />
        <FLIPAbout classes={classes} />
      </Box>
    </Page>
  );
}
