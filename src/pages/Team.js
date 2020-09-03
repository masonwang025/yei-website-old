import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Page from "../components/Page";

export default function Team() {
  return (
    <div className="home page">
      <Page>
        <Container fixed>
          <Grid>
            <Typography variant="h3">Team page</Typography>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              illum.
            </p>
          </Grid>
        </Container>
      </Page>
    </div>
  );
}
