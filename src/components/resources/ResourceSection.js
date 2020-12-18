import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import ScheduleTable from "../events/econbowl/ScheduleTable";
import { Image } from "cloudinary-react";
import OpenForm from "../clubs/OpenForm";

export default function ResourceSection({
  classes,
  id,
  title,
  desc,
  sampleImgURL,
  sampleLinks,
  lessonPlan,
  darker,
}) {
  return (
    <Box
      pt={8}
      pb={9}
      className={darker ? classes.darkerBg : classes.lightMode}
    >
      <Container id={id} fixed>
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {desc}
        </Typography>
        <Box mt={2.69}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">
                <b>Sample Resource</b>
              </Typography>
              <Box py={2}>
                <a
                  href={sampleLinks[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="Resource Sample Slide"
                    cloudName="masonwang"
                    className={classes.image}
                    publicId={sampleImgURL}
                  />
                </a>
              </Box>
              <Typography variant="body1">
                Note that this is just a sample resource. Get access to all our
                curriculums and resources by{" "}
                <OpenForm inline>
                  <b className="underline bold">registering as a YEI Chapter</b>
                </OpenForm>
                . Feel free to contact{" "}
                <a
                  href="mailto:admin@theyei.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  admin@theyei.org
                </a>{" "}
                for any questions.
                <ul>
                  {sampleLinks.map((item) => (
                    <li>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">
                <b>Lesson Plan</b>
              </Typography>
              <Box mt={2}>
                <ScheduleTable
                  width={100}
                  header1="Week"
                  header2="Topic"
                  rows={lessonPlan}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
