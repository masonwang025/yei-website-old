import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import ScheduleTable from "./ScheduleTable";

const written = [
  { time: "9:00am", event: "Opening Ceremony" },
  { time: "9:25 am", event: "Testing" },
  { time: "10:30 am", event: "Speaker Seminar" },
  { time: "11:15 am", event: "Award Ceremony" },
];

const quizbowl = [
  { time: "11:45 am", event: "Opening Announcements" },
  { time: "12:00 pm", event: "Semi-Final Round" },
  { time: "12:40 pm", event: "Final Round" },
  { time: "1:05 pm", event: "Closing Ceremony" },
];

export default function EconBowlAgenda({ classes }) {
  const mdDown = window.innerWidth <= 960;
  return (
    <Box pt={8} pb={9} className={classes.lightMode}>
      <Container fixed>
        <Box mb={3}>
          <Typography variant="h3" gutterBottom>
            Agenda
          </Typography>
          <Typography variant="body1" gutterBottom>
            <b>All times are in PST.</b>
          </Typography>

          <Typography variant="body1" gutterBottom>
            Note it is only mandatory to stay for the QuizBowl portion if you
            qualify.
          </Typography>
        </Box>
        <Grid
          container
          direction={mdDown ? "column" : "row"}
          wrap="nowrap"
          spacing={4}
        >
          <Grid item md={6} xs={12}>
            <Typography variant="h4">
              <b>Written Exam Portion</b>
            </Typography>
            <Typography variant="body1" gutterBottom>
              9:00am - 11:30am
            </Typography>
            <Box mt={2}>
              <ScheduleTable rows={written} />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="h4">
              <b>QuizBowl Portion</b>
            </Typography>
            <Typography variant="body1" gutterBottom>
              11:45am - 1:15pm
            </Typography>
            <Box mt={2}>
              <ScheduleTable rows={quizbowl} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
