import { Avatar, Box, Typography, Grid } from "@material-ui/core";
import React, { useState } from "react";

export default function SpeakerProfile({
  name,
  imgURL,
  bio,
  date,
  classes,
  occupation,
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
          <Avatar className={classes.avatar} alt={name} src={imgURL} />
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
