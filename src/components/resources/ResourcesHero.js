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
                    Resources
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3">
                    <b>This is a great subtitle.</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" className={classes.heroText}>
                    This is a great subtitle. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. At recusandae corrupti facilis
                    quis architecto placeat, eaque doloremque fugit
                    necessitatibus molestiae?
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
                          Join us as a YEI club and get access to all of our
                          resources.
                        </Typography>
                      </CardContent>
                    </Grid>
                    <Grid item>
                      <CardActions>
                        <OpenForm>
                          <Button color="primary">Register a Club</Button>
                        </OpenForm>
                        <Button color="secondary">View our Clubs</Button>
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
