import React from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Instagram,
  Facebook,
  Twitter,
  LinkedIn,
  Mail,
} from "@material-ui/icons";

export default function Footer() {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.secondary.darkest,
      color: "white",
    },
  }));
  const classes = useStyles();

  return (
    <Box py={"2.5em"} className={classes.root}>
      <Container fixed>
        <Grid container>
          <Grid sm={6}>
            <Typography variant="body2">
              Youth Economics Initiative is a 501(c)(3) non-profit organization.
            </Typography>
            <Typography variant="body2">
              &copy; 2020 The Youth Economics Initiative Inc. All Rights
              Reserved.
            </Typography>
          </Grid>
          <Grid sm={6}>
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <Mail />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
