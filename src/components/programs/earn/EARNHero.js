import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import { Image } from "cloudinary-react";

export default function ProgramsHero({ classes }) {
  return (
    <Box className={classes.hero}>
      <Container fixed>
        <Box py={window.innerWidth <= 690 ? 5.42 : 7}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            wrap="nowrap"
            spacing={3}
          >
            <Grid item>
              <Grid
                container
                justify="center"
                alignContent="center"
                spacing={4}
              >
                <Grid item lg={4} xs={8}>
                  <Image
                    style={{ width: "100%" }}
                    cloudName="masonwang"
                    alt="YEI EARN"
                    publicId="https://res.cloudinary.com/masonwang/image/upload/v1602017056/yei-website/logos/earn.png"
                  />
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item>
              <Typography
                align="center"
                variant="body1"
                className={classes.subtitle}
              ></Typography>
            </Grid> */}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
