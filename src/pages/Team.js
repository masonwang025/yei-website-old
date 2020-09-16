import React from "react";
import PageSection from "../components/PageSection";
import Profiles from "../components/team/Profiles";
import { Button } from "@material-ui/core";
import { Helmet } from "react-helmet";
import TeamHero from "../components/team/TeamHero";
import useStyles from "../styles/pages/teamStyles";

export default function Team() {
  const classes = useStyles();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Team - Youth Economics Initiative (YEI)</title>{" "}
        <meta
          name="description"
          content="Get to know the people who make the magic happen at the Youth Economics Initiative. Learn how you can apply to join YEI's team."
        />
      </Helmet>
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
              aria-label="button"
              align="center"
              variant="contained"
              color="primary"
              size="large"
            >
              Apply Now
            </Button>
          </a>
        }
      />
    </div>
  );
}
