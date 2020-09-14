import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";

export default function EarnBenefits({ classes }) {
  return (
    <Box py={5}>
      <Container>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography variant="body2">
              <b>YEI Programs</b>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
