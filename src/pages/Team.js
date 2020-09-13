import React from "react";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import Profiles from "../components/team/Profiles";
import { Button } from "@material-ui/core";
import { Helmet } from "react-helmet";

export default function Team() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Team - The Youth Economics Initiative</title>
      </Helmet>
      <PageHero
        title="Meet our team"
        paragraph="Get to know the people who make the magic happen."
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599405239/yei-website/manypixels-isometric/teamHero.png"
        callToAction={
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              document
                .querySelector("#join-the-team")
                .scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Apply Now
          </Button>
        }
      />
      <Profiles />
      <PageSection
        light
        title="Join the Team"
        id="join-the-team"
        pb={1}
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
