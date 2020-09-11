import React from "react";
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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function HomeCarousel({ classes }) {
  return (
    <Box py={6}>
      <Container>
        <Typography align="center" variant="h3" gutterBottom>
          Events and Initiatives
        </Typography>
      </Container>
      <Carousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        infinite
        centerMode={window.innerWidth > 960}
        keyBoardControl
        customTransition="transform 0.88s ease-in-out"
        transitionDuration={500}
        dotListClass="dot-list"
        itemClass={classes.carouselCard}
      >
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
      </Carousel>
    </Box>
  );
}
