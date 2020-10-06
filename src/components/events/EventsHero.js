import React from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";

import AnchorLink from "react-anchor-link-smooth-scroll";

export default function EventsHero({ classes }) {
  const mdDown = window.innerWidth <= 960;
  return (
    <Box className={classes.eventsHero}>
      <Container fixed style={{ height: "100%" }}>
        <Grid
          container
          direction="column"
          justify="center"
          wrap="nowrap"
          spacing={mdDown ? 2 : 3}
          style={{
            padding: "3em 0",
            minHeight: `calc(100vh - ${window.innerWidth > 600 ? 64 : 56}px)`,
          }}
        >
          <Grid item>
            <Typography
              className={classes.eventsTitle}
              align="left"
              variant="h2"
            >
              <b>YEI Events</b>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              gutterBottom
              align="left"
              variant="body1"
              className={classes.eventsSubtitle}
            >
              Whether you’re an experienced high school economist, or just
              dipping your toes into the world of economics, YEI offers a broad
              range of events, from competitions, to EconTalks, to socials and
              conferences!
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align="left"
              variant="body1"
              className={classes.eventsSubtitle}
            >
              Through YEI Events, students gain access to a expansive network of
              driven and motivated students and professionals, while finding
              their unique path toward applying their knowledge. Win cash
              prizes, network with professors and professionals, learn material,
              find your pathway to a career in economics, finance or business.
            </Typography>
          </Grid>
          <Grid item>
            <AnchorLink href="#events">
              <Button aria-label="events sections" variant="contained">
                Learn More
              </Button>
            </AnchorLink>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
