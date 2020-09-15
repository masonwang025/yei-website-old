import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { Image } from "cloudinary-react";

export default function EconBowlHero({ classes }) {
  const mdDown = window.innerWidth <= 960;
  return (
    <Box className={classes.econbowlHero} pt={9}>
      <Container fixed>
        <Grid
          container
          direction={mdDown ? "column" : "row"}
          justify="center"
          alignItems="center"
          wrap="nowrap"
          spacing={3}
        >
          <Grid item md={3} sm={4} xs={7}>
            <Image
              alt="seo-alt"
              cloudName="masonwang"
              publicId="https://res.cloudinary.com/masonwang/image/upload/v1600056211/yei-website/home/econbowl.png"
              className={classes.econbowlHeroLogo}
            />
          </Grid>
          <Grid item md={9}>
            <Typography
              align={mdDown ? "center" : "left"}
              variant="body1"
              className={classes.econbowlHeroText}
              gutterBottom
            >
              The Youth Economics Initiative is proud to present our flagship
              program, EconBowl 2020-2021, in collaboration with the Wen & Yung
              Family Foundation! This competition offers high schoolers the
              chance to compete against like-minded individuals and apply real
              world economics knowledge in a fast-paced environment. Compete for
              glory, represent your high school, and win cash prizes!
            </Typography>
            <Typography
              align={mdDown ? "center" : "left"}
              variant="body1"
              className={classes.econbowlHeroText}
            >
              <b>
                <span className={classes.dark}>November 8th, 2020</span>{" "}
                <span className={classes.primary}>~</span>{" "}
                <span className={classes.dark}>
                  More information coming soon
                </span>
              </b>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
