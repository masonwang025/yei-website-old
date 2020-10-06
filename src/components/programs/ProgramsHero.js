import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { Image } from "cloudinary-react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const programs = [
  {
    name: "FLIP",
    imgURL:
      "https://res.cloudinary.com/masonwang/image/upload/v1602017056/yei-website/home/flip.png",
  },
  {
    name: "EARN",
    imgURL:
      "https://res.cloudinary.com/masonwang/image/upload/v1602017056/yei-website/home/earn.png",
  },
];

export default function ProgramsHero({ classes }) {
  return (
    <Box className={classes.hero}>
      <Container fixed>
        <Grid
          style={{
            minHeight: `calc(100vh - ${window.innerWidth > 600 ? 64 : 56}px)`,
          }}
          container
          direction="column"
          justify="center"
          alignItems="center"
          wrap="nowrap"
          spacing={3}
        >
          <Grid item>
            <Typography className={classes.title} align="center" variant="h2">
              <b>YEI Programs</b>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align="center"
              variant="body1"
              className={classes.subtitle}
            >
              YEI's exclusive supplemental programs for our EconClubs and
              members created to prepare aspiring leaders through community
              service and real work experience.
            </Typography>
          </Grid>
          <Grid item>
            <Grid container justify="center" alignContent="center" spacing={4}>
              {programs.map((program) => (
                <Grid item lg={2} xs={5} key={program.name}>
                  <AnchorLink href={`#${program.name}`}>
                    <Image
                      style={{ width: "100%" }}
                      cloudName="masonwang"
                      alt={`YEI ${program.name}`}
                      publicId={program.imgURL}
                    />
                  </AnchorLink>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
