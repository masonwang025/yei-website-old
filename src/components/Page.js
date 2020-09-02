import React from "react";
import { Box } from "@material-ui/core";

export default function Page(props) {
  return (
    <div className="page">
      <Box
        style={{
          minHeight: `calc(100vh - ${window.innerWidth > 600 ? 64 : 56}px)`,
        }}
        pt={1}
      >
        {props.children}
      </Box>
    </div>
  );
}
