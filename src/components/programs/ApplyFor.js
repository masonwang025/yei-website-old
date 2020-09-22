import React from "react";
import { Button } from "@material-ui/core";

export default function ApplyFor({ program, color }) {
  let link;
  if (program === "FLIP")
    link =
      "https://docs.google.com/forms/d/1bjyw2csfGtJRDt4UFgCU1eyrCIV_nKECSY4LNDfvSH4/viewform?edit_requested=true";
  else if (program === "EARN")
    link =
      "https://docs.google.com/forms/d/e/1FAIpQLScJ2wmr5GuM_TSYCV-T2GiRQIXJ3UF5HvoeinJkikOZIe3YKA/viewform";

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button
        aria-label="apply"
        variant="contained"
        color={color ? color : "secondary"}
      >
        Apply for {program}
      </Button>
    </a>
  );
}
