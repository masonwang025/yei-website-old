import { Box, Button, Grid, Container, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

export default function HomeAbout({ classes }) {
  return (
    <Box className={classes.about} py={8} id="home-about">
      <Container fixed>
        <Grid container alignItems="center" spacing={4}>
          <Grid item md={6} sm={11} xs={12}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Typography className={classes.aboutHeading} variant="h2">
                  We're not just a collective of economics clubs.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  By promoting cross-collaboration and friendly competition, we
                  open up the ever growing field of economics to students in a
                  fast-paced world.{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  We provide pathways toward careers in economics, business, and
                  finance and equip tomorrow's leaders with the tools necessary
                  to make change.
                </Typography>
              </Grid>
              <Grid item>
                <Link to="/events">
                  <Button
                    aria-label="our events"
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Our Events
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} sm={8} xs={11}>
            <Box
              ml={window.innerWidth > 960 ? 4 : 0}
              className={classes.aboutImageWrapper}
            >
              <Image
                alt="YEI - Youth Economics Initiative"
                cloudName="masonwang"
                className={classes.aboutImage}
                publicId="https://res.cloudinary.com/masonwang/image/upload/v1600040475/yei-website/home/home-about.png"
                style={{ backgroundColor: "#0d242b" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
