import React from "react";
import { Button, Box, Typography, Hidden, Grid } from "@material-ui/core";
import PageSection from "../PageSection";
import OpenForm from "./OpenForm";
import { Image } from "cloudinary-react";

export default function ClubProcess({ classes }) {
  const steps = [
    {
      title: "Register Your Club",
      content: "Let’s get acquainted! Fill out the registration form below!",
      imgURL:
        "https://res.cloudinary.com/masonwang/image/upload/v1601668424/yei-website/manypixels-isometric/steps/checklist.png",
    },
    {
      title: "Onboarding Call",
      content: "Our expansion team will call you over Zoom!",
      imgURL:
        "https://res.cloudinary.com/masonwang/image/upload/v1601668275/yei-website/manypixels-isometric/steps/videocall.png",
    },
    {
      title: "Launch Your Club",
      content: "Receive your Launch Package and get started!",
      imgURL:
        "https://res.cloudinary.com/masonwang/image/upload/v1601668275/yei-website/manypixels-isometric/steps/rocketlaunch.png",
    },
  ];

  return (
    <Box mt={7.2} className={classes.darkerBg}>
      <PageSection
        dark
        pt={6}
        pb={6.9}
        title="Start Your YEI EconClub in 3 Steps"
        titleCenter
      >
        <Box pt={5.5}>
          <Grid container alignItems="center" direction="column" spacing={3}>
            <Grid item>
              <Hidden smDown>
                {steps.map((step, index) => (
                  <Box key={index} pb={8.69}>
                    <Grid
                      container
                      spacing={5}
                      alignItems="center"
                      justify="center"
                    >
                      <Grid
                        item
                        className={
                          index % 2 === 1
                            ? classes.firstOrder
                            : classes.secondOrder
                        }
                        md={4}
                      >
                        <Image
                          alt={step.title}
                          cloudName="masonwang"
                          className={classes.stepsImage}
                          publicId={step.imgURL}
                        />
                      </Grid>
                      <Grid item md={5}>
                        <Typography gutterBottom variant="h4">
                          <span className={classes.appNumbers}>
                            {index + 1}
                          </span>{" "}
                          {step.title}
                        </Typography>
                        <Typography variant="body1">{step.content}</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </Hidden>

              <Hidden mdUp>
                {steps.map((step, index) => (
                  <Box key={index} pb={4.2}>
                    <Typography gutterBottom variant="h4" align="center">
                      <span className={classes.appNumbers}>{index + 1}</span>{" "}
                      {step.title}
                    </Typography>
                    <Typography variant="body1" align="center">
                      {step.content}
                    </Typography>
                  </Box>
                ))}
              </Hidden>
            </Grid>
            <Grid item>
              <Button
                aria-label="register your club"
                variant="contained"
                color="primary"
              >
                <OpenForm>Register Your Club</OpenForm>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </PageSection>
    </Box>
  );
}
