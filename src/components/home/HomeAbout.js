import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Grid, Typography, Button } from "@material-ui/core";

export default function HomeAbout() {
  return (
    <Box id="home-about" py={5}>
      <Container fixed>
        <Typography variant="h3">
          What is the Youth Economics Intiative?
        </Typography>
        <Box mt={1}>
          <Grid>
            <Typography variant="body1">
              <b>We're not just a collective of Economics Clubs.</b> By
              promoting cross-collaboration and friendly competition, we open up
              the ever growing field of economics to students in a fast-paced
              world. We provide pathways toward careers in economics, business,
              and finance and equip tomorrow's leaders with the tools necessary
              to make change.
            </Typography>
            <Box my={2}>
              <Link to="/events">
                <Button variant="contained" color="secondary" size="large">
                  Our Events
                </Button>
              </Link>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
