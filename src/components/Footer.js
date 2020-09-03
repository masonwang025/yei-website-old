import React from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Instagram, Facebook, LinkedIn, Mail } from "@material-ui/icons";
import useStyles from "../styles/components/footerStyles.js";

export default function Footer() {
  const classes = useStyles();

  return (
    <Box py={"2.5em"} className={classes.root}>
      <Container fixed>
        <Grid
          container
          className={classes.gridContainer}
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="body2" align="center">
              Youth Economics Initiative is a 501(c)(3) non-profit organization.
            </Typography>
            <Typography variant="body2" align="center">
              &copy; 2020 The Youth Economics Initiative Inc. All Rights
              Reserved.
            </Typography>
          </Grid>
          <Grid item>
            <Grid>
              <Typography align="center" variant="body1">
                <a
                  href="mailto:admin@theyei.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "white" }}
                >
                  admin@theyei.org
                </a>
              </Typography>
            </Grid>
            <Grid container>
              <a
                href="https://www.facebook.com/youtheconomicsinitiative/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <Facebook className={classes.socialIcon} />
                </IconButton>
              </a>
              <a
                href="https://www.instagram.com/the.yei/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <Instagram className={classes.socialIcon} />
                </IconButton>
              </a>
              <a
                href="https://www.linkedin.com/company/31421051"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <LinkedIn className={classes.socialIcon} />
                </IconButton>
              </a>
              <a
                href="mailto:admin@theyei.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <Mail className={classes.socialIcon} />
                </IconButton>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
