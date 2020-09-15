import React from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";

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
            <Button
              variant="contained"
              onClick={() => {
                document
                  .querySelector("#join-the-team")
                  .scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              Apply Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
