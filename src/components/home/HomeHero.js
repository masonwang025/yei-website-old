import React from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import OpenForm from "../clubs/OpenForm";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function HomeHero({ classes }) {
  return (
    <Box className={classes.hero}>
      <Container
        fixed
        style={{
          paddingTop: `-${window.innerWidth > 600 ? 64 : 56}px`,
        }}
      >
        <Grid
          style={{
            minHeight: "100vh",
            marginTop: `-${window.innerWidth > 600 ? 64 : 56}px`,
            padding: window.innerWidth > 960 ? "6.42em 0 4.2em 0" : "4.2em 0",
          }}
          className={classes.heroGrid}
          container
          justify="center"
          direction="column"
        >
          <Grid item>
            <Typography variant="h1" className={classes.title}>
              Launchpad for
              <br /> Student Economists
            </Typography>
            <Typography variant="h4" className={classes.slogan}>
              World's largest coalition of high school economics clubs.
            </Typography>
          </Grid>
          <Box mt={2}>
            <Grid item>
              <Box display="inline-block" mr={1} mb={1}>
                <OpenForm>
                  <Button
                    aria-label="register a club"
                    className={`${classes.ctaBtn} ${classes.mainCta}`}
                    variant="contained"
                    size="large"
                  >
                    Register a Club
                  </Button>
                </OpenForm>
              </Box>

              <AnchorLink href="#home-about" offset="26.9px">
                <Button
                  aria-label="about us"
                  className={classes.ctaBtn}
                  variant="contained"
                  size="large"
                >
                  About Us
                </Button>
              </AnchorLink>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
