import React from "react";
import HomeHero from "../components/home/HomeHero";

import useStyles from "../styles/pages/homeStyles";
import HomeAbout from "../components/home/HomeAbout";
import HomeAsSeenOn from "../components/home/HomeAsSeenOn";
import { Box } from "@material-ui/core";

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <HomeHero classes={classes} />
      <Box py={4}>
        <HomeAbout />
        <HomeAsSeenOn />
      </Box>
    </div>
  );
}
