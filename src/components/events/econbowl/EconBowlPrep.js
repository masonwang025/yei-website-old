import React from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";

export default function EconBowlPrep({ classes }) {
  const mdDown = window.innerWidth <= 960;
  return (
    <Box pt={8} pb={9}>
      <Container fixed>
        <Grid
          container
          direction={mdDown ? "column" : "row"}
          justify="center"
          alignItems="center"
          wrap="nowrap"
          spacing={4}
        >
          <Grid item>
            <Typography variant="h3" gutterBottom>
              Preparation Resources
            </Typography>
            <Typography variant="body1" gutterBottom>
              Take our{" "}
              <a
                href="http://tinyurl.com/practiceset1"
                style={{ color: "black" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>practice tests</u>
              </a>{" "}
              to prepare for the competition. We will be releasing additional
              practice tests for both the written and QuizBowl rounds closer to
              competition date.
            </Typography>
            <Typography variant="body1" gutterBottom>
              For more resources, we’d suggest the YEI curriculum, other AP prep
              material, or{" "}
              <a
                href="https://www.councilforeconed.org/national-economics-challenge/sample-tests-2/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                <u>National Economics Challenge sample tests</u>
              </a>
              .
            </Typography>
            <Box pt={2}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <a
                    href="http://tinyurl.com/practiceset1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="contained" color="secondary">
                      YEI Practice Tests
                    </Button>
                  </a>
                </Grid>
                <Grid item>
                  <a
                    href="https://www.councilforeconed.org/national-economics-challenge/sample-tests-2/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outlined" color="secondary">
                      NEC Sample Tests
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
