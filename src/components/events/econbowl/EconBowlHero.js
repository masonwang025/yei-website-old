import React from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import { Image } from "cloudinary-react";

export default function EconBowlHero({ classes }) {
  const mdDown = window.innerWidth <= 960;
  return (
    <Box className={classes.econbowlHero} pt={8} pb={10}>
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
              alt="YEI - Youth Economics Initiative"
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
                <span className={classes.dark}>Fully online</span>
              </b>
              <br />
              Register by 11/1/20 11:59pm PDT. Written Round: 9:00 am PDT to
              11:30 am PDT. Quizbowl round: 11:40 am PDT to 1:30 pm PDT.
            </Typography>
            <Box pt={2}>
              <Grid
                container
                spacing={1}
                justify={mdDown ? "center" : "flex-start"}
                alignItems="center"
              >
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
                    <Button variant="contained" color="secondary">
                      Rulebook
                    </Button>
                  </a>
                </Grid>
                <Grid item>
                  <a
                    href="http://tinyurl.com/practiceset1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="contained" color="secondary">
                      Practice Test
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Box pt={6.9}>
          <Grid container justify="center">
            <Grid item>
              <iframe
                title="Second Annual EconBowl Teaser"
                src="https://www.youtube.com/embed/3oiKAa7IIpc"
                className={classes.econbowlRecap}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
