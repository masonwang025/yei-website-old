import React from "react";
import { Container, Grid, Typography, Box, Paper } from "@material-ui/core";

export default function EarnBenefits() {
  return (
    <Box py={8}>
      <Container fixed>
        <Box mb={4.2}>
          <Typography variant="h3">EARN Benefits</Typography>
        </Box>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Grid container direction="row" spacing={4}>
              {[
                {
                  title: "🔧 Efficient",
                  content:
                    "Think of EARN like a common application for economics internships. Instead of cold emailing hundreds of professors and companies, EARN applicants apply to dozens of internships at once through a single application.",
                },
                {
                  title: "👨‍💼 Real-world experience",
                  content:
                    "EARN is one of the only programs that offer high schoolers the opportunity to gain real-world work experience, whether that’s assisting a professor with research at a world-class university or working as an intern at a top company.",
                },
                {
                  title: "🌍 Community",
                  content:
                    "By joining the EARN program, you’ll become part of a curated community of highly motivated economics students. EARN members will have the opportunity to expand their network by connecting with fellow economics enthusiasts, researchers, and interns.",
                },
              ].map((reason) => (
                <Grid key={reason.title} item xs={12}>
                  <Paper
                    style={{ height: "100%", background: "#efefef" }}
                    elevation={0}
                  >
                    <Box p={3}>
                      <Typography gutterBottom variant="h6">
                        {reason.title}
                      </Typography>
                      <Typography variant="body1">{reason.content}</Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
