import React from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function TeamHero({ classes }) {
  const mdDown = window.innerWidth <= 960;
  return (
    <Box className={classes.hero} py={mdDown ? 8 : 13}>
      <Container fixed>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          wrap="nowrap"
          spacing={3}
        >
          <Grid item>
            <Typography className={classes.title} align="center" variant="h2">
              <b>Meet our team</b>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align="center"
              variant="body1"
              className={classes.subtitle}
            >
              Get to know the people who make the magic happen.
            </Typography>
          </Grid>
          <Grid item>
            <AnchorLink href="#join-the-team">
              <Button aria-label="apply now" variant="contained">
                Apply Now
              </Button>
            </AnchorLink>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
