import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Avatar,
  Chip,
  IconButton,
} from "@material-ui/core";
import useStyles from "../../styles/components/profileStyles";
import { Mail, LinkedIn, GitHub } from "@material-ui/icons";

export default function ProfileCard({
  name,
  positions,
  imgURL,
  linkedin,
  github,
  email,
}) {
  const classes = useStyles();
  return (
    <Paper className={classes.card} elevation={0}>
      <Grid
        container
        wrap="nowrap"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <Grid item xs={5}>
          <Box p={2}>
            <Avatar className={classes.avatar} alt={name} src={imgURL} />
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Grid container justify="center" align="left" direction="column">
            <Grid item>
              <Typography align="left" className={classes.name}>
                {name}
              </Typography>
            </Grid>
            <Grid item>
              {positions.map((position) => (
                <Chip
                  className={classes.chip}
                  key={name + position}
                  label={position}
                  size="small"
                />
              ))}
            </Grid>
            <Grid item>
              <Box mt={1}>
                {linkedin && (
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <IconButton color="secondary" size="small">
                      <LinkedIn />
                    </IconButton>
                  </a>
                )}
                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <IconButton color="secondary" size="small">
                      <GitHub />
                    </IconButton>
                  </a>
                )}
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="secondary" size="small">
                    <Mail />
                  </IconButton>
                </a>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
