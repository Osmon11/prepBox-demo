import React from "react";

import {
  Box,
  Fade,
  useScrollTrigger,
} from "@mui/material";

import { useAnchorNavigationClick } from "utils/useAnchorNavigationClick";

export default function ScrollTop(props) {
  const { children, window } = props;
  const anchorNavigation =
    useAnchorNavigationClick();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
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
