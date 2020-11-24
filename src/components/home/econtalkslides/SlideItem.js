import { Avatar, Box, Typography, Grid } from "@material-ui/core";
import React from "react";

import Chip from "@material-ui/core/Chip";
import YouTubeIcon from "@material-ui/icons/YouTube";

import useStyles from "../../../styles/pages/homeStyles";

export default function SlideItem({ name, imgURL, date, occupation, vid }) {
  const classes = useStyles();
  return (
    <Box mx={2.5} mt={1} mb={2.69}>
      <Grid
        container
        direction="column"
        justify="center"
        spacing={2}
        alignItems="center"
        className={classes.slideItem}
      >
        <Grid item>
          <Avatar
            className={classes.speakerAvatar}
            alt={name}
            src={imgURL}
            style={{ background: "#0d242b" }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5">{name}</Typography>
          <Typography style={{ color: "#bbb" }} variant="body1">
            {occupation}
          </Typography>
          <Typography variant="body1">
            <small>{date}</small>
          </Typography>
        </Grid>
        {vid && (
          <Grid container justify="center" alignItems="center" spacing={1}>
            <Grid item>
              <a href={vid} target="_blank" rel="noopener noreferrer">
                <Chip
                  icon={<YouTubeIcon />}
                  label="View Talk"
                  clickable
                  color="primary"
                />
              </a>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
