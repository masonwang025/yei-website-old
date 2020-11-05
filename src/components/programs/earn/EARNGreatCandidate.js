import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";

const reasons = [
  {
    title: "Skillset",
    content:
      "Are you a data analysis guru? A Python ninja? Have you demonstrated a passion for economics? We’re looking for students with the skills necessary to take on challenging research positions and internships.",
  },
  {
    title: "Drive",
    content:
      "Do you push yourself out of your comfort zone? Are you willing to work hard and take on challenges?",
  },
  {
    title: "Collaboration",
    content:
      "Research assistants and interns often work in group environments. Do you work well with others? Are you a team player?",
  },
];

export default function EARNGreatCandidate({ classes }) {
  return (
    <Box pb={window.innerWidth < 960 ? 9 : 13}>
      <Container fixed>
        <Box mb={4.2}>
          <Typography variant="h3">What Makes a Great Candidate?</Typography>
        </Box>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Grid container direction="row" spacing={4}>
              {reasons.map((reason, index) => (
                <Grid key={reason.title} item xs={12} md={4}>
                  <Typography
                    gutterBottom
                    className={classes.candidateHeader}
                    variant="h6"
                  >
                    <span className={classes.candidateNumber}>{index + 1}</span>{" "}
                    {reason.title}
                  </Typography>
                  <Typography variant="body1">{reason.content}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
