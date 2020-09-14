import { Box, Grid, Container, Typography } from "@material-ui/core";
import React from "react";
import supporters from "../../data/supporters";
import { Image } from "cloudinary-react";

export default function HomeSupporters({ classes }) {
  return (
    <Box className={classes.about} pt={4} pb={10.25}>
      <Container>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography gutterBottom align="center" variant="h3">
              Supported By
            </Typography>
          </Grid>
          <Grid item>
            <Grid container justify="center" alignContent="center" spacing={3}>
              {supporters.map((supporter) => (
                <Grid item key={supporter.link} xs={9} sm={5} md={3}>
                  <a
                    href={supporter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className={classes.supporterLogo}
                      cloudName="masonwang"
                      publicId={supporter.imgURL}
                    />
                  </a>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
