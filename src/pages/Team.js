import React from "react";
import Page from "../components/Page";
import SectionHero from "../components/SectionHero";
import { Button } from "@material-ui/core";

export default function Team() {
  return (
    <div className="home page">
      <Page>
        <SectionHero
          title="Meet our team"
          subtitle="Team"
          paragraph="Here is a short paragraph that has the page's key information."
          callToAction={
            <Button variant="contained" color="secondary">
              Join Team
            </Button>
          }
        />
      </Page>
    </div>
  );
}
