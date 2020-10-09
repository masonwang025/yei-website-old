import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import CountUpOnce from "../../CountUpOnce";

const numberContent = [
  {
    number: 750,
    caption: "Champion",
  },
  {
    number: 400,
    caption: "Second Place",
  },
  {
    number: 200,
    caption: "Third Place",
  },
  {
    number: 150,
    caption: "Fourth",
  },
];

export default function EconBowlPrizes({ classes }) {
  const mdDown = window.innerWidth <= 960;
  return (
    <Box pt={7} pb={mdDown ? 7.25 : 6.25}>
      <Container fixed>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={4}
        >
          <Grid item>
            <Box pb={0.13}>
              <Typography gutterBottom align="center" variant="h3">
                EconBowl Prizes
              </Typography>
              <Typography align="center" variant="body1">
                Each person will have the chance to be entered into a raffle for
                Google Home Minis just for competing!
              </Typography>
            </Box>
          </Grid>
          <Grid container align="center" justify="space-around">
            {numberContent.map((num) => (
              <Grid key={num.number} item xs={12} sm={6} md={2}>
                <Box mt={3}>
                  <Typography variant="h2" className={classes.darkGreen}>
                    <b>
                      $<CountUpOnce number={num.number} duration={1.5} />
                    </b>
                  </Typography>
                  <Typography variant="body1">{num.caption}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid item>
            <Box pt={3}>
              <Typography align="center" variant="h6">
                Plus non-cash prizes!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
