import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { Image } from "cloudinary-react";

export default function EconBowlSpeaker({ classes }) {
  const mdDown = window.innerWidth <= 960;
  return (
    <Box pt={8} pb={9} className={classes.lightMode}>
      <Container fixed>
        <Grid
          container
          direction={mdDown ? "column" : "row"}
          alignItems="center"
          wrap="nowrap"
          spacing={4}
        >
          <Grid item className={classes.secondOrder}>
            <Image
              alt="Lawrence White"
              cloudName="masonwang"
              publicId="https://res.cloudinary.com/masonwang/image/upload/v1602198072/yei-website/speakers/lawrence-white.png"
              className={classes.econbowlSpeaker}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="h3"
              align={mdDown ? "center" : "left"}
              gutterBottom
            >
              About the Speaker
            </Typography>
            <Typography
              variant="body1"
              align={mdDown ? "center" : "left"}
              gutterBottom
            >
              Our speaker for EconBowl is... drumroll...{" "}
              <b>Professor Lawrence White from NYU Stern</b> (the New York
              University Leonard N. Stern School of Business).
            </Typography>
            <Typography
              variant="body1"
              align={mdDown ? "center" : "left"}
              gutterBottom
            >
              He received his Ph.D. in Economics from Harvard University and now
              holds the Robert Kavesh Professorship in Economics. His primary
              research interests are financial regulation, antitrust, and
              applied macroeconomics. He will come talk with us at the end of
              the written round.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
