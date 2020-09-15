import React from "react";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import { Image } from "cloudinary-react";

export default function EventsSection(props) {
  const classes = props.classes;
  let centerContent = window.innerWidth <= 960;
  let pt = props.pt ? props.pt : 15;
  let pb = props.pb ? props.pb : 15;

  const mdDown = window.innerWidth <= 960;

  if (mdDown) {
    pt = props.pt ? props.pt : 7;
    pb = props.pb ? props.pb : 7;
  }

  return (
    <Box
      pt={pt}
      pb={pb}
      id={props.id}
      className={props.darkerBg ? classes.darkerBg : ""}
    >
      <Container
        fixed
        className={`${props.centerOnMobile && classes.centerOnMobile}`}
      >
        <Box mt={1}>
          <Grid container alignItems="center" spacing={4}>
            {/* text column */}
            <Grid
              item
              className={props.firstOnDesktop ? props.classes.secondOrder : ""}
              xs={props.imgURL && !centerContent ? 8 : 12}
            >
              <Grid
                container
                direction="column"
                justify="center"
                spacing={props.spacing ? props.spacing : 2}
              >
                <Grid item>
                  <Typography variant={mdDown ? "h3" : "h2"}>
                    {props.title}
                  </Typography>
                </Grid>
                {props.content && (
                  <Grid item>
                    <Typography variant="body1">{props.content}</Typography>
                  </Grid>
                )}
                <Grid item>
                  <Box mt={1}>{props.ctaBtn}</Box>
                </Grid>
              </Grid>
            </Grid>
            {/* possible image column */}
            {props.imgURL && (
              <Grid
                item
                className={props.firstOnDesktop ? props.classes.firstOrder : ""}
                xs
              >
                <Box
                  display="flex"
                  justifyContent={
                    (props.forceCenter || !centerContent || centerContent) &&
                    "center"
                  }
                >
                  <Image
                    cloudName="masonwang"
                    publicId={props.imgURL}
                    style={{ width: "90%" }}
                  />
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
