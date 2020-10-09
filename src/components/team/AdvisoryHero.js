import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import useStyles from "../../styles/pages/teamStyles";

export default function AdvisoryHero() {
  const classes = useStyles();
  const mdDown = window.innerWidth <= 960;
  return (
    <Box className={classes.heroAdvisory} py={mdDown ? 8 : 13}>
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
              <b>Advisory Board</b>
            </Typography>
          </Grid>
          {/* <Grid item>
            <Typography
              align="center"
              variant="body1"
              className={classes.subtitle}
            >
              Get to know the people who make the magic happen.
            </Typography>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
}
