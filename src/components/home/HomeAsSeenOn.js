import React from "react";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import { Image } from "cloudinary-react";

export default function HomeAsSeenOn() {
  const baseUrl =
    "https://res.cloudinary.com/masonwang/image/upload/v1599110765/yei-website/as-seen-on";
  return (
    <Box id="home-about" py={4}>
      <Container fixed>
        <Box mb={3}>
          <Typography align="center" variant="h3">
            As Seen On
          </Typography>
        </Box>
        <Grid container alignItems="center" justify="center" spacing={3}>
          <Grid item md={3} xs={6}>
            <a
              href="https://markets.businessinsider.com/news/stocks/youth-run-nonprofit-transforming-economics-and-financial-literacy-education-1029503063#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                cloudName="masonwang"
                publicId={`${baseUrl}/business-insider.png`}
                width="100%"
              />
            </a>
          </Grid>
          <Grid item md={3} xs={6}>
            <a
              href="https://finance.yahoo.com/news/youth-run-nonprofit-transforming-economics-203600069.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                cloudName="masonwang"
                publicId={`${baseUrl}/yahoo-finance.png`}
                width="100%"
              />
            </a>
          </Grid>
          <Grid item md={3} xs={6}>
            <a
              href="https://www.marketwatch.com/press-release/youth-run-nonprofit-transforming-economics-and-financial-literacy-education-2020-08-13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                cloudName="masonwang"
                publicId={`${baseUrl}/market-watch.png`}
                width="100%"
              />
            </a>
          </Grid>
          <Grid item md={3} xs={6}>
            <a
              href="https://news.yahoo.com/news/youth-run-nonprofit-transforming-economics-203600069.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                cloudName="masonwang"
                publicId={`${baseUrl}/yahoo-news.png`}
                width="100%"
              />
            </a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
