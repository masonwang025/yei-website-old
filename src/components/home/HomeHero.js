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

export default function HomeHero({ classes }) {
  return (
    <Page>
      <Box className={classes.hero}>
        <Container>
          <Grid
            style={{
              minHeight: "100vh",
              marginTop: `-${window.innerWidth > 600 ? 64 : 56}px`,
              padding: "6.9em 0 4.2em 0",
            }}
            container
            justify="center"
            direction="column"
          >
            <Grid item>
              <Box fontWeight={800}>
                <Typography variant="h2" className={classes.mainTitle}>
                  Youth
                  <br />
                  Economics
                  <br />
                  Intitiative
                </Typography>
              </Box>
              <Typography variant="h4">
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
