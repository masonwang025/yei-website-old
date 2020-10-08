import React from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import { Image } from "cloudinary-react";
import SponsorshipProspectus from "../../../assets/files/EconBowlProspectus.pdf";

export default function EconBowlSponsorUs({ classes }) {
  const mdDown = window.innerWidth <= 960;
  return (
    <Box py={8}>
      <Container fixed>
        <Grid
          container
          direction={mdDown ? "column" : "row"}
          justify="center"
          alignItems="center"
          wrap="nowrap"
          spacing={4}
        >
          <Grid item md={9}>
            <Typography
              gutterBottom
              align={mdDown ? "center" : "left"}
              variant="h3"
            >
              Sponsor Us
            </Typography>
            <Typography
              align={mdDown ? "center" : "left"}
              variant="body1"
              className={classes.econbowlHeroText}
            >
              Help inspire the next generation of leaders, thinkers, and
              builders. Put your company in front of some of the most talented
              high-schoolers in the nation. ​
              <b>
                We are a 501(c)(3) nonprofit—all donations are tax-deductible!
              </b>
            </Typography>
            <Box mt={2}>
              <Button
                aria-label="sponsorship prospectus"
                style={{
                  margin: mdDown ? "0 auto" : "0",
                  display: "block",
                }}
                variant="contained"
                color="primary"
              >
                <a
                  href={SponsorshipProspectus}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Sponsorship Prospectus"
                  style={{ color: "white" }}
                >
                  Sponsorship Propsectus
                </a>
              </Button>
            </Box>
          </Grid>
          <Grid item md={3} sm={4} xs={7}>
            <a
              href={SponsorshipProspectus}
              target="_blank"
              rel="noopener noreferrer"
              title="View Sponsorship Prospectus"
            >
              <Image
                alt="YEI EconBowl"
                cloudName="masonwang"
                publicId="https://res.cloudinary.com/masonwang/image/upload/v1602187577/yei-website/supporters/econbowl-sponsorship-prospectus.png"
                className={classes.econbowlProspectusLogo}
              />
            </a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
