import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";

export default function EconBowlRecap({ classes }) {
  return (
    <Box pt={8.1} pb={8.42} className={classes.lightMode}>
      <Container fixed>
        <Box pb={4.69}>
          <Typography align="center" variant="h3">
            First Annual EconBowl Recap
          </Typography>
        </Box>
        <Grid container justify="center">
          <Grid item>
            <iframe
              title="EconBowl Recap"
              src="https://www.youtube.com/embed/EEYM5cice9U"
              className={classes.econbowlRecap}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
