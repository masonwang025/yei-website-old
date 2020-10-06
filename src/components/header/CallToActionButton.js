import React from "react";
import OpenForm from "../clubs/OpenForm";
import { Button, Box } from "@material-ui/core";

export default function CallToActionButton({ classes }) {
  return (
    <Box ml={2}>
      <OpenForm>
        <Button
          aria-label="register your club"
          variant="contained"
          color="primary"
          className={classes.callToAction}
        >
          Register a Club
        </Button>
      </OpenForm>
    </Box>
  );
}
