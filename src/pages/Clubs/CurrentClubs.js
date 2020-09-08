import React from "react";
import ClubCard from "../../components/clubs/ClubCard";
import PageHero from "../../components/PageHero";
import { Grid, Button } from "@material-ui/core";
import clubs from "../../data/clubs";
import PageSection from "../../components/PageSection";

export default function CurrentClubs() {
  return (
    <div>
      <PageHero
        title="YEI Current Clubs"
        paragraph={`View YEI's current ${clubs.length} clubs.`}
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599407913/yei-website/manypixels-isometric/currentClubsHero.png"
        callToAction={
          <Button variant="contained" color="secondary">
            Join the List
          </Button>
        }
      />

      <PageSection pt={-2} pb={3} centerOnMobile={true}>
        <Grid container alignItems="stretch" justify="center" spacing={3}>
          {clubs.map((club) => {
            let key = club.chapter.replace(/\s+/g, "-");
            let imgURL = club.imgURL
              ? club.imgURL
              : `https://res.cloudinary.com/masonwang/image/upload/v1599534526/yei-website/clubs/${key}.png`;

            return (
              <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
                <ClubCard
                  chapter={club.chapter}
                  region={club.region}
                  imgURL={imgURL}
                  email={club.email}
                />
              </Grid>
            );
          })}
        </Grid>
      </PageSection>
    </div>
  );
}
