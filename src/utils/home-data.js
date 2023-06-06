import avatar1 from "assets/ava-1.svg";
import avatar2 from "assets/ava-2.svg";
import avatar3 from "assets/ava-3.svg";
import avatar4 from "assets/ava-4.svg";
import avatar5 from "assets/ava-5.svg";
import avatar6 from "assets/ava-6.svg";
import avatar7 from "assets/ava-7.svg";
import avatar8 from "assets/ava-8.svg";
import avatar9 from "assets/ava-9.svg";

import harvard from "assets/harvard.svg";
import toronto from "assets/toronto.svg";
import wilfred_laurier from "assets/wilfred_laurier.svg";
import western from "assets/western.svg";
import pennsylvania from "assets/pennsylvania.svg";
import mcGill from "assets/mcGill.svg";
import georgetown from "assets/georgetown.svg";
import northwestern from "assets/northwestern.svg";

import testimonialAvatar from "assets/ava_review.svg";

import book_free_assessment from "assets/book_free_assessment.svg";

import tutor1 from "assets/tutor-1.svg";
import tutor2 from "assets/tutor-2.svg";
import tutor3 from "assets/tutor-3.svg";

import youtube from "assets/youtube.svg";
import tictok from "assets/tictok.svg";
import linkedIn from "assets/linked-in.svg";
import twitter from "assets/twitter.svg";
import slack from "assets/slack.svg";

const homeData = {
  headerNavigation: [
    {
      text: "Home",
      link: "#home",
      tabIndex:
        "tab-0c937173-c987-4a02-a203-cfbb9395c3ab",
    },
    {
      text: "Results",
      link: "#results",
      tabIndex:
        "tab-9a9f3eb4-c61d-434d-89fc-ed38aec120ea",
    },
    {
      text: "Product",
      link: "#product",
      tabIndex:
        "tab-f9105530-62b7-4238-8436-9805e6f3cf9c",
    },
    {
      text: "Team",
      link: "#team",
      tabIndex:
        "tab-a2670897-8156-4166-b0c5-1079ba301bbe",
    },
    {
      text: "Pricing",
      link: "#pricing",
      tabIndex:
        "tab-90387806-18bb-44be-9a3f-a443acd9645a",
    },
    {
      text: "Contact",
      link: "#contact",
      tabIndex:
        "tab-1d52d2fc-959e-4cbe-9190-c57e888f278a",
    },
  ],
  checkList: [
    "Proven lectures and questions",
    "Tutors with 20+ yrs of experience",
    "Courses designed just for you",
  ],
  students: [
    {
      name: "Olivia Nie",
      avatar: avatar1,
      university: "Harvard University",
      "university-logo": harvard,
      achievement: "7/7 in IB Higher Level Math",
      faculty: "A.B. in Government",
    },
    {
      name: "Mike Woo",
      avatar: avatar2,
      university: "University of Toronto",
      "university-logo": toronto,
      achievement: "99% in Calculus",
      faculty: "B.S. Physics and Math",
    },
    {
      name: "Maxim Barron Lee",
      avatar: avatar3,
      university: "Wilfred Laurier University",
      "university-logo": wilfred_laurier,
      achievement: "91% in Calculus",
      faculty: "B.S. Financial Mathematics",
    },
    {
      name: "Kasra Rahmani",
      avatar: avatar4,
      university: "University of Toronto",
      "university-logo": toronto,
      achievement: "92% in Calculus",
      faculty: "B.S. Comp Sci & Statistics",
    },
    {
      name: "Sonia Sharma",
      avatar: avatar5,
      university: "Western University",
      "university-logo": western,
      achievement: "96% in Calculus",
      faculty: "Medicine",
    },
    {
      name: "Andy Lee",
      avatar: avatar6,
      university: "University of Pennsylvania",
      "university-logo": pennsylvania,
      achievement: "100% in Calculus",
      faculty: "B.S. Systems Engineering",
    },
    {
      name: "Kimberly Seaman",
      avatar: avatar7,
      university: "McGill University",
      "university-logo": mcGill,
      achievement: "99% in Calculus",
      faculty: "B.S. Chemical Engineering",
    },
    {
      name: "Esther Sohn",
      avatar: avatar8,
      university: "Georgetown University",
      "university-logo": georgetown,
      achievement: "95% in Calculus",
      faculty: "B.S. Foreign Services",
    },
    {
      name: "Raymond Jang",
      avatar: avatar9,
      university: "Northwestern University",
      "university-logo": northwestern,
      achievement: "5/5 IB Higher Level Math",
      faculty: "B.S. Physics",
    },
  ],
  testimonials: [
    {
      author: "Trinity Hsu",
      avatar: testimonialAvatar,
      text: "I wanted to update you on my university admissions. I got into McMaster engineering, University of Toronto mechanical engineering, Waterloo Mechatronics engineering and also Vet school in Scotland!",
    },
    {
      author: "Celine Chung",
      avatar: testimonialAvatar,
      text: "I got into all my Waterloo choices today! Computer Science, Computer Science & BBA double degree, Math & Business double degree. Thank you so much for helping me during my math journey.",
    },
    {
      author:
        "George Mavroudis, Parent of Gregory",
      avatar: testimonialAvatar,
      text: "Gregory wrote his final test today in Math and said he felt pretty comfortable in most of it. I want to thank you...as you made a significant amount of progress in building his confidence and enjoyment of the subject.",
    },
    {
      author: "Trinity Hsu",
      avatar: testimonialAvatar,
      text: "Robyn got 100% for grade 10 math this year. Thank you so much...Robyn will be starting the grade 11 math classes with you in the summer.",
      marginTop: "40px",
    },
    {
      author: "Parent of Robyn",
      avatar: testimonialAvatar,
      text: "I hope you had a good weekend. I wanted to update you on my university admissions. I got into Mcmaster engineering, U of T mechanical engineering, Waterloo Mechatronics engineering and also Vet school in Scotland!",
    },
    {
      author: "Trinity Hsu",
      avatar: testimonialAvatar,
      text: "Robyn got 100% for grade 10 math this year. Thank you so much...Robyn will be starting the grade 11 math classes with you in the summer.",
      marginTop: "40px",
    },
  ],
  howItWorks: [
    {
      title: "Book Free Assessment",
      subtitle:
        "Take an assessment with our exprienced tutor to understand where you are for your grade and identify weaknesses",
      caption:
        '"I really felt like the tutor understood exactly what I needed to do to improve my grades after the assessment"',
      image: book_free_assessment,
      tabIndex:
        "tab-0c0fd221-10aa-4fb2-9dd5-bc8512bcc4ad",
    },
    {
      title: "Login to your account",
      subtitle:
        "Take an assessment with our exprienced tutor to understand where you are for your grade and identify weaknesses",
      caption:
        '"I really felt like the tutor understood exactly what I needed to do to improve my grades after the assessment"',
      image: book_free_assessment,
      tabIndex:
        "tab-c5ee5db6-5350-4e02-b449-a102d647f53d",
    },
    {
      title: "Watch mini-lectures",
      subtitle:
        "Take an assessment with our exprienced tutor to understand where you are for your grade and identify weaknesses",
      caption:
        '"I really felt like the tutor understood exactly what I needed to do to improve my grades after the assessment"',
      image: book_free_assessment,
      tabIndex:
        "tab-c2f1f290-f86c-4656-90d3-c039c7580396",
    },
    {
      title: "Begin solving questions",
      subtitle:
        "Take an assessment with our exprienced tutor to understand where you are for your grade and identify weaknesses",
      caption:
        '"I really felt like the tutor understood exactly what I needed to do to improve my grades after the assessment"',
      image: book_free_assessment,
      tabIndex:
        "tab-f1d3a2ea-0724-44b1-8c62-b561ab4bb2a9",
    },
    {
      title: "Submit and get marked real-time",
      subtitle:
        "Take an assessment with our exprienced tutor to understand where you are for your grade and identify weaknesses",
      caption:
        '"I really felt like the tutor understood exactly what I needed to do to improve my grades after the assessment"',
      image: book_free_assessment,
      tabIndex:
        "tab-ff5e153d-21fd-4a6f-bfc2-7285950ec3e7",
    },
  ],
  tutors: [
    {
      image: tutor1,
      name: "Min Lee",
      position: "Founder/CEO",
      tutorExperience: "20 years",
      almaTutor: "University of Toronto",
    },
    {
      image: tutor2,
      name: "Sam Kwon",
      position: "Chief Growth Officer",
      tutorExperience: "2 years",
      almaTutor: "MIT",
    },
    {
      image: tutor3,
      name: "Jina Seok",
      position: "Head Tutor - Canada",
      tutorExperience: "4 years",
      almaTutor: "University of Toronto",
    },
  ],
  pricing: [
    {
      name: "Basic",
      sessionLimit:
        "One 2-hour sessions per week.",
      costPerMonth: "$200/mo",
      tabIndex:
        "tab-65c6f8d3-b177-4daa-bdab-7a611bef90a4",
      checkList: [
        {
          text: "Weekly sessions",
          included: true,
        },
        {
          text: "Schoolwork help",
          included: true,
        },
        { text: "Rescheduling", included: false },
        {
          text: "Homework assignment",
          included: false,
        },
      ],
    },
    {
      name: "Accelerated",
      sessionLimit:
        "Two 2-hour sessions per week.",
      costPerMonth: "$350/mo",
      tabIndex:
        "tab-ee357402-906c-44b6-9da2-5c07a0ed5f88",
      checkList: [
        {
          text: "Weekly sessions",
          included: true,
        },
        {
          text: "Schoolwork help",
          included: true,
        },
        { text: "Rescheduling", included: true },
        {
          text: "Homework assignment",
          included: false,
        },
      ],
    },
    {
      name: "Light Speed",
      sessionLimit:
        "Unlimited sessions per week.",
      costPerMonth: "$450/mo",
      tabIndex:
        "tab-aea8b690-47b8-4c60-900f-ffadd6717c43",
      checkList: [
        {
          text: "Weekly sessions",
          included: true,
        },
        {
          text: "Schoolwork help",
          included: true,
        },
        { text: "Rescheduling", included: true },
        {
          text: "Homework assignment",
          included: true,
        },
      ],
    },
  ],
  sessionTimes: [
    {
      day: "Mon",
      text: "2:00pm",
    },
    {
      day: "Tue",
      text: "6:30am | 4:30pm | 5:00pm",
    },
    {
      day: "Wed",
      text: "6:30am | 4:30pm | 5:00pm",
    },
    {
      day: "Thu",
      text: "6:30am | 8:00pm | 9:00pm",
    },
    {
      day: "Sat",
      text: "6:30am | 10:00am | 10:30am",
    },
  ],
  FAQ: [
    {
      quession: "What is PrepBox?",
      answer: "answer",
      tabIndex:
        "tab-6f333371-8c37-4c97-9fca-4b7775386073",
    },
    {
      quession: "Who should use PrepBox?",
      answer: "answer",
      tabIndex:
        "tab-920fd890-9ea0-49d7-a7ad-a1ddadb90927",
    },
    {
      quession:
        "How is PrepBox different from other online tutoring services?",
      answer: "answer",
      tabIndex:
        "tab-29c3a348-e3b7-4e7b-8dad-a37b0e91f7a4",
    },
    {
      quession:
        "Is PrepBox better than in-person tutoring?",
      answer: "answer",
      tabIndex:
        "tab-5aee2649-5e75-4eb5-81ce-9ab3cdd557dc",
    },
    {
      quession:
        "What is learning by doing and how does it work?",
      answer: "answer",
      tabIndex:
        "tab-c539d9d3-ce17-47d8-af4a-63e61f350982",
    },
    {
      quession: "Does PrepBox assign homework?",
      answer: "answer",
      tabIndex:
        "tab-a09a6173-1c94-4c32-a013-d49d9dd117b0",
    },
  ],
  socialMedias: [
    {
      src: youtube,
      alt: "youtube",
      tabIndex:
        "tab-f0a4b996-f41e-4246-aaca-a8c9005f8ad1",
    },
    {
      src: tictok,
      alt: "tictok",
      tabIndex:
        "tab-b0b80244-69d5-4fab-aafd-029822057ecc",
    },
    {
      src: linkedIn,
      alt: "linkedIn",
      tabIndex:
        "tab-cfc431a5-21db-4b58-996b-559ce697eeeb",
    },
    {
      src: twitter,
      alt: "twitter",
      tabIndex:
        "tab-af6025e7-5abe-44e0-9322-425e44f7c1eb",
    },
    {
      src: slack,
      alt: "slack",
      tabIndex:
        "tab-8a5003c4-82dc-4be0-af42-539de2d0d338",
    },
  ],
  footerNavigation: [
    {
      navTitle: "Home",
      link: "#home",
      tabIndex:
        "tab-a1a9cfc2-7f34-43df-9879-eab070d3269f",
    },
    {
      navTitle: "Feedback",
      link: "",
      tabIndex:
        "tab-561021fe-10ce-402a-8c5d-40d9b5bdcfda",
    },
    {
      navTitle: "Results",
      link: "#results",
      tabIndex:
        "tab-cff690aa-9382-4c1d-a0f7-c1247a00a156",
    },
    {
      navTitle: "Contact",
      link: "#contact",
      tabIndex:
        "tab-4cbb53d6-bfa9-404b-8496-b4f59b5e7364",
    },
    {
      navTitle: "Product",
      link: "#product",
      tabIndex:
        "tab-6bd464a6-ce7c-445e-ae97-fefd9c86514e",
    },
    {
      navTitle: "Slack",
      link: "",
      tabIndex:
        "tab-e51116f4-2dff-4aaf-9fcd-b5df1cb31f82",
    },
    {
      navTitle: "Team",
      link: "#team",
      tabIndex:
        "tab-9bd64d14-76d9-4a39-92fb-c3111693ffa9",
    },
    {
      navTitle: "Become an Affiliate",
      link: "",
      tabIndex:
        "tab-3efb5930-afbd-496c-b7dc-c72dd03e7e77",
    },
    {
      navTitle: "Pricing",
      link: "#pricing",
      tabIndex:
        "tab-d5a00f04-9549-4360-bc2d-4f2545eb5282",
    },
  ],
};

export default homeData;
