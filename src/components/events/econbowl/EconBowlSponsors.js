import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { Image } from "cloudinary-react";

export default function EconBowlSponsors({ classes }) {
  const mdDown = window.innerWidth <= 960;
  return (
    <Box pt={8} pb={mdDown ? 6 : 3.25} className={classes.lightMode}>
      <Container fixed>
        <Grid container direction="column">
          <Grid item>
            <Typography gutterBottom align="center" variant="h3">
              In Collaboration With
            </Typography>
          </Grid>
          <Grid item>
            <Grid container justify="center" alignContent="center" spacing={3}>
              <Grid item xs={11} sm={8} md={5}>
                <a
                  href="https://wenyungff.weebly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="YEI EconBowl"
                    className={classes.econbowlSupporter}
                    cloudName="masonwang"
                    publicId="https://res.cloudinary.com/masonwang/image/upload/v1600059435/yei-website/supporters/wen.png"
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box mt={mdDown ? 1 : 6} mb={2}>
              <Typography align="center" variant="h5">
                Prizes Sponsored By
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Grid container justify="center" alignContent="center">
              {["magoosh", "clickup"].map((prizeSponsor) => {
                return (
                  <Grid key={prizeSponsor} item xs={7} sm={5} md={3}>
                    <Box px={4.2}>
                      <a
                        href={`https://${prizeSponsor}.com/`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          alt={`${prizeSponsor}`}
                          className={classes.econbowlSupporter}
                          cloudName="masonwang"
                          publicId={`https://res.cloudinary.com/masonwang/image/upload/v1600059435/yei-website/supporters/${prizeSponsor}.png`}
                        />
                      </a>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
