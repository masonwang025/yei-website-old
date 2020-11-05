import { Avatar, Box, Typography, Grid } from "@material-ui/core";
import React, { useState } from "react";

import Chip from "@material-ui/core/Chip";
import YouTubeIcon from "@material-ui/icons/YouTube";

export default function SpeakerProfile({
  name,
  imgURL,
  bio,
  date,
  classes,
  occupation,
  vid,
}) {
  return (
    <Box m={2.5}>
      <Grid
        container
        direction="column"
        justify="center"
        spacing={1}
        alignItems="center"
      >
        <Grid item>
          <Avatar
            className={classes.avatar}
            alt={name}
            src={imgURL}
            style={{ background: "#0d242b" }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5">{name}</Typography>
          <Typography style={{ color: "#333" }} variant="body1">
            <b>{occupation}</b>
          </Typography>
          <Typography className={classes.speakerDate} variant="body1">
            <small>{date}</small>
          </Typography>
        </Grid>
        {vid && (
          <Grid item>
            <a href={vid} target="_blank" rel="noopener noreferrer">
              <Chip
                icon={<YouTubeIcon />}
                label="View Talk"
                clickable
                color="primary"
                variant="outlined"
              />
            </a>
          </Grid>
        )}
        <Grid item>
          <Typography variant="body1">
            <Truncate str={bio} n={169} classes={classes} />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

function Truncate({ str, n, classes }) {
  const [showFull, setShowFull] = useState(false);

  return str.length > n && !showFull ? (
    <span>
      {str.substr(0, n - 1)}...
      <br />
      <span className={classes.primary}>
        [
        <b
          onClick={() => {
            setShowFull(true);
          }}
          className="underline bold"
        >
          show more
        </b>
        ]
      </span>
    </span>
  ) : (
    <span>
      {str}
      {showFull && (
        <span>
          <br />
          <span className={classes.primary}>
            [
            <b
              onClick={() => {
                setShowFull(false);
              }}
              className="underline bold"
            >
              show less
            </b>
            ]
          </span>
        </span>
      )}
    </span>
  );
}
