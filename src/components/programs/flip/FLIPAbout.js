import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import OpenForm from "../../clubs/OpenForm";
import ApplyFor from "../ApplyFor";
import { Image } from "cloudinary-react";

const appCriteria = [
  "History of club excellence",
  "Club involvement with YEI activities",
  "Experience with service and tutoring",
  "Club volunteer capacity",
];

export default function FLIPAbout({ classes }) {
  return (
    <Box pt={4.69}>
      <Container fixed>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography variant="body1">
              <b>
                In order to ensure we are delivering high-quality workshops,
                participation in FLIP is limited to YEI EconClubs. If you do not
                have a YEI EconClub at your school, you may apply to start one{" "}
                <OpenForm inline>
                  <span className="underline bold">here</span>
                </OpenForm>
                .
              </b>
            </Typography>
          </Grid>
        </Grid>

        <Box pt={8} pb={8}>
          <Grid
            container
            direction="column"
            spacing={3}
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Typography align="center" variant="h3">
                Developed in Partnership With
              </Typography>
            </Grid>
            <Grid item xs={10} sm={8} md={8} lg={4}>
              <Image
                alt="YEI EARN"
                cloudName="masonwang"
                style={{ width: "100%" }}
                publicId="https://res.cloudinary.com/masonwang/image/upload/v1602732343/yei-website/supporters/boa.png"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box style={{ background: "#efefef" }}>
        <Container>
          <Box pt={8} pb={9.5}>
            <Grid container direction="column" spacing={2} alignItems="center">
              <Grid item>
                <Typography align="center" variant="h3">
                  Application Criteria
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="center" variant="h6">
                  EconClub applications for FLIP are evaluated on the following
                  criteria:
                </Typography>
              </Grid>
              <Grid item>
                <Grid container justify="center" alignItems="flex-start">
                  {appCriteria.map((criteria, index) => (
                    <Grid key={index} item sm={6} md={3}>
                      <Grid container direction="column" spacing={1}>
                        <Grid align="center" item>
                          <div className={classes.appNumbers}>{index + 1}</div>
                        </Grid>
                        <Grid align="center" item>
                          <Typography gutterBottom variant="body1">
                            {criteria}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item>
                <ApplyFor program="FLIP" color="primary" />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box pt={7.5} pb={8.5}>
        <Container>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h3">FLIP Curriculum</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                While EconClubs must apply to be accepted to our FLIP program,
                every YEI EconClub is provided with the{" "}
                <b>16-week FLIP curriculum</b>, which can be used to teach club
                members about financial literacy. The FLIP curriculum has
                approximately 30 hours worth of content and covers topics such
                as budgeting, loans, credit and debit cards, 401(k), retirement,
                interest, savings, investing, and insurance.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
