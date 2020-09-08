import React from "react";
import PageSection from "../components/PageSection";
import PageHero from "../components/PageHero";
import { Button, Box, Typography } from "@material-ui/core";

export default function Programs() {
  return (
    <div>
      <PageHero
        title="YEI Programs"
        paragraph="YEI offers a number of exclusive supplemental programs for our EconClubs and members created to prepare aspiring leaders through community service and real work experience."
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599405238/yei-website/manypixels-isometric/programsHero.png"
        callToAction={
          <span>
            <a
              href="https://docs.google.com/forms/d/1bjyw2csfGtJRDt4UFgCU1eyrCIV_nKECSY4LNDfvSH4/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained" color="secondary">
                Apply for FLIP
              </Button>
            </a>
            <Box display="inline-block" component="span" mt={0.69} mx={0.69}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLScJ2wmr5GuM_TSYCV-T2GiRQIXJ3UF5HvoeinJkikOZIe3YKA/viewform"
              >
                <Button variant="contained" color="secondary">
                  Apply for EARN
                </Button>
              </a>
            </Box>
          </span>
        }
      />
      <PageSection
        title="Financial Literacy Introduction Program (FLIP)"
        content={
          <>
            YEI EconClubs have the unique opportunity to apply to offer a
            Financial Literacy Introduction Program (FLIP) within their
            community. EconClubs accepted to FLIP will be paired with a partner
            nonprofit organization to deliver financial literacy workshops to
            underserved youths. Additionally, YEI will provide FLIP-affiliated
            EconClubs with year-round FLIP training sessions, our extensive
            16-week FLIP curriculum including activities and post-session
            resources, and PVSA-certified volunteer hours for any members who
            volunteer with FLIP.{" "}
            <b>
              In order to ensure we are delivering high-quality workshops,
              participation in FLIP is limited to YEI EconClubs. If you do not
              have a YEI EconClub at your school, you may apply to start one{" "}
              <a
                href="https://docs.google.com/forms/d/1bjyw2csfGtJRDt4UFgCU1eyrCIV_nKECSY4LNDfvSH4/viewform?edit_requested=true"
                target="_blank"
                className="underline bold"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </b>
          </>
        }
        light={true}
      ></PageSection>
      <PageSection title="Economics Achievement and Research Network (EARN)">
        {" "}
        <div>
          <Typography variant="body1" gutterBottom>
            EARN is a highly selective program for members of YEI affiliated
            EconClubs who are truly passionate about economics and want to gain
            real-world experience. EARN leverages YEI’s connections to match
            motivated students with economics internships at top universities
            and companies.
          </Typography>
          <Typography variant="body1">
            After passing a rigorous application process conducted by the YEI
            EARN team, students will be added to a prospective intern database
            that is available to our partner organizations. From there, EARN
            students may be contacted by these organizations with internship
            opportunities. Note that being accepted to EARN does not guarantee
            an internship position. All EARN applicants must be affiliated with
            a YEI EconClub. If you do not have a YEI EconClub at your school,
            you may apply to start one{" "}
            <a
              className="underline bold"
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLScJ2wmr5GuM_TSYCV-T2GiRQIXJ3UF5HvoeinJkikOZIe3YKA/viewform"
            >
              <b>here</b>
            </a>
            .
          </Typography>
        </div>
      </PageSection>
    </div>
  );
}
