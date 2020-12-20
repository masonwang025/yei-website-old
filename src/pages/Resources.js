import React from "react";
import useStyles from "../styles/pages/resourcesStyles";
import Page from "../components/Page";
import ResourcesHero from "../components/resources/ResourcesHero";
import APMacroCurriculum from "../components/resources/APMacroCurriculum";
import APMicroCurriculum from "../components/resources/APMicroCurriculum";
import IBCurriculum from "../components/resources/IBCurriculum";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Box, Grid, Container, Typography } from "@material-ui/core";
import FinancialLiteracyCurriculum from "../components/resources/FinancialLiteracyCurriculum";

export default function Resources() {
  const classes = useStyles();
  return (
    <Page
      pageTitle="Resources"
      desc="Youth Economics Initiative (YEI) provides high quality club resources for both AP and IB economics."
    >
      <ResourcesHero classes={classes} />
      <Box py={5} className={classes.darkMode}>
        <Container>
          <Grid
            container
            justify="space-between"
            direction={window.innerWidth <= 960 ? "column" : "row"}
            spacing={4}
          >
            {[
              "AP Macroeconomics",
              "AP Microeconomics",
              "IB Economics",
              "Financial Literacy",
            ].map((name) => (
              <Grid item>
                <AnchorLink
                  href={`#${name.replace(/[\W_]+/g, "-").toLowerCase()}`}
                  offset="110px"
                >
                  <Typography
                    style={{ fontSize: "1.42em", color: "white" }}
                    align="center"
                  >
                    <b className="underline bold">{name}</b>
                  </Typography>
                </AnchorLink>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <APMacroCurriculum classes={classes} />
      <APMicroCurriculum classes={classes} />
      <IBCurriculum classes={classes} />
      <FinancialLiteracyCurriculum classes={classes} />
    </Page>
  );
}
