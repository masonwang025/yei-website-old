import React from "react";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import useStyles from "../styles/components/pageSectionStyles";
import { Image } from "cloudinary-react";

export default function PageSection(props) {
  const classes = useStyles();
  let centerContent = window.innerWidth <= 960;
  let pt = props.pt ? 5 + props.pt : 5;
  let pb = props.pb ? 5 + props.pb : 5;

  let titleVariant = "h4";
  if (props.subsection === true) {
    titleVariant = "h6";
  } else if (props.homepage === true) {
    titleVariant = "h3";
  }

  return (
    <Box pt={pt} pb={pb} id={props.id} className={props.light && classes.light}>
      <Container
        fixed
        className={`${props.centerOnMobile && classes.centerOnMobile} ${
          props.forceCenter && classes.forceCenter
        }`}
      >
        <Box mt={1}>
          <Grid container alignItems="center" spacing={4}>
            {/* text column */}
            <Grid item xs={props.imgURL && !centerContent ? 8 : 12}>
              <Grid container direction="column" justify="center" spacing={1}>
                <Grid item>
                  <Typography variant={titleVariant}>
                    {props.homepage === true ? (
                      props.title
                    ) : (
                      <b>{props.title}</b>
                    )}
                  </Typography>
                </Grid>
                {props.content && (
                  <Grid item>
                    <Typography variant="body1">{props.content}</Typography>
                  </Grid>
                )}
                <Grid item>{props.callToAction}</Grid>
                {props.children && <Grid item>{props.children}</Grid>}
              </Grid>
            </Grid>
            {/* possible image column */}
            {props.imgURL && (
              <Grid item xs>
                <Box
                  display="flex"
                  justifyContent={
                    (props.forceCenter ||
                      !centerContent ||
                      (props.centerOnMobile && centerContent)) &&
                    "center"
                  }
                >
                  <Image
                    cloudName="masonwang"
                    className={classes.image}
                    publicId={props.imgURL}
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