import React from "react";

import { Box, Button, Grid, Container, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

export default function FeaturedSection({ item, index, classes }) {
  let even = index % 2 === 0;
  let firstClass = !even ? classes.secondOrder : classes.firstOrder;
  let secondClass = even ? classes.secondOrder : classes.firstOrder;

  return (
    <Grid
      item
      xs={12}
      className={
        even
          ? `${classes.blackMode} ${classes.slantUpLeft}`
          : `${classes.whiteBg}`
      }
      style={{ zIndex: -1 - index }}
    >
      <Container fixed>
        <Box py={window.innerWidth >= 690 ? 6.9 : 0}>
          <Grid
            container
            direction={window.innerWidth >= 690 ? "row" : "column"}
            alignItems="center"
            style={{ height: "100%" }}
            spacing={3}
          >
            <Grid className={firstClass} item md={item.imgURL ? 8 : 12}>
              <Typography variant={window.innerWidth > 600 ? "h3" : "h5"}>
                <b>{item.title}</b>
              </Typography>
              <Box my={3}>
                <Typography variant="body1">{item.description} </Typography>
              </Box>
              <Link to={item.path}>
                <Button
                  aria-label="learn more about this event"
                  variant="contained"
                  color={even ? "default" : "secondary"}
                >
                  Learn More
                </Button>
              </Link>
            </Grid>
            {item.imgURL && (
              <Grid className={secondClass} item xs={12} sm={6} md={4}>
                <Box px={2} py={2}>
                  <Image
                    alt="YEI - Youth Economics Initiative"
                    cloudName="masonwang"
                    className={classes.featuredLogo}
                    publicId={item.imgURL}
                  />
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </Grid>
  );
}
