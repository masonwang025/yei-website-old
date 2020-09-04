import React from "react";
import HomeHero from "../components/home/HomeHero";

import useStyles from "../styles/pages/homeStyles";
import HomeAbout from "../components/home/HomeAbout";
import HomeAsSeenOn from "../components/home/HomeAsSeenOn";
import HomeNumbers from "../components/home/HomeNumbers";
import { Box } from "@material-ui/core";

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <HomeHero classes={classes} />
      <Box py={3}>
        <HomeAbout />
        <HomeNumbers classes={classes} />
        <HomeAsSeenOn />
      </Box>
    </div>
  );
}
