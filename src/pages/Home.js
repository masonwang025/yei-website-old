import React from "react";
import HomeHero from "../components/home/HomeHero";

import useStyles from "../styles/pages/homeStyles";

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <HomeHero classes={classes} />
    </div>
  );
}
