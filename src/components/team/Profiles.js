import React from "react";
import { Grid, Box, Container } from "@material-ui/core";
import ProfileCard from "./ProfileCard";
import team from "../../data/team";

export default function Profiles({ classes }) {
  return (
    <Box
      style={{ backgroundColor: "#efefef" }}
      pt={window.innerWidth < 960 ? 7 : 9}
      pb={8}
    >
      <Container fixed>
        <Grid container alignItems="center" justify="center" spacing={2}>
          {team.map((member) => {
            let key = member.name.replace(/\s+/g, "-").toLowerCase();
            let imgURL = member.imgURL
              ? member.imgURL
              : `https://res.cloudinary.com/masonwang/image/upload/v1599417517/yei-website/team/${key}.png`;
            return (
              <Grid key={key} item xs={12} md={6} lg={4}>
                <ProfileCard
                  classes={classes}
                  name={member.name}
                  imgURL={imgURL}
                  positions={member.positions}
                  linkedin={member.linkedin}
                  github={member.github}
                  email={
                    member.name.startsWith("Henry")
                      ? "admin@theyei.org"
                      : `${member.name.split(" ")[0].toLowerCase()}@theyei.org`
                  }
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
