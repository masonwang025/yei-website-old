import React from "react";
import PageSection from "../../components/PageSection";
import Profiles from "../../components/team/Profiles";
import { Button } from "@material-ui/core";
import TeamHero from "../../components/team/TeamHero";
import useStyles from "../../styles/pages/teamStyles";
import Page from "../../components/Page";

export default function Team() {
  const classes = useStyles();
  return (
    <Page
      pageTitle="Team"
      desc="Get to know the people who make the magic happen at the Youth Economics Initiative. Learn how you can apply to join YEI's team."
    >
      <TeamHero classes={classes} />
      <Profiles classes={classes} />
      <PageSection
        light
        title="Join the Team"
        id="join-the-team"
        pb={2}
        forceCenter
        content={
          <span>
            Passionate about what we do? Want to join an international team of
            leaders, creators, and economics enthusiasts? You can find more
            information in the document below:
          </span>
        }
        callToAction={
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1VBmep4hRFlc_m34zoB3PrCpR41UnlAKgH2r-k3FBrAM/edit"
          >
            <Button
              aria-label="apply for our team"
              align="center"
              variant="contained"
              color="primary"
            >
              Apply Now
            </Button>
          </a>
        }
      />
    </Page>
  );
}
