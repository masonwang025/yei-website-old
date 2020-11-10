import { Container, Grid, Typography, Box } from "@material-ui/core";
import React from "react";
import advisoryBoard from "../../data/people/advisoryBoard";
import { Image } from "cloudinary-react";
import AdvisoryHero from "../../components/team/AdvisoryHero";

export default function AdvisoryBoard() {
  const mdDown = window.innerWidth <= 960;
  return (
    <div>
      <AdvisoryHero />
      <Box pt={mdDown ? 6.9 : 8}>
        <Container fixed>
          <Grid container spacing={0} direction="column">
            {advisoryBoard.map((advisor) => (
              <Box key={advisor.name} pb={mdDown ? 6.9 : 8.1}>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction={mdDown ? "column" : "row"}
                    wrap="nowrap"
                    spacing={3}
                  >
                    <Grid item md={3} sm={4} xs={6}>
                      <Image
                        alt="YEI - Youth Economics Initiative"
                        cloudName="masonwang"
                        publicId={advisor.imgURL}
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item md={9}>
                      <Box mb={2.5}>
                        <Typography gutterBottom variant="h3">
                          <b> {advisor.name} </b>
                        </Typography>
                        <Typography variant="h5">{advisor.title}</Typography>
                      </Box>
                      {advisor.bio}
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
