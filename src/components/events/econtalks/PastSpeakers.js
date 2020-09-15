import { Grid, Box, Typography, Container } from "@material-ui/core";
import React from "react";
import speakers from "../../../data/speakers";
import SpeakerProfile from "./SpeakerProfile";

export default function PastSpeakers({ classes }) {
  return (
    <Box py={9}>
      <Container fixed>
        <Box mb={5}>
          <Typography variant="h3" align="center">
            Previous Speakers
          </Typography>
        </Box>
        <Grid container justify="center" align="center" spacing={4}>
          {speakers.reverse().map((speaker) => {
            let key = speaker.name.replace(/[\W_]+/g, "-").toLowerCase();
            let imgURL = speaker.imgURL
              ? speaker.imgURL
              : `https://res.cloudinary.com/masonwang/image/upload/v1600135590/yei-website/speakers/${key}.jpg`;
            return (
              <Grid key={key} item xs={12} sm={6} md={4}>
                <SpeakerProfile
                  name={speaker.name}
                  classes={classes}
                  bio={speaker.bio}
                  date={speaker.date}
                  imgURL={imgURL}
                  occupation={speaker.occupation}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
