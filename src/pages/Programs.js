import React from "react";
import PageSection from "../components/PageSection";
import PageHero from "../components/PageHero";
import { Button, Box, Typography } from "@material-ui/core";

export default function Programs() {
  return (
    <div>
      <PageHero
        title="YEI Programs"
        paragraph="YEI's exclusive programs for EconClubs. Created to prepare aspiring leaders through community service and real work experience."
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599405238/yei-website/manypixels-isometric/programsHero.png"
        callToAction={
          <span>
            <ApplyFor program="FLIP" />
            <Box display="inline-block" component="span" mt={0.69} mx={0.69}>
              <ApplyFor program="EARN" />
            </Box>
          </span>
        }
      />
      <PageSection
        pb={-5}
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
                href="https://form.typeform.com/to/WB3Um6?fbclid=IwAR2Vr0ZYeMFAr9OTixN-BSyjj4FHR5ai-dVOLNTLNDvbuTwcLaUXkMULmgE"
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
      <PageSection
        pt={-5}
        pb={-5}
        light={true}
        subsection={true}
        title="Application Criteria"
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599588332/yei-website/manypixels-isometric/problem_solving.png"
      >
        <Typography variant="body1">
          EconClub applications for FLIP are evaluated on the following
          criteria:
        </Typography>
        <ol
          style={{
            marginTop: 0,
            fontWeight: "bolder",
            fontSize: "1.269em",
          }}
        >
          {[
            "History of club excellence",
            "Club involvement with YEI activities",
            "Experience with service and tutoring",
            "Club volunteer capacity",
          ].map((criteria) => (
            <li>
              <Typography variant="body1" align="left">
                {criteria}
              </Typography>
            </li>
          ))}
        </ol>
        <ApplyFor
          program="FLIP"
          link="https://docs.google.com/forms/d/1bjyw2csfGtJRDt4UFgCU1eyrCIV_nKECSY4LNDfvSH4/viewform?edit_requested=true"
        />
      </PageSection>

      <PageSection
        pt={-5}
        light={true}
        subsection={true}
        title="FLIP Curriculum"
        content="While EconClubs must apply to be accepted to our FLIP program, every YEI EconClub is provided with the 16-week FLIP curriculum, which can be used to teach club members about financial literacy. The FLIP curriculum has approximately 30 hours worth of content and covers topics such as budgeting, loans, credit and debit cards, 401(k), retirement, interest, savings, investing, and insurance."
      ></PageSection>

      <PageSection title="Economics Achievement and Research Network (EARN)">
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
            opportunities.{" "}
            <b>
              Note that being accepted to EARN does not guarantee an internship
              position. All EARN applicants must be affiliated with a YEI
              EconClub. If you do not have a YEI EconClub at your school, you
              may apply to start one{" "}
              <a
                className="underline bold"
                target="_blank"
                rel="noopener noreferrer"
                href="https://form.typeform.com/to/WB3Um6?fbclid=IwAR2Vr0ZYeMFAr9OTixN-BSyjj4FHR5ai-dVOLNTLNDvbuTwcLaUXkMULmgE"
              >
                here
              </a>
              .
            </b>
          </Typography>
        </div>
      </PageSection>
    </div>
  );
}

function ApplyFor({ program }) {
  let link;
  if (program === "FLIP")
    link =
      "https://docs.google.com/forms/d/1bjyw2csfGtJRDt4UFgCU1eyrCIV_nKECSY4LNDfvSH4/viewform?edit_requested=true";
  else if (program === "EARN")
    link =
      "https://docs.google.com/forms/d/e/1FAIpQLScJ2wmr5GuM_TSYCV-T2GiRQIXJ3UF5HvoeinJkikOZIe3YKA/viewform";

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button variant="contained" color="secondary">
        Apply for {program}
      </Button>
    </a>
  );
}
