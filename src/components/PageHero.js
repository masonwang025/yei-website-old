import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import useStyles from "../styles/components/pageHeroStyles";
import { Image } from "cloudinary-react";

export default function PageHero({ title, paragraph, imgURL, callToAction }) {
  const classes = useStyles();

  return (
    <Box className={classes.hero}>
      <Container fixed className={classes.heroContainer}>
        <Grid
          style={{
            minHeight: "50vh",
            padding: window.innerWidth > 960 ? "5.69em 0 4.2em 0" : "4.2em 0",
          }}
          container
          justify="center"
          direction="column"
        >
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="h3">
                    <b>{title}</b>
                  </Typography>
                </Grid>
                {paragraph && (
                  <Grid item>
                    <Typography
                      variant="h5"
                      className={
                        paragraph.split(" ").length >= 15
                          ? classes.smallParagraph
                          : ""
                      }
                    >
                      {paragraph}
                    </Typography>
                  </Grid>
                )}
                {callToAction && <Grid item>{callToAction}</Grid>}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} className={classes.imageCol}>
              <Box display="flex" justifyContent="center">
                <Image
                  cloudName="masonwang"
                  className={classes.image}
                  publicId={imgURL}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
