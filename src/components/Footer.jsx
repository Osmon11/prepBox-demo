import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";

import copyCircular from "assets/copy-circular.svg";
import logoV2 from "assets/logo-v2.svg";

import homeData from "utils/home-data";
import tabIndex from "utils/tab-index";
import { useAnchorNavigationClick } from "utils/useAnchorNavigationClick";

export default function Footer() {
  const anchorNavigation =
    useAnchorNavigationClick();

  function navigateTo(link) {
    return (event) =>
      anchorNavigation(event, link);
  }
  return (
    <Box className="footer">
      <Container sx={{ padding: "80px 0px" }}>
        <Paper
          className="get-in-touch-box flex align-center justify-between"
          elevation={0}
        >
          <Box className="flex align-center gap-20">
            <img
              src={copyCircular}
              alt="copy circular icon"
              loading="lazy"
            />
            <Box>
              <Typography
                color="#F1F0EE"
                variant="h5"
              >
                Let’s get in touch
              </Typography>
              <Typography
                color="rgba(255, 255, 255, 0.84)"
                variant="body1"
                sx={{ marginTop: "5px" }}
              >
                Schedule a demo or an assessment
                with us or send us query to
                info@prepanywhere.com
              </Typography>
            </Box>
          </Box>
          <Button
            className="schedule-button"
            tabIndex={
              tabIndex[
                "tab-6ba5a5b7-3192-4d8c-94d5-f3844d2c9a1b"
              ]
            }
          >
            Schedule assessment
          </Button>
        </Paper>
        <Box
          className="flex align-stretch justify-between"
          sx={{ marginTop: "60px" }}
        >
          <Box>
            <img
              className="logo-v2"
              src={logoV2}
              alt="prep box logo version 2"
              loading="lazy"
            />
            <Typography
              color="#F1F0EE"
              variant="h5"
              sx={{ marginTop: "32px" }}
            >
              Learn by Doing
            </Typography>
            <Typography
              color="rgba(255, 255, 255, 0.84)"
              variant="body2"
              sx={{ marginTop: "10px" }}
            >
              We have taught over 2,000 students,
              and over 500 of our students have
              gone
              <br /> onto graduate from North
              America's top universities
            </Typography>
            <Box
              className="flex align-center gap-10"
              sx={{ marginTop: "32px" }}
            >
              {homeData.socialMedias.map(
                (icon, index) => (
                  <Box
                    className="secial-media-icon flex-center"
                    component="button"
                    tabIndex={
                      tabIndex[icon.tabIndex]
                    }
                    key={`socialMediaIcon-${index}`}
                  >
                    <img
                      className="social-media-img"
                      src={icon.src}
                      alt={icon.alt}
                      loading="lazy"
                    />
                  </Box>
                )
              )}
            </Box>
          </Box>
          <Box
            className="flex align-center flex-wrap"
            width="400px"
          >
            {homeData.footerNavigation.map(
              (nav, index) => (
                <Box
                  className="footer-nav-link-box"
                  key={nav.link + index}
                >
                  <Link
                    to={nav.link}
                    tabIndex={
                      tabIndex[nav.tabIndex]
                    }
                  >
                    <Typography
                      color="rgba(255, 255, 255, 0.84)"
                      variant="body1"
                      onClick={navigateTo(
                        nav.link
                      )}
                    >
                      {nav.navTitle}
                    </Typography>
                  </Link>
                </Box>
              )
            )}
          </Box>
        </Box>
        <Divider
          sx={{
            marginTop: "80px",
            borderColor:
              "rgba(255, 255, 255, 0.3)",
          }}
        />
        <Box
          className="flex align-center justify-between"
          sx={{ marginTop: "32px" }}
        >
          <Typography
            color="rgba(255, 255, 255, 0.9)"
            variant="body2"
          >
            © 2023 - PrepAnywhere Inc. All Right
            Reserved
          </Typography>
          <Box className="flex align-center gap-16">
            <Link
              to="#"
              tabIndex={
                tabIndex[
                  "tab-0521213f-b157-4a7d-82a6-0881fdd0aef4"
                ]
              }
            >
              <Typography
                className="underline"
                color="rgba(255, 255, 255, 0.9)"
                variant="body2"
              >
                Privacy Policy
              </Typography>
            </Link>
            <Link
              to="#"
              tabIndex={
                tabIndex[
                  "tab-4deb88fc-f7c5-4ec1-a359-1a23e85098d9"
                ]
              }
            >
              <Typography
                className="underline"
                color="rgba(255, 255, 255, 0.9)"
                variant="body2"
              >
                Terms & Conditions
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
