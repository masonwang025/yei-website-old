import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { Image } from "cloudinary-react";

export default function FLIPHero({ classes }) {
  return (
    <Box id="FLIP" pt={window.innerWidth < 960 ? 9 : 13}>
      <Container fixed>
        <Grid container alignItems="center" justify="center" spacing={4}>
          <Grid item md={5} sm={11} xs={12}>
            <Grid container direction="column" justify="center" spacing={3}>
              <Grid item>
                <Typography variant="h3">
                  Financial Literacy Introduction Program (FLIP)
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  YEI EconClubs have the unique opportunity to apply to offer a
                  Financial Literacy Introduction Program (FLIP) within their
                  community. EconClubs accepted to FLIP will be paired with a
                  partner nonprofit organization to deliver financial literacy
                  workshops to underserved youths.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Additionally, YEI will provide FLIP-affiliated EconClubs with
                  year-round FLIP training sessions, our extensive 16-week FLIP
                  curriculum including activities and post-session resources,
                  and PVSA-certified volunteer hours for any members who
                  volunteer with FLIP.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={7} sm={8} xs={11}>
            <Box display="flex" justifyContent="center">
              <Image
                alt="YEI FLIP"
                cloudName="masonwang"
                className={classes.image}
                publicId="https://res.cloudinary.com/masonwang/image/upload/v1600099715/yei-website/programs/flip.jpg"
                style={{ backgroundColor: "#0d242b" }}
              />
            </Box>{" "}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
