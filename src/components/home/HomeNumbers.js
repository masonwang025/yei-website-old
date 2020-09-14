import React, { useRef } from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import clubs from "../../data/clubs";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const numberContent = [
  {
    number: 1,
    caption: "​Amazing group ​of young economists",
  },
  {
    number: clubs.length,
    caption: "​Current Clubs",
  },
  {
    number: 1300,
    caption: "Active Student Numbers",
  },
];

export default function HomeNumber({ classes }) {
  return (
    <Box className={classes.numbers} py={9}>
      <Container fixed>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item>
            <Box mb={1}>
              <Typography align="center" variant="h3">
                Our Organization in Numbers
              </Typography>
            </Box>
          </Grid>
          <Grid container align="center" justify="space-around">
            {numberContent.map((num) => (
              <Grid key={num.number} item xs={12} sm={3} md={2}>
                <Box mt={2}>
                  <Typography variant="h2">
                    <b>
                      <CountUpOnce number={num.number} duration={1.42} />
                    </b>
                  </Typography>
                  <Typography variant="body1">{num.caption}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function CountUpOnce(props) {
  const countedUp = useRef(false);
  return (
    <CountUp start={0} end={props.number} duration={props.duration}>
      {({ countUpRef, start }) => (
        <VisibilitySensor
          onChange={(isVisible) => {
            if (!countedUp.current && isVisible) {
              countedUp.current = true;
              start();
            }
          }}
          delayedCall
        >
          <span ref={countUpRef} />
        </VisibilitySensor>
      )}
    </CountUp>
  );
}
