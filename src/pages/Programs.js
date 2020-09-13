import React from "react";
import PageSection from "../components/PageSection";
import PageHero from "../components/PageHero";
import { Button, Box, Typography, Grid } from "@material-ui/core";
import OpenForm from "../components/clubs/OpenForm";
import { Helmet } from "react-helmet";

export default function Programs() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Programs - The Youth Economics Initiative</title>
      </Helmet>
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
              <OpenForm inline>
                <span className="underline bold">here</span>
              </OpenForm>
              .
            </b>
          </>
        }
        light
      ></PageSection>
      <PageSection
        pt={-5}
        pb={-5}
        light
        subsection
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
            <li key={criteria}>
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
        light
        subsection
        title="FLIP Curriculum"
        content="While EconClubs must apply to be accepted to our FLIP program, every YEI EconClub is provided with the 16-week FLIP curriculum, which can be used to teach club members about financial literacy. The FLIP curriculum has approximately 30 hours worth of content and covers topics such as budgeting, loans, credit and debit cards, 401(k), retirement, interest, savings, investing, and insurance."
      ></PageSection>

      <PageSection
        pb={-5}
        title="Economics Achievement and Research Network (EARN)"
      >
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
              <OpenForm inline>
                <span className="underline bold">here</span>
              </OpenForm>
              .
            </b>
          </Typography>
          <Box mt={1.69} mb={0.42}>
            <ApplyFor program="EARN" />
          </Box>
        </div>
      </PageSection>
      <PageSection subsection pt={-5} pb={-5} title="EARN benefits">
        <Grid container direction="row" spacing={3}>
          {[
            {
              title: "🔧 Efficient",
              content:
                "Think of EARN like a common application for economics internships. Instead of cold emailing hundreds of professors and companies, EARN applicants apply to dozens of internships at once through a single application.",
            },
            {
              title: "👨‍💼 Real-world experience",
              content:
                "EARN is one of the only programs that offer high schoolers the opportunity to gain real-world work experience, whether that’s assisting a professor with research at a world-class university or working as an intern at a top company.",
            },
            {
              title: "🌍 Community",
              content:
                "By joining the EARN program, you’ll become part of a curated community of highly motivated economics students. EARN members will have the opportunity to expand their network by connecting with fellow economics enthusiasts, researchers, and interns.",
            },
          ].map((reason) => (
            <Grid key={reason.title} item xs={12} md={4}>
              <Typography variant="h6">{reason.title}</Typography>
              <Typography variant="body1">{reason.content}</Typography>
            </Grid>
          ))}
        </Grid>
      </PageSection>
      <PageSection
        pt={-5}
        subsection
        title="What makes a great candidate?"
        content="Researching or interning with EARN is demanding work, and we want to make sure that all program members are up for the challenge. We conduct a holistic review process for all applicants, so no one factor will make or break your application. However, here are some things we look for in great candidates."
      >
        <Grid container direction="row" spacing={3}>
          {[
            {
              title: "🛠 Skillset",
              content:
                "Are you a data analysis guru? A Python ninja? Have you demonstrated a passion for economics? We’re looking for students with the skills necessary to take on challenging research positions and internships.",
            },
            {
              title: "🚀 Drive",
              content:
                "Do you push yourself out of your comfort zone? Are you willing to work hard and take on challenges?",
            },
            {
              title: "🙋‍♂️ Collaborative",
              content:
                "Research assistants and interns often work in group environments. Do you work well with others? Are you a team player?",
            },
          ].map((reason) => (
            <Grid key={reason.title} item xs={12} md={4}>
              <Typography variant="h6">{reason.title}</Typography>
              <Typography variant="body1">{reason.content}</Typography>
            </Grid>
          ))}
        </Grid>
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
