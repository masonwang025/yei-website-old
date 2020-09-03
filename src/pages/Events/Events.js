import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Page from "../../components/Page";

export default function Events() {
  return (
    <Page>
      <Container fixed>
        <Grid>
          <Typography variant="h3">Events page</Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            illum.
          </p>
        </Grid>
      </Container>
    </Page>
  );
}
