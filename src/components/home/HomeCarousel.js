import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import featured from "../../data/featured";
import {
  Paper,
  Box,
  Typography,
  Grid,
  Button,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function HomeCarousel({ classes }) {
  const options = {
    autoplay: true,
    loop: true,
    dots: true,
    nav: true,
    items: 100,
    autoWidth: true,
    autoplayHoverPause: true,
    smartSpeed: 1300,
    autoplayTimeout: 2100,
  };

  return (
    <Box py={6}>
      <Container>
        <Typography align="center" variant="h3" gutterBottom>
          Events and Initiatives
        </Typography>
      </Container>
      <OwlCarousel style={{ overflowX: "hidden" }} {...options}>
        {featured.map((item) => (
          <Box key={item.title} mx={1.2}>
            <Paper className={classes.carouselCard}>
              <Box p={2.5} height="100%">
                <Grid
                  container
                  spacing={1}
                  style={{ height: "100%" }}
                  direction="column"
                  justify="space-between"
                  wrap="nowrap"
                >
                  <Grid item>
                    <Box mb={0.5}>
                      <Typography
                        variant={window.innerWidth > 600 ? "h5" : "h6"}
                      >
                        <b>{item.title}</b>
                      </Typography>
                    </Box>
                    <Typography variant="body2">{item.description}</Typography>
                  </Grid>
                  <Grid item>
                    <Link to={item.path}>
                      <Button variant="contained">Learn More</Button>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>
        ))}
      </OwlCarousel>
    </Box>
  );
}
