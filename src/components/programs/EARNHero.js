import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { Image } from "cloudinary-react";
import OpenForm from "../clubs/OpenForm";
import ApplyFor from "./ApplyFor";

export default function EARNHero({ classes }) {
  return (
    <Box pt={window.innerWidth < 960 ? 9 : 12}>
      <Container fixed>
        <Grid container alignItems="center" justify="center" spacing={4}>
          <Grid item md={7} sm={11} xs={12}>
            <Grid container direction="column" justify="center" spacing={3}>
              <Grid item>
                <Typography variant="h3">
                  Economics Achievement and Research Network (EARN)
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  EARN is a highly selective program for members of YEI
                  affiliated EconClubs who are truly passionate about economics
                  and want to gain real-world experience. EARN leverages YEI’s
                  connections to match motivated students with economics
                  internships at top universities and companies.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  After passing a rigorous application process conducted by the
                  YEI EARN team, students will be added to a prospective intern
                  database that is available to our partner organizations. From
                  there, EARN students may be contacted by these organizations
                  with internship opportunities.
                </Typography>
              </Grid>
              <Grid item>
                <ApplyFor program="EARN" color="primary" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5} sm={8} xs={11}>
            <Box display="flex" justifyContent="center">
              <Image
                alt="seo-alt"
                cloudName="masonwang"
                className={classes.image2}
                publicId="https://res.cloudinary.com/masonwang/image/upload/v1600097563/yei-website/programs/earn.png"
                style={{ backgroundColor: "#0d242b" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box pt={4.69}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="body1">
                <b>
                  Note that being accepted to EARN does not guarantee an
                  internship position. All EARN applicants must be affiliated
                  with a YEI EconClub. If you do not have a YEI EconClub at your
                  school, you may apply to start one{" "}
                  <OpenForm inline>
                    <span className="underline bold">here</span>
                  </OpenForm>
                  .
                </b>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
