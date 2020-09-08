import React from "react";
import PageSection from "../PageSection";
import { Grid, Typography, Box } from "@material-ui/core";
import { Image } from "cloudinary-react";

export default function ClubBenefits() {
  const imgURLBase =
    "https://res.cloudinary.com/masonwang/image/upload/v1599500111/yei-website/manypixels-isometric/club-benefits";
  const benefits = [
    {
      title: "Resources",
      content:
        "Whether you're a new club just starting out or a pre-existing club wanting to join, Youth Economics Initiative will provide you with invaluable resources including our comprehensive AP/IB Economics club curriculum and our FLIP Personal Finance club workshop guide.",
      imgURL: `${imgURLBase}/resources.png`,
    },
    {
      title: "Community",
      content:
        "Join a community of problem-solvers, innovators, and leaders. By joining YEI, you join a movement towards empowering students with economic literacy and uniting economics clubs throughout the world.",
      imgURL: `${imgURLBase}/community.png`,
    },
    {
      title: "Network",
      content:
        "Take advantage of the Youth Economics Initiative's network of leaders, creators, and entrepreneurs. You'll form connections with FBLA champions, business leaders, and entrepreneurs while sharpening your leadership and teamwork skills.",
      imgURL: `${imgURLBase}/network.png`,
    },
    {
      title: "Events",
      content:
        "Beyond club resources and mentorship, the YEI offers a variety of exclusive events, including EconBowl, EconOlympiad, EconTalks, leadership conferences, and more.",
      imgURL: `${imgURLBase}/events.png`,
    },
  ];
  return (
    <div>
      <PageSection title="Why Join?">
        <Grid container spacing={4}>
          {benefits.map(({ title, content, imgURL }) => (
            <Grid key={title} item xs={12} sm={6} lg={3}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Box mb={0.25}>
                    <Typography variant="h5">{title}</Typography>
                  </Box>
                  <Typography>{content}</Typography>
                </Grid>
                <Grid item>
                  <Image
                    style={{
                      width: "70%",
                    }}
                    cloudName="masonwang"
                    publicId={imgURL}
                  />
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </PageSection>
    </div>
  );
}
