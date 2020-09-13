import React from "react";
import PageSection from "../PageSection";
import { Grid, Typography, Box } from "@material-ui/core";

export default function ClubBenefits() {
  const benefits = [
    {
      title: "📚 Resources",
      content:
        "Whether you're a new club just starting out or a pre-existing club wanting to join, Youth Economics Initiative will provide you with invaluable resources including our comprehensive AP/IB Economics club curriculum and our FLIP Personal Finance club workshop guide.",
    },
    {
      title: "👩‍💼 Community",
      content:
        "Join a community of problem-solvers, innovators, and leaders. By joining YEI, you join a movement towards empowering students with economic literacy and uniting economics clubs throughout the world.",
    },
    {
      title: "🌐 Network",
      content:
        "Take advantage of the Youth Economics Initiative's network of leaders, creators, and entrepreneurs. You'll form connections with FBLA champions, business leaders, and entrepreneurs while sharpening your leadership and teamwork skills.",
    },
    {
      title: "📅 Events",
      content:
        "Beyond club resources and mentorship, the YEI offers a variety of exclusive events, including EconBowl, EconOlympiad, EconTalks, leadership conferences, and more.",
    },
  ];
  return (
    <div>
      <PageSection title="Why Join?" pt={1} pb={2} spacing={1}>
        <Grid container spacing={5}>
          {benefits.map(({ title, content }) => (
            <Grid key={title} item xs={12} sm={6}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Box mb={0.25}>
                    <Typography variant="h5">{title}</Typography>
                  </Box>
                  <Typography>{content}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </PageSection>
    </div>
  );
}
