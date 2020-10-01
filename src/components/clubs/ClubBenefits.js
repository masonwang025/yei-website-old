import React from "react";
import PageSection from "../PageSection";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ClubBenefits() {
  const benefits = [
    {
      title: "📚 Resources",
      content:
        "Whether you're a new club just starting out or a pre-existing club wanting to join, Youth Economics Initiative will provide you with invaluable resources including our comprehensive AP/IB Economics club curriculum and our FLIP Personal Finance club workshop guide.",
      ctaBtn: (
        <a
          href="mailto:expansion@theyei.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button color="secondary" variant="outlined">
            Request a Demo
          </Button>
        </a>
      ),
    },
    {
      title: "👩‍💼 Community",
      content:
        "Join a community of problem-solvers, innovators, and leaders. By joining YEI, you join a movement towards empowering students with economic literacy and uniting economics clubs throughout the world.",
      ctaBtn: (
        <a
          href="https://discord.gg/RC588cv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button color="secondary" variant="outlined">
            Join our Discord
          </Button>
        </a>
      ),
    },
    {
      title: "🌐 Network",
      content:
        "Take advantage of the Youth Economics Initiative's network of leaders, creators, and entrepreneurs. You'll form connections with FBLA champions, business leaders, and entrepreneurs while sharpening your leadership and teamwork skills.",
      ctaBtn: (
        <Link to="/events/econtalks">
          <Button color="secondary" variant="outlined">
            Our Professional Network
          </Button>
        </Link>
      ),
    },
    {
      title: "📅 Events",
      content:
        "Beyond club resources and mentorship, the YEI offers a variety of exclusive events, including EconBowl, EconOlympiad, EconTalks, leadership conferences, and more.",
      ctaBtn: (
        <Link to="/events">
          <Button color="secondary" variant="outlined">
            Join Our Events
          </Button>
        </Link>
      ),
    },
  ];
  return (
    <div>
      <PageSection title="Why Join?" pt={-5} pb={-5} spacing={1}>
        <Grid container spacing={4}>
          {benefits.map(({ title, content, ctaBtn }) => (
            <Grid key={title} item xs={12} sm={6}>
              <Box style={{ height: "100%" }} py={2}>
                <Grid
                  style={{ height: "100%" }}
                  container
                  direction="column"
                  alignItems="stretch"
                  wrap="nowrap"
                  justify="space-between"
                >
                  <Grid item>
                    <Typography gutterBottom variant="h5">
                      {title}
                    </Typography>
                    <Typography>{content}</Typography>
                  </Grid>
                  <Grid item>
                    <Box mt={2.5}>{ctaBtn}</Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
      </PageSection>
    </div>
  );
}
