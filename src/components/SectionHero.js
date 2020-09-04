import React from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import useStyles from "../styles/components/sectionHeroStyles";

export default function SectionHero({ title, subtitle }) {
  const classes = useStyles();

  return (
    <Box className={classes.hero}>
      <Container fixed>
        <Grid
          style={{
            minHeight: "50vh",
            marginTop: `-${window.innerWidth > 600 ? 64 : 56}px`,
            padding: window.innerWidth > 960 ? "6.42em 0 4.2em 0" : "4.2em 0",
          }}
          className={classes.heroGrid}
          container
          justify="center"
          direction="column"
        >
          <Grid item>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="h4">{subtitle}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
