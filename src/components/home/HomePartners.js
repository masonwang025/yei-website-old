import { Box, Grid, Container, Typography } from "@material-ui/core";
import React from "react";
import partners from "../../data/sponsors/partners";
import { Image } from "cloudinary-react";

export default function HomePartners({ classes }) {
  return (
    <Box className={classes.partners} pt={10.25}>
      <Container fixed>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography gutterBottom align="center" variant="h3">
              Partners
            </Typography>
          </Grid>
          <Grid item>
            <Grid container justify="center" alignContent="center" spacing={4}>
              {partners.map((partner) => (
                <Grid item key={partner.link} xs={9} md={4} lg={3}>
                  <Box py={1}>
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        alt="YEI - Youth Economics Initiative"
                        className={classes.supporterLogo}
                        cloudName="masonwang"
                        publicId={partner.imgURL}
                      />
                    </a>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
