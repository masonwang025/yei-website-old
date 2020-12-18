import React from "react";
import { Container, Typography, Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import OpenForm from "../clubs/OpenForm";

const units = [
  {
    unit: "Unit 1: Budgeting",
    modules: ["Budgeting: The Basics", "Budgeting: Smart Shopping"],
  },
  {
    unit: "Unit 2: Insurance",
    modules: [
      "Life Insurance and Health Insurance",
      "Car Insurance and Home Insurance",
    ],
  },
  {
    unit: "Unit 3: Loans and Credit",
    modules: [
      "Car and Real Estate Loans",
      "Personal Loans",
      "Student Loans ",
      "Credit Cards and Credit Scores",
    ],
  },
  {
    unit: "Unit 4: Saving and Investing",
    modules: [
      "Stocks and Bonds",
      "Long Term Investments",
      "Banks and Financial Institutions",
    ],
  },
  { unit: "Unit 5: Retirement Planning", modules: ["401K", "IRA"] },
  {
    unit: "Unit 6: Taxes",
    modules: ["Importance of taxes", "Different kinds of taxes"],
  },
  {
    unit: "Unit 7: Privacy and Security",
    modules: ["Identity Theft"],
  },
];

export default function FinancialLiteracyCurriculum({ classes }) {
  return (
    <Box pt={8} pb={9} className={classes.darkerBg}>
      <Container id="ib-curriculum" fixed>
        <Typography variant="h3" gutterBottom>
          15+ Week First Step to Financial Literacy Curriculum
        </Typography>
        <Typography variant="body1" gutterBottom>
          Take your first step toward personal financial literacy by using YEI’s
          First Step to Financial Literacy Curriculum developed in partnership
          with Bank of America Better Money Habits. This curriculum set gives
          your EconClubs all the resources it will need to teach basic financial
          literacy from budgeting, to investments &#38; securities, to even
          retirement planning, this 16 tailored modules complete with slides,
          interactive activities, and detailed lesson plans will make it easy
          for your club to bring financial literacy to your campus. This
          curriculum set also prepares members for YEI’s FLIP Volunteering
          Program, find out more{" "}
          <Link to="/programs/flip" className="underline bold">
            <b>here</b>
          </Link>
          .
        </Typography>
        <Box mt={3}>
          <Grid
            container
            spacing={4}
            className={classes.orderFirst}
            alignItems="center"
          >
            <Grid item xs={12} md={8} className={classes.secondOrder}>
              <Typography gutterBottom variant="h4">
                <b>Sample Resource</b>
              </Typography>
              <Typography variant="body1">
                Note that this is just a sample resource. Get access to all our
                curriculums and resources by{" "}
                <OpenForm inline>
                  <b className="underline bold">registering as a YEI Chapter</b>
                </OpenForm>
                . Feel free to contact{" "}
                <a
                  href="mailto:admin@theyei.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  admin@theyei.org
                </a>{" "}
                for any questions.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <a
                href="https://res.cloudinary.com/masonwang/image/upload/v1608259157/yei-website/resources/flip-module1-slide.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="Resource Sample Slide"
                  cloudName="masonwang"
                  className={classes.image}
                  publicId="https://res.cloudinary.com/masonwang/image/upload/v1608259157/yei-website/resources/flip-module1-slide.png"
                />
              </a>
            </Grid>
          </Grid>
        </Box>
        <Box mt={3}>
          <Typography gutterBottom variant="h4">
            <b>Lesson Plan</b>{" "}
          </Typography>
          <Grid container>
            <Grid item xs={12} md={6}>
              {units.slice(0, 4).map((unit) => (
                <>
                  <Typography variant="h5">{unit.unit}</Typography>
                  <ul>
                    {unit.modules.map((module, index) => (
                      <li>
                        <Typography variant="body1">
                          <b>Module {index + 1}:</b> {module}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </Grid>
            <Grid item xs={12} md={6}>
              {units.slice(4).map((unit) => (
                <>
                  <Typography variant="h5">{unit.unit}</Typography>
                  <ul>
                    {unit.modules.map((module, index) => (
                      <li>
                        <Typography variant="body1">
                          <b>Module {index + 1}:</b> {module}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
