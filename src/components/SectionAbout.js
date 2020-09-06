import React from "react";
import { Container, Box, Grid, Typography } from "@material-ui/core";

export default function SectionAbout(props) {
  return (
    <Box py={5} id={props.id}>
      <Container fixed>
        <Typography align="center" variant="h4">
          <b>{props.title}</b>
        </Typography>
        <Box mt={1}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            spacing={2}
          >
            <Grid item>
              <Typography align="center" variant="body1">
                {props.content}
              </Typography>
            </Grid>
            <Grid item>{props.callToAction}</Grid>
            {props.children && <Grid item>{props.children}</Grid>}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
