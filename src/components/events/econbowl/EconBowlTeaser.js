import React from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";

export default function EconBowlTeaser({ classes }) {
  return (
    <Grid container alignContent="center" className={classes.darkMode}>
      <Container fixed>
        <Box pt={6.9} pb={7.4}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            spacing={2}
          >
            <Grid item>
              <Typography align="center" variant="h3">
                2nd Annual EconBowl{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="center" variant="h5">
                November 8th, 2020
              </Typography>
            </Grid>
            <Grid item>
              <Box mb={2.69}>
                <Typography gutterBottom variant="body1" align="center">
                  The entire competition runs from{" "}
                  <b>9:00am PST to 1:15pm PST</b> with written round going from
                  9:00am PST to 11:30am PST and the QuizBowl round going from
                  11:45am PST to 1:15pm PST.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <iframe
                title="Second Annual EconBowl Teaser"
                src="https://www.youtube.com/embed/3oiKAa7IIpc"
                className={classes.econbowlRecap}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Grid>
            <Grid item>
              <Box mt={3}>
                <a
                  href="https://docs.google.com/document/d/1PsFf-NWwelRNSfVdKcW2rn-mTQvF39fIOiDQjzzx-kM/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="contained">EconBowl Rulebook</Button>
                </a>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Grid>
  );
}
