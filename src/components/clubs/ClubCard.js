import React from "react";

import { Paper, Typography, Button, Box, Grid } from "@material-ui/core";
import { Image } from "cloudinary-react";
import { makeStyles } from "@material-ui/core";

export default function ClubCard(props) {
  const useStyles = makeStyles({
    card: {
      overflow: "hidden",
    },
    imgWrapper: {
      overflow: "hidden",
    },
    cardImg: {
      minHeight: "100%",
      maxWidth: "100%",
      width: "100%",
      height: "100%",
      backgroundColor: "#0d242b",
      objectFit: "cover",
      transition: "0.42s ease-in-out",
      transform: "scale(1.05)",
      filter: "brightness(0.95)",
      "&:hover": {
        transform: "scale(1.1)",
        filter: "brightness(1.05)",
      },
    },
  });

  const classes = useStyles();

  return (
    <Paper style={{ height: "100%" }}>
      <Grid
        container
        style={{ height: "100%" }}
        spacing={0}
        direction="column"
        justify="space-between"
      >
        <Grid item>
          <div className={classes.imgWrapper}>
            <Image
              alt="YEI Clubs"
              className={classes.cardImg}
              cloudName="masonwang"
              publicId={props.imgURL}
            />
          </div>
          <Box p={1.42}>
            <Typography variant="h6">
              <b>{props.chapter}</b>
            </Typography>
            <Typography variant="body1" color="secondary">
              {props.region}
            </Typography>
            {props.founding && (
              <Typography variant="body2" color="textSecondary">
                {props.primaryFounding ? (
                  <i>Primary Founding Club</i>
                ) : (
                  <i>Founding Club</i>
                )}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item>
          <Box p={1.42}>
            <a
              href={`mailto:${props.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                aria-label="contact club"
                size="small"
                variant="contained"
              >
                Contact
              </Button>
            </a>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
