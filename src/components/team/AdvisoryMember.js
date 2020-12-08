import React, { useState } from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { Image } from "cloudinary-react";

export default function AdvisoryMember({ advisor, mdDown }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Grid item xs={12}>
      <Grid
        container
        direction={mdDown ? "column" : "row"}
        wrap="nowrap"
        spacing={3}
        alignContent="center"
      >
        <Grid item md={3} sm={4} xs={6}>
          <Image
            alt="YEI - Youth Economics Initiative"
            cloudName="masonwang"
            publicId={advisor.imgURL}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item md={9}>
          <Box mb={2.5}>
            <Typography gutterBottom variant="h3">
              <b> {advisor.name} </b>
            </Typography>
            <Typography variant="h5">{advisor.title}</Typography>
          </Box>
          {advisor.bioPreview}
          {advisor.bioRest &&
            (expanded ? (
              <>
                {advisor.bioRest}
                <Typography gutterBottom variant="body1">
                  [
                  <b
                    onClick={() => {
                      setExpanded(false);
                    }}
                    className="underline bold"
                  >
                    show less
                  </b>
                  ]
                </Typography>
              </>
            ) : (
              <Typography gutterBottom variant="body1">
                [
                <b
                  onClick={() => {
                    setExpanded(true);
                  }}
                  className="underline bold"
                >
                  show more
                </b>
                ]
              </Typography>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
