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
import tabIndex from "utils/tab-index";
import { useAnchorNavigationClick } from "utils/useAnchorNavigationClick";

export default function Header(props) {
  const [tab, setTab] = useState(0);
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
      setTab(newTabIndex);
    }
  }, [location]);

  function navigateTo(event, newValue) {
    setTab(newValue);
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
              value={tab}
              onChange={navigateTo}
              centered
            >
              {homeData.headerNavigation.map(
                (section) => (
                  <Tab
                    className="header"
                    label={section.text}
                    tabIndex={
                      tabIndex[section.tabIndex]
                    }
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
          tabIndex={
            tabIndex[
              "tab-8011162b-4017-4b29-9acd-36f556ee2641"
            ]
          }
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Container>
  );
}
