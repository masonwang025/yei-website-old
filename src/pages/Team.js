import React from "react";
import SectionHero from "../components/SectionHero";
import SectionAbout from "../components/SectionAbout";
import Profiles from "../components/team/Profiles";
import { Button, Typography, Box } from "@material-ui/core";

export default function Team() {
  return (
    <div>
      <SectionHero
        title="Meet our team"
        paragraph="Get to know the team that makes the magic happen."
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
      <Box py={3}>
        <Profiles />
        <SectionAbout
          title="Join the Team"
          id="join-the-team"
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
        >
          <Typography align="center" variant="body2">
            Note that this application process is highly competitive with a{" "}
            <i>{"<10%"} acceptance rate</i> for several positions — not all
            qualified applicants receive a position because we simply do not
            have the space! Applicants may be invited to several rounds of
            interviews before a final decision is made. We employ a holistic
            review process for each applicant and are looking for students who
            exhibit high levels of drive, initiative, enthusiasm, and
            commitment.
          </Typography>
        </SectionAbout>
      </Box>
    </div>
  );
}
