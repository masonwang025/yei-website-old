import React from "react";

import { Paper, Typography, Button, Box, Grid } from "@material-ui/core";
import { Image } from "cloudinary-react";

export default function ClubCard(props) {
  return (
    <Paper elevation={0} style={{ height: "100%" }}>
      <Grid
        container
        style={{ height: "100%" }}
        spacing={0}
        direction="column"
        justify="space-between"
      >
        <Grid item>
          <Image
            style={{ width: "100%", maxHeight: "240px", objectFit: "cover" }}
            cloudName="masonwang"
            publicId={props.imgURL}
          />
          <Box p={1.42} pt={0}>
            <Typography variant="h6">
              <b>{props.chapter}</b>
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {props.region}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box p={1.42}>
            <a
              href={`mailto:${props.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="small" variant="contained">
                Contact
              </Button>
            </a>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
