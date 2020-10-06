import { Box, Button, Grid, Container, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default function HomeEconClubs({ classes }) {
  return (
    <Box className={classes.about} py={8}>
      <Container fixed>
        <Grid container alignItems="center" spacing={4}>
          <Grid item>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Typography className={classes.aboutHeading} variant="h2">
                  YEI EconClubs
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  EconClubs is YEI’s signature program and is designed to help
                  students launch economics clubs at their own schools.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Every YEI EconClub is provided with our custom-designed AP/IB
                  curriculum, mentorship from our global leadership team,
                  exclusive access to certain YEI events, YEI brand recognition,
                  and support from an international community of aspiring
                  economists.{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Existing economics clubs are also welcome to join the
                  EconClubs program.
                </Typography>
              </Grid>
              <Grid item>
                <Link to="/clubs">
                  <Button
                    aria-label="learn more about clubs"
                    variant="contained"
                    color="primary"
                  >
                    Learn More
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
