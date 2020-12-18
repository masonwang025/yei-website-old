import React from "react";
import { Container, Typography, Box } from "@material-ui/core";

export default function ResourceSection({ classes }) {
  return (
    <Box pt={8} pb={9} className={classes.lightMode}>
      <Container id="ib-curriculum" fixed>
        <Typography variant="h3" gutterBottom>
          25+ Week IB Curriculum
        </Typography>
        <Typography variant="body1" gutterBottom>
          IB Economics! This in-depth curriculum covers microeconomics,
          macroeconomics, international trade, and development economics. Use
          our 20 IB slides to study and teach economics for the IB exam!
        </Typography>
        <Typography gutterBottom variant="body1">
          <b>This curriculum is coming soon! </b>
        </Typography>
      </Container>
    </Box>
  );
}
