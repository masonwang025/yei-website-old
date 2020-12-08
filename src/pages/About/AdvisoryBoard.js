import { Container, Grid, Box } from "@material-ui/core";
import React from "react";
import { Helmet } from "react-helmet";
import advisoryBoard from "../../data/people/advisoryBoard";
import AdvisoryHero from "../../components/team/AdvisoryHero";
import AdvisoryMember from "../../components/team/AdvisoryMember";

export default function AdvisoryBoard() {
  const mdDown = window.innerWidth <= 960;
  return (
    <div>
      <AdvisoryHero />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Advisory Board - Youth Economics Initiative (YEI)</title>{" "}
        <link rel="icon" href="../assets/favicon.ico" />
        <meta
          name="description"
          content="YEI's Advisory Board is composed of a talented group of economists, executives, educators, and leadership experts from prestigious universities and organizations nationwide. YEI's Advisory Board serves as a guiding force in the organization and provides their own experiences in their careers to help our organization grow and thrive."
        />
      </Helmet>

      <Box pt={mdDown ? 6.9 : 8}>
        <Container fixed>
          <Grid container spacing={0} direction="column">
            {advisoryBoard.map((advisor) => (
              <Box key={advisor.name} pb={mdDown ? 6.9 : 8.1}>
                <AdvisoryMember advisor={advisor} mdDown={mdDown} />
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
