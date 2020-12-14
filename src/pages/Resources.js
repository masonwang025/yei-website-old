import React from "react";
import useStyles from "../styles/pages/resourcesStyles";
import Page from "../components/Page";
import ResourcesHero from "../components/resources/ResourcesHero";

export default function Resources() {
  const classes = useStyles();
  return (
    <Page
      pageTitle="Resources"
      desc="Youth Economics Initiative (YEI) provides numerous high quality resources for both AP and IB curriculums."
    >
      <ResourcesHero classes={classes} />
    </Page>
  );
}
