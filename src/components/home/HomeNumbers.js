import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import clubs from "../../data/clubs";

export default function HomeNumber({ classes }) {
  return (
    <Box className={classes.numbers} py={10}>
      <Container fixed>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item>
            <Box mb={1}>
              <Typography align="center" variant="h3">
                Our Organization in Numbers
              </Typography>
            </Box>{" "}
          </Grid>
          <Grid container align="center" justify="space-around">
            <Grid item xs={12} sm={3} md={2}>
              <Box mt={2}>
                <Typography variant="h2">
                  <b>1</b>
                </Typography>
                <Typography variant="body1">
                  ​Amazing group ​of young economists
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <Box mt={2}>
                <Typography variant="h2">
                  <b>{clubs.length}</b>
                </Typography>
                <Typography variant="body1">Current Clubs</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <Box mt={2}>
                <Typography variant="h2">
                  <b>1300</b>
                </Typography>
                <Typography variant="body1">Active Student Members</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
