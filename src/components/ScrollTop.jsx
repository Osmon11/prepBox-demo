import React from "react";

import {
  Box,
  Fade,
  useScrollTrigger,
} from "@mui/material";

import { useAnchorNavigationClick } from "utils/useAnchorNavigationClick";

export default function ScrollTop(props) {
  const { children } = props;
  const anchorNavigation =
    useAnchorNavigationClick();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    anchorNavigation(
      event,
      "#back-to-top-anchor"
    );
  };

  return (
    <Fade in={trigger}>
      <Box
        className="scroll-top-box"
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        {children}
      </Box>
    </Fade>
  );
}
