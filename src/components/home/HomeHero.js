import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Hidden,
  Button,
} from "@material-ui/core";
import Page from "../Page";
import { Image } from "cloudinary-react";

export default function HomeHero({ classes }) {
  return (
    <Page>
      <Box className={classes.hero}>
        <Container fixed>
          <Grid
            style={{
              minHeight: "100vh",
              marginTop: `-${window.innerWidth > 600 ? 64 : 56}px`,
              padding: "6.9em 0 4.2em 0",
            }}
            className={classes.heroGrid}
            container
            justify="center"
            direction="column"
          >
            <Grid item>
              <Image
                cloudName="masonwang"
                publicId="https://res.cloudinary.com/masonwang/image/upload/v1599113467/yei-website/yeilogo-full.png"
                width="100%"
                className={classes.logoImg}
              />
              <Typography variant="h4" className={classes.slogan}>
                Exploring economics.{" "}
                <Hidden mdUp>
                  {" "}
                  <br />
                </Hidden>{" "}
                Empowering leaders.
              </Typography>
            </Grid>
            <Box mt={2}>
              <Grid item>
                <Box display="inline-block" mr={1} mb={1}>
                  <Button
                    className={`${classes.ctaBtn} ${classes.mainCta}`}
                    variant="contained"
                    size="large"
                  >
                    Register a Club
                  </Button>
                </Box>
                <Button
                  className={classes.ctaBtn}
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => {
                    document
                      .querySelector("#home-about")
                      .scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                >
                  About Us
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Box>
    </Page>
  );
}
