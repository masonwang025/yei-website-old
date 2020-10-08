import React from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import { Image } from "cloudinary-react";

export default function EconBowlHero({ classes }) {
  const mdDown = window.innerWidth <= 960;
  return (
    <Grid
      container
      alignContent="center"
      className={`${classes.heroBlack} ${classes.mobileFull}`}
    >
      <Container fixed>
        <Box pt={mdDown ? 5 : 6} pb={mdDown ? 7 : 8}>
          <Grid
            container
            direction={mdDown ? "column" : "row"}
            justify="center"
            alignItems={mdDown ? "flex-start" : "center"}
            wrap="nowrap"
            spacing={4}
          >
            <Grid item md={3} sm={4} xs={6}>
              <Image
                alt="YEI - Youth Economics Initiative"
                cloudName="masonwang"
                publicId="https://res.cloudinary.com/masonwang/image/upload/v1602113541/yei-website/logos/econbowl-white.png"
                className={classes.heroLogo}
              />
            </Grid>
            <Grid item md={9}>
              <Typography
                variant="body1"
                className={classes.econbowlHeroText}
                gutterBottom
              >
                The Youth Economics Initiative is proud to present our flagship
                program, EconBowl 2020-2021, in collaboration with the Wen &
                Yung Family Foundation!
              </Typography>
              <Typography
                variant="body1"
                className={classes.econbowlHeroText}
                gutterBottom
              >
                This competition offers high schoolers the chance to compete
                against like-minded individuals and apply real world economics
                knowledge in a fast-paced environment. Compete for glory,
                represent your high school, and win cash prizes!
              </Typography>
              <Typography variant="body1" className={classes.econbowlHeroText}>
                <b>
                  For contest details, please view the{" "}
                  <a
                    href="https://docs.google.com/document/d/1PsFf-NWwelRNSfVdKcW2rn-mTQvF39fIOiDQjzzx-kM/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    <u>rulebook</u>
                  </a>
                  .
                </b>
              </Typography>
              <Box pt={2}>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf8OZcjjx16mYpXKyfSjOY63UeTDgy_KK_8-l6nkhgYDZJivw/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="contained" color="primary">
                        Register Now
                      </Button>
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href="https://docs.google.com/document/d/1PsFf-NWwelRNSfVdKcW2rn-mTQvF39fIOiDQjzzx-kM/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="contained">Rulebook</Button>
                    </a>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Grid>
  );
}
