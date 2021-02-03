import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@material-ui/core";
import OpenForm from "../clubs/OpenForm";
import { Link } from "react-router-dom";

export default function ResourcesHero({ classes }) {
  const mdDown = window.innerWidth <= 960;
  return (
    <Box className={classes.hero}>
      <Container fixed>
        <Box py={mdDown ? 8 : 13}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7} lg={8}>
              <Grid
                container
                direction="column"
                justify="center"
                wrap="nowrap"
                spacing={3}
              >
                <Grid item>
                  <Typography variant="h1" className={classes.title}>
                    EconClub Curriculum
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3">
                    <b>Making Economics and Financial Literacy Accessible</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    Youth Economics offers an in-depth portfolio of exclusive
                    curriculum slide decks, practice worksheets, interactive
                    concept reviews, and fully deployable lesson plans. Our
                    clubs gain access to our comprehensive courses that allow
                    them the frictionless ability to teach their members and
                    begin exploring. All you need is a willingness to explore
                    and a{" "}
                    <OpenForm inline>
                      <span className="underline">YEI EconClub Charter</span>
                    </OpenForm>{" "}
                    and you're on your way to a successful Economics Club.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
              <Card style={{ height: "100%" }}>
                <Box p={1.2} style={{ height: "100%" }}>
                  <Grid
                    style={{ height: "100%" }}
                    container
                    direction="column"
                    justify="space-between"
                  >
                    <Grid item>
                      <CardContent>
                        <Typography gutterBottom variant="h4">
                          <b>Get access to all our resources!</b>
                        </Typography>
                        <Typography variant="body1">
                          Join us as a YEI club and get full access to{" "}
                          <b>over 60 weeks</b> of AP Macroeconomics and
                          Microeconomics, IB Economics, and financial literacy
                          content formatted and tested for club meetings.{" "}
                        </Typography>
                      </CardContent>
                    </Grid>
                    <Grid item>
                      <CardActions>
                        <OpenForm>
                          <Button color="primary">Register a Club</Button>
                        </OpenForm>
                        <Link to="/clubs/current-clubs">
                          <Button color="secondary">View our Clubs</Button>
                        </Link>
                      </CardActions>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
