import { Box, Grid, Container, Typography } from "@material-ui/core";
import React from "react";
import featured from "../../data/components/featured";
import FeaturedSection from "./FeaturedSection";

export default function HomeEventsAndIniatives({ classes }) {
  return (
    <Box pb={1.69}>
      <Box pt={9.25} className={classes.blackMode}>
        <Container fixed>
          <Typography
            align="center"
            className={classes.aboutHeading}
            variant="h2"
            style={{ zIndex: 1000, position: "relative" }}
          >
            Events and Initiatives
          </Typography>
        </Container>
      </Box>
      <Grid
        style={{ marginTop: window.innerWidth < 690 ? "-1.5em" : "0" }}
        container
        alignItems="stretch"
        direction="column"
        wrap="nowrap"
      >
        {featured.map((item, index) => (
          <FeaturedSection
            key={item.title + item.path}
            item={item}
            index={index}
            classes={classes}
          />
        ))}
      </Grid>
    </Box>
  );
}
