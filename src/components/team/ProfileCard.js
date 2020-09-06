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
}) {
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <Grid container wrap="nowrap" alignItems="center" spacing={1}>
        <Grid item xs={5}>
          <Box p={2}>
            <Avatar className={classes.avatar} alt={name} src={imgURL} />
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Grid container justify="center" direction="column">
            <Grid item>
              <Typography className={classes.name}>{name}</Typography>
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
                <IconButton color="secondary" size="small">
                  <LinkedIn />
                </IconButton>
                {github && (
                  <IconButton color="secondary" size="small">
                    <GitHub />
                  </IconButton>
                )}
                <IconButton color="secondary" size="small">
                  <Mail />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
