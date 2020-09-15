import React from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import CountUpOnce from "../../CountUpOnce";
import { Image } from "cloudinary-react";
import SponsorshipProspectus from "../../../assets/files/EconBowlProspectus.pdf";

const numberContent = [
  {
    number: 750,
    caption: "Champion",
  },
  {
    number: 400,
    caption: "Second Place",
  },
  {
    number: 200,
    caption: "Third Place",
  },
  {
    number: 150,
    caption: "Fourth",
  },
];

export default function EconBowlContent({ classes }) {
  const mdDown = window.innerWidth <= 960;
  return (
    <>
      <Box pt={5} pb={9}>
        <Grid container justify="center">
          <Grid item>
            <iframe
              title="EconBowl Recap"
              src="https://www.youtube.com/embed/EEYM5cice9U"
              className={classes.econbowlRecap}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.darkerBg} py={9}>
        <Container fixed>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Box>
                <Typography align="center" variant="h3">
                  EconBowl 2020 Prizes
                </Typography>
              </Box>
            </Grid>
            <Grid container align="center" justify="space-around">
              {numberContent.map((num) => (
                <Grid key={num.number} item xs={12} sm={6} md={2}>
                  <Box mt={3}>
                    <Typography variant="h2" className={classes.dark}>
                      <b>
                        $<CountUpOnce number={num.number} duration={1.5} />
                      </b>
                    </Typography>
                    <Typography variant="body1">{num.caption}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box pt={9} pb={5}>
        <Container fixed>
          <Grid container direction="column">
            <Grid item>
              <Typography gutterBottom align="center" variant="h3">
                In Collaboration With
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                justify="center"
                alignContent="center"
                spacing={3}
              >
                <Grid item xs={11} sm={8} md={5}>
                  <a
                    href="https://wenyungff.weebly.com/?fbclid=IwAR3wFQNOc9qProsz0IgUmXto8ykihsa0sQyZIpAVcfjMDDKiFkjPPWzH3Rg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      alt="seo-alt"
                      className={classes.econbowlSupporter}
                      cloudName="masonwang"
                      publicId="https://res.cloudinary.com/masonwang/image/upload/v1600059435/yei-website/supporters/wen.png"
                    />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className={classes.econbowlHero} pb={9}>
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
                Sponsor us!
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
                <a
                  href={SponsorshipProspectus}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Sponsorship Prospectus"
                >
                  <Button
                    aria-label="button"
                    style={{
                      margin: mdDown ? "0 auto" : "0",
                      display: "block",
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Sponsorship Propsectus
                  </Button>
                </a>
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
                  alt="seo-alt"
                  cloudName="masonwang"
                  publicId="https://res.cloudinary.com/masonwang/image/upload/v1600128612/yei-website/supporters/econbowl-sponsorship-prospectus.png"
                  className={classes.econbowlProspectusLogo}
                />
              </a>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
