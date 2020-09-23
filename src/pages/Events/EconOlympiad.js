import React from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import { Helmet } from "react-helmet";
import useStyles from "../../styles/pages/eventsStyles";
import { Link } from "react-router-dom";

export default function EconOlympiad() {
  const classes = useStyles();
  return (
    <Box className={classes.olympiadHero}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Events - Youth Economics Initiative (YEI)</title>
        <meta
          name="description"
          content="Youth Economics Initiative's (YEI) Flagship Competition takes place every Spring.  Students compete in small teams to create comprehensive solutions and answer open ended questions. Exclusively available to YEI Members."
        />
        <link rel="icon" href="../../assets/favicon.ico" />
      </Helmet>
      <Container fixed>
        <Grid
          style={{
            minHeight: `100vh`,
            marginTop: `-${window.innerWidth > 600 ? 64 : 56}px`,
            padding: window.innerWidth > 960 ? "6.42em 0 4.2em 0" : "4.2em 0",
          }}
          className={classes.heroGrid}
          container
          justify="center"
          alignContent="center"
          direction="column"
        >
          <Grid item>
            <Box py={1}>
              <Typography
                align="center"
                variant="h1"
                className={classes.olympiadTitle}
              >
                <b>EconOlympiad</b>
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box py={1}>
              <Typography
                align="center"
                variant="h4"
                className={classes.olympiadSubtitle}
              >
                YEI’s Flagship Competition, Spring 2021
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box py={1}>
              <Typography
                align="center"
                variant="h4"
                className={classes.olympiadSubtitle}
              >
                Information coming Winter 2020
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box py={2} display="flex" justifyContent="center" mx="auto">
              <Link to="/events">
                <Button
                  aria-label="other events"
                  variant="contained"
                  align="center"
                  color="secondary"
                >
                  Other Events
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
