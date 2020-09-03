import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Page from "../components/Page";

export default function Programs() {
  return (
    <div className="home page">
      <Page>
        <Container fixed>
          <Grid>
            <Typography variant="h3">Programs page</Typography>
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
