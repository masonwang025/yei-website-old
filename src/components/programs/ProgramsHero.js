import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";

export default function ProgramsHero({ classes }) {
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
              <b>YEI Programs</b>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align="center"
              variant="body1"
              className={classes.subtitle}
            >
              YEI's exclusive supplemental programs for our EconClubs and
              members created to prepare aspiring leaders through community
              service and real work experience.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
