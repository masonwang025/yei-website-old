import React from "react";
import { Grid, Container, Box, Typography } from "@material-ui/core";
import { Image } from "cloudinary-react";

export default function HomeAsSeenOn({ classes }) {
  const baseUrl =
    "https://res.cloudinary.com/masonwang/image/upload/v1599110765/yei-website/as-seen-on";
  const logos = [
    {
      link:
        "https://markets.businessinsider.com/news/stocks/youth-run-nonprofit-transforming-economics-and-financial-literacy-education-1029503063#",
      imgURL: `${baseUrl}/business-insider.png`,
      brightness: 1.6,
    },
    {
      link:
        "https://finance.yahoo.com/news/youth-run-nonprofit-transforming-economics-203600069.html",
      imgURL:
        "https://res.cloudinary.com/masonwang/image/upload/v1599970154/yei-website/as-seen-on/yahoo-finance.png",
      brightness: 2.2,
    },
    {
      link:
        "https://www.marketwatch.com/press-release/youth-run-nonprofit-transforming-economics-and-financial-literacy-education-2020-08-13",
      imgURL: `${baseUrl}/market-watch.png`,
      brightness: 1.1,
    },
    {
      link:
        "https://news.yahoo.com/news/youth-run-nonprofit-transforming-economics-203600069.html",
      imgURL: `${baseUrl}/yahoo-news.png`,
      brightness: 2.2,
    },
  ];
  return (
    <Box py={5} className={classes.asSeenOn}>
      <Container fixed>
        <Grid container alignItems="center" justify="center" spacing={4}>
          <Grid item md={2} xs={12}>
            <Typography
              variant="h6"
              align="center"
              className={classes.asSeenOnTitle}
              style={{
                color: "#aaa",
              }}
            >
              Featured On
            </Typography>
          </Grid>
          {logos.map((logo) => (
            <Grid key={logo.link} item md={2} sm={3} xs={5}>
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                style={logo.style}
              >
                <Image
                  alt="seo-alt"
                  cloudName="masonwang"
                  publicId={logo.imgURL}
                  className={classes.asSeenOnLogo}
                  width="100%"
                  style={{
                    filter: `grayscale(100%) brightness(${
                      logo.brightness ? logo.brightness : 1
                    })`,
                  }}
                />
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
