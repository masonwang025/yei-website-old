import React from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import { Helmet } from "react-helmet";
import useStyles from "../../styles/pages/eventsStyles";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

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
              <Grid
                container
                justify="center"
                alignContent="center"
                direction="column"
                spacing={4}
              >
                <Grid item xs={8} md={7} lg={6}>
                  <Image
                    style={{ width: "100%" }}
                    cloudName="masonwang"
                    alt="YEI EconOlympiad"
                    publicId="https://res.cloudinary.com/masonwang/image/upload/v1602017056/yei-website/logos/econolympiad.png"
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item>
            <Typography align="center" variant="h5">
              YEI’s Flagship Competition, Spring 2021
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" variant="h6">
              Information coming Winter 2020
            </Typography>
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
