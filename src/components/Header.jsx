import React, { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  AppBar,
  Box,
  Container,
  Fab,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import logo from "assets/logo.svg";

import ScrollTop from "components/ScrollTop";

import homeData from "utils/home-data";
import { useAnchorNavigationClick } from "utils/useAnchorNavigationClick";

export default function Header(props) {
  const [tabIndex, setTabIndex] = useState(0);
  const anchorNavigation =
    useAnchorNavigationClick();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const newTabIndex =
      homeData.headerNavigation.findIndex(
        (item) => item.link === location.hash
      );
    if (newTabIndex >= 0) {
      setTabIndex(newTabIndex);
    }
  }, [location]);

  function navigateTo(event, newValue) {
    setTabIndex(newValue);
    navigate(
      homeData.headerNavigation[newValue].link
    );
    anchorNavigation(
      event,
      homeData.headerNavigation[newValue].link
    );
  }
  return (
    <Container>
      <Box
        className="back-to-top-anchor"
        id="back-to-top-anchor"
      />
      <AppBar
        position="static"
        elevation={0}
      >
        <Toolbar sx={{ height: "80px" }}>
          <img
            src={logo}
            alt="prep box"
          />
          <Box width="100%">
            <Tabs
              value={tabIndex}
              onChange={navigateTo}
              centered
            >
              {homeData.headerNavigation.map(
                (section) => (
                  <Tab
                    className="header"
                    label={section.text}
                    key={section.link}
                  />
                )
              )}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
      <ScrollTop {...props}>
        <Fab
          className="scroll-back-to-top"
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Container>
  );
}
