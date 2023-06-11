import React, { useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CircleIcon from "@mui/icons-material/Circle";

import tabletImage from "assets/tablet.svg";
import doubleQuotes from "assets/double-quotes.svg";
import doubleQuotesOutlined from "assets/double_quotes_outlined.svg";
import cellularBackground from "assets/cellular_background.svg";
import learnByDoingText from "assets/learn_by_doing-text.svg";
import ourProductInAction from "assets/product_in_action_cover.svg";
import cellularBackgroundV2 from "assets/cellular_background_v2.svg";

import Header from "components/Header";
import {
  HowDoesItWorkAccordion,
  HowDoesItWorkAccordionSummary,
  HowDoesItWorkAccordionDetails,
} from "components/HowDoesItWorkAccordion";
import {
  FAQAccordion,
  FAQAccordionSummary,
  FAQAccordionDetails,
} from "components/FAQAccordion";
import Footer from "components/Footer";

import homeData from "utils/home-data.js";
import tabIndex from "utils/tab-index";

export default function Home() {
  const [
    howDoesItWorkAccordion,
    setHowDoesItWorkAccordion,
  ] = useState(0);
  const [FAQWorkAccordion, setFAQAccordion] =
    useState(null);

  function getBoxClasses(index) {
    return `full-height student-box ${
      index % 2 === 0
        ? "background-white"
        : "background-gray"
    }`;
  }
  function onChangeHowDoesItWorkAccordion(
    value,
    index
  ) {
    setHowDoesItWorkAccordion(
      value ? index : null
    );
  }
  function onChangeFAQAccordion(value, index) {
    setFAQAccordion(value ? index : null);
  }
  return (
    <Box>
      <Header />
      <Box
        className="tablet-section background-blue"
        id="home"
      >
        <Container className="flex align-center full-height">
          <Box
            zIndex={1}
            position="relative"
          >
            <Typography variant="h1">
              Learn by doing
              <br /> with the world's
              <br /> #1 online tutor
            </Typography>
            <List
              dense
              sx={{ marginTop: "42px" }}
            >
              {homeData.checkList.map((text) => (
                <ListItem
                  key={text}
                  sx={{ paddingLeft: 0 }}
                >
                  <ListItemIcon
                    sx={{ minWidth: 34 }}
                  >
                    <TaskAltIcon
                      sx={{ color: "#ffffff" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    className="list-item-text"
                    primary={text}
                  />
                </ListItem>
              ))}
            </List>
            <Button
              className="rounded-button"
              sx={{
                marginTop: "42px",
              }}
              tabIndex={
                tabIndex[
                  "tab-74eac510-cd8f-4c9d-8371-9df825dcf24f"
                ]
              }
              variant="contained"
              disableElevation
            >
              Get started for free
              <ArrowForwardIcon
                fontSize="12px"
                sx={{ marginLeft: "12px" }}
              />
            </Button>
          </Box>
        </Container>
        <img
          className="tablet_image"
          src={tabletImage}
          alt="tablet"
          loading="lazy"
        />
      </Box>
      <Box
        className="background-white"
        id="results"
      >
        <Container
          sx={{ padding: "158px 0px  115px" }}
        >
          <Typography
            variant="h2"
            color="#263238"
            align="center"
          >
            Our Student Outcomes
          </Typography>
          <Typography
            className="achievement"
            variant="body1"
            align="center"
            sx={{ marginTop: "20px" }}
          >
            We have taught over 2,000 students,
            and over 500 of our students have gone
            onto
            <br /> graduate from North America's
            top universities
          </Typography>
          <Grid
            container
            spacing={0}
            sx={{ marginTop: "60px" }}
          >
            {homeData.students.map(
              (student, index) => (
                <Grid
                  item
                  xs={4}
                  key={student.name}
                >
                  <Paper
                    className={getBoxClasses(
                      index
                    )}
                    elevation={0}
                  >
                    <Box className="flex align-center gap-9">
                      <Avatar
                        className="avatar"
                        alt={student.name}
                        src={student.avatar}
                      />
                      <Typography
                        className="uppercase"
                        color="#4098F9"
                        variant="body2"
                      >
                        {student.name}
                      </Typography>
                    </Box>
                    <Typography
                      className="university-name"
                      variant="body1"
                      sx={{ marginTop: "24px" }}
                    >
                      {student.university}
                    </Typography>
                    <Typography
                      className="student-description"
                      variant="body1"
                      sx={{ marginTop: "26px" }}
                    >
                      {student.achievement}
                      <br />
                      {student.faculty}
                    </Typography>
                    <img
                      className="university-logo"
                      src={
                        student["university-logo"]
                      }
                      alt={student.university}
                      loading="lazy"
                    />
                  </Paper>
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </Box>
      <Box className="testimonials-section background-white">
        <Container
          sx={{ padding: " 115px 0px 342px" }}
        >
          <Box
            zIndex={1}
            position="relative"
          >
            <Typography
              className="text-black"
              variant="h2"
              align="center"
            >
              Testimonials
            </Typography>
            <Typography
              className="text-black"
              variant="body1"
              align="center"
              sx={{ marginTop: "20px" }}
            >
              We are loved by the students and the
              parents, who learn through PrepBox,
              and
              <br /> we intend to keep it this way
            </Typography>
            <Grid
              container
              spacing={4}
              sx={{ marginTop: "60px" }}
            >
              {homeData.testimonials.map(
                (testimonial, index) => (
                  <Grid
                    item
                    xs={4}
                    key={
                      testimonial.author + index
                    }
                  >
                    <Paper
                      className="testimonial-card"
                      elevation={0}
                      sx={{
                        marginTop:
                          testimonial.marginTop,
                      }}
                    >
                      <Box className="flex align-top gap-16">
                        <img
                          src={doubleQuotes}
                          alt="double quotes"
                          loading="lazy"
                        />
                        <Typography
                          variant="body1"
                          color="#121217"
                        >
                          {testimonial.text}
                        </Typography>
                      </Box>
                      <Box
                        className="flex align-center gap-16"
                        sx={{ marginTop: "26px" }}
                      >
                        <Avatar
                          className="avatar"
                          alt={testimonial.author}
                          src={testimonial.avatar}
                        />
                        <Typography
                          color="#263238"
                          variant="body1"
                        >
                          {testimonial.author}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                )
              )}
            </Grid>
          </Box>
        </Container>
        <img
          className="cellular-background"
          src={cellularBackground}
          alt="cellular background"
          loading="lazy"
        />
        <img
          className="learnByDoing-text"
          src={learnByDoingText}
          alt="learn by doing text"
          loading="lazy"
        />
      </Box>
      <Box className="background-white">
        <Container
          sx={{ padding: "100px 0px 80px" }}
        >
          <Box
            zIndex={1}
            position="relative"
          >
            <Typography
              className="text-black"
              position="relative"
              variant="body1"
              align="center"
              sx={{ marginTop: "20px" }}
            >
              We are strong believers that the
              application of theory in the form of
              problem
              <br /> solving is as equally
              important as theory in learning.
              <br /> Our product reflects these
              values.
              <img
                className="double-quotes-outlined"
                src={doubleQuotesOutlined}
                alt="double quotes outlined"
                loading="lazy"
              />
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box
        className="background-white"
        position="relative"
      >
        <Container sx={{ padding: "100px 0px" }}>
          <Box>
            <Typography
              className="text-black"
              variant="h2"
              align="center"
            >
              How does it work?
            </Typography>
            <Box sx={{ marginTop: "100px" }}>
              {homeData.howItWorks.map(
                (item, index) => (
                  <React.Fragment
                    key={item.title}
                  >
                    <HowDoesItWorkAccordion
                      expanded={
                        howDoesItWorkAccordion ===
                        index
                      }
                      onChange={(_event, value) =>
                        onChangeHowDoesItWorkAccordion(
                          value,
                          index
                        )
                      }
                      sx={{ width: "50%" }}
                    >
                      <HowDoesItWorkAccordionSummary
                        tabIndex={
                          tabIndex[item.tabIndex]
                        }
                      >
                        <Box className="flex align-center">
                          <Typography
                            variant="body2"
                            fontWeight={700}
                            color="#263238"
                          >{`${
                            index + 1
                          }.`}</Typography>
                          <Typography
                            variant="h5"
                            color="#263238"
                            fontWeight={700}
                            sx={{
                              marginLeft: "30px",
                            }}
                          >
                            {item.title}
                          </Typography>
                        </Box>
                      </HowDoesItWorkAccordionSummary>
                      <HowDoesItWorkAccordionDetails>
                        <Box
                          sx={{
                            marginLeft: "40px",
                          }}
                        >
                          <Typography
                            variant="body1"
                            color="#263238"
                          >
                            {item.subtitle}
                          </Typography>
                          <Typography
                            variant="body1"
                            color="#263238"
                            fontStyle="italic"
                            sx={{
                              marginTop: "24px",
                            }}
                          >
                            {item.caption}
                          </Typography>
                        </Box>
                      </HowDoesItWorkAccordionDetails>
                    </HowDoesItWorkAccordion>
                    <img
                      className="accordion-media"
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                  </React.Fragment>
                )
              )}
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        className="background-white"
        position="relative"
        id="product"
      >
        <Container
          sx={{ padding: "80px 0px 0px" }}
        >
          <Box>
            <Typography
              className="text-black"
              variant="h2"
              align="center"
            >
              Our product in action
            </Typography>
            <img
              className="our-product-in-action-cover"
              src={ourProductInAction}
              alt="Our product in action"
              loading="lazy"
            />
          </Box>
        </Container>
      </Box>
      <Box
        className="background-white"
        position="relative"
        id="team"
      >
        <Container
          sx={{ padding: "140px 0px  86px" }}
        >
          <Box
            zIndex={1}
            position="relative"
          >
            <Typography
              variant="h2"
              color="#000000"
              align="center"
            >
              Tutors
            </Typography>
            <Typography
              variant="body1"
              color="#263238"
              align="center"
              sx={{ marginTop: "24px" }}
            >
              The PrepBox team is composed of
              graduates from top schools and are
              tutors on the platform
            </Typography>
            <Box
              className="full-width flex align-center justify-center gap-25"
              sx={{ marginTop: "60px" }}
            >
              {homeData.tutors.map((tutor) => (
                <Paper
                  className="tutor-card"
                  elevation={0}
                  key={tutor.name}
                >
                  <img
                    className="tutor-image"
                    src={tutor.image}
                    alt={tutor.name}
                    loading="lazy"
                  />
                  <Typography
                    color="#263238"
                    fontWeight={600}
                    variant="h5"
                    sx={{ marginTop: "20px" }}
                  >
                    {tutor.name}
                  </Typography>
                  <Typography
                    color="#263238"
                    variant="body1"
                    sx={{ marginTop: "5px" }}
                  >
                    {tutor.position}
                  </Typography>
                  <Box
                    className="flex align-center gap-5"
                    sx={{ marginTop: "6px" }}
                  >
                    <Typography
                      variant="body1"
                      color="#263238"
                    >
                      Tutor Experience:
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      color="#4098F9"
                    >
                      {tutor.tutorExperience}
                    </Typography>
                  </Box>
                  <Box
                    className="flex align-center gap-5"
                    sx={{ marginTop: "6px" }}
                  >
                    <Typography
                      variant="body1"
                      color="#263238"
                    >
                      Alma mater:
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      color="#4098F9"
                    >
                      {tutor.almaTutor}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>
          <img
            className="cellular-background-v2"
            src={cellularBackgroundV2}
            alt="cellular background v2"
            loading="lazy"
          />
        </Container>
      </Box>
      <Box
        className="background-white"
        position="relative"
        id="pricing"
      >
        <Container
          sx={{ padding: "100px 0px  90px" }}
        >
          <Box
            zIndex={1}
            position="relative"
          >
            <Typography
              variant="h2"
              color="#000000"
              align="center"
            >
              Our Pricing
            </Typography>
            <Typography
              variant="body1"
              color="#263238"
              align="center"
              sx={{ marginTop: "24px" }}
            >
              Beginning at $14 per hour, we offer
              the highest-quality math tutoring at
              the most competitive rates
            </Typography>
            <Box
              className="full-width flex align-center justify-center gap-9"
              sx={{ marginTop: "60px" }}
            >
              {homeData.pricing.map(
                (pricing, index) => (
                  <Paper
                    className="pricing-card"
                    elevation={0}
                    key={pricing.name}
                  >
                    <Typography
                      color="#263238"
                      fontWeight={700}
                      variant="h4"
                    >
                      {pricing.name}
                    </Typography>
                    <Typography
                      color="#263238"
                      fontWeight={500}
                      variant="body1"
                      sx={{ marginTop: "2rem" }}
                    >
                      {pricing.sessionLimit}
                    </Typography>
                    <Typography
                      color="#4098F9"
                      fontWeight={600}
                      variant="h4"
                      sx={{ marginTop: "3rem" }}
                    >
                      {pricing.costPerMonth}
                    </Typography>
                    <List
                      dense
                      sx={{ marginTop: "5rem" }}
                    >
                      {pricing.checkList.map(
                        (
                          item,
                          checkListIndex
                        ) => (
                          <ListItem
                            className={`pricing-check-list-item ${
                              item.included
                                ? "active"
                                : ""
                            }`}
                            key={
                              pricing.name +
                              checkListIndex
                            }
                            sx={{
                              paddingLeft: 0,
                            }}
                          >
                            <ListItemIcon
                              className={`pricing-check-icon ${
                                item.included
                                  ? "active"
                                  : ""
                              }`}
                              sx={{
                                minWidth: 34,
                              }}
                            >
                              <TaskAltIcon />
                            </ListItemIcon>
                            <ListItemText
                              className={`pricing-list-text ${
                                item.included
                                  ? "active"
                                  : ""
                              }`}
                              primary={item.text}
                              primaryTypographyProps={{
                                variant: "body1",
                              }}
                            />
                          </ListItem>
                        )
                      )}
                    </List>
                    <Button
                      className="pricing-button"
                      sx={{ marginTop: "5rem" }}
                      tabIndex={
                        tabIndex[pricing.tabIndex]
                      }
                    >
                      <Typography
                        variant="body1"
                        fontWeight={600}
                      >
                        Book Assessment
                      </Typography>
                    </Button>
                  </Paper>
                )
              )}
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        className="background-white"
        position="relative"
        sx={{ marginTop: "180px" }}
      >
        <Container>
          <Box position="relative">
            <Paper className="session-times-box flex align-center justify-center gap-100">
              <Box>
                <Typography
                  variant="h4"
                  fontWeight={500}
                >
                  Our Session Times
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  sx={{ marginTop: "18px" }}
                >
                  You can sign up to attend any of
                  our sessions
                  <br /> to study with our tutors.
                  <br /> All times are U.S.
                  Eastern Standard Time
                </Typography>
              </Box>
              <Box>
                {homeData.sessionTimes.map(
                  (sessionTime) => (
                    <Box
                      className="flex align-center gap-5"
                      sx={{ marginTop: "15px" }}
                      key={sessionTime.day}
                    >
                      <CircleIcon
                        sx={{
                          width: "5px",
                          height: "5px",
                        }}
                      />
                      <Typography
                        variant="body1"
                        fontWeight={700}
                      >
                        {sessionTime.day}
                      </Typography>
                      <Typography variant="body1">
                        {`- ${sessionTime.text}`}
                      </Typography>
                    </Box>
                  )
                )}
              </Box>
            </Paper>
          </Box>
          <Box
            zIndex={1}
            position="relative"
            sx={{ padding: "280px 0px  160px" }}
          >
            <Typography
              variant="h2"
              color="#000000"
              align="center"
            >
              FAQ'S
            </Typography>
            <Box sx={{ marginTop: "50px" }}>
              {homeData.FAQ.map((item, index) => (
                <FAQAccordion
                  expanded={
                    index === FAQWorkAccordion
                  }
                  onChange={(_event, value) =>
                    onChangeFAQAccordion(
                      value,
                      index
                    )
                  }
                  sx={{ marginTop: "14px" }}
                  key={item.quession}
                >
                  <FAQAccordionSummary
                    tabIndex={
                      tabIndex[item.tabIndex]
                    }
                  >
                    <Typography
                      className="text-black"
                      variant="h6"
                      fontWeight={600}
                    >
                      {item.quession}
                    </Typography>
                  </FAQAccordionSummary>
                  <FAQAccordionDetails>
                    <Typography
                      className="text-black"
                      variant="body1"
                    >
                      {item.answer}
                    </Typography>
                  </FAQAccordionDetails>
                </FAQAccordion>
              ))}
            </Box>
            <Box
              textAlign="center"
              sx={{ marginTop: "70px" }}
            >
              <Typography
                color="#263238"
                align="center"
                variant="h5"
              >
                Still have questions?
              </Typography>
              <Typography
                color="#8D9397"
                align="center"
                variant="body1"
                sx={{ marginTop: "20px" }}
              >
                Get in touch with our team.
              </Typography>
              <Button
                className="contact-button"
                variant="outlined"
                sx={{
                  marginTop: "35px",
                }}
                tabIndex={
                  tabIndex[
                    "tab-c439bf24-4cfa-4b78-bd7c-5d479b2180f8"
                  ]
                }
              >
                Contact
              </Button>
            </Box>
          </Box>
          <Box className="wrapper-cellular-background-v2">
            <img
              className="cellular-background-v2"
              src={cellularBackgroundV2}
              alt="cellular background v2"
              loading="lazy"
            />
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
