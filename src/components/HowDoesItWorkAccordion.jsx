import { styled } from "@mui/material/styles";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const HowDoesItWorkAccordion = styled(
  (props) => (
    <MuiAccordion
      disableGutters
      elevation={0}
      square
      {...props}
    />
  )
)(({ theme }) => ({
  "&.Mui-expanded:before": {
    opacity: 1,
  },
}));

export const HowDoesItWorkAccordionSummary =
  styled((props) => (
    <MuiAccordionSummary
      expandIcon={
        <ArrowForwardIcon
          fontSize="12px"
          sx={{ marginLeft: "12px" }}
        />
      }
      {...props}
    />
  ))(({ theme }) => ({
    "&.Mui-expanded .MuiAccordionSummary-expandIconWrapper":
      {
        display: "flex",
        transform: "none",
      },
    "& .MuiAccordionSummary-expandIconWrapper": {
      display: "none",
    },
    "&.Mui-expanded .MuiTypography-root": {
      color: "#263238",
    },
    "& .MuiTypography-root": {
      color: "rgba(38, 50, 56, 0.32)",
    },
  }));

export const HowDoesItWorkAccordionDetails =
  styled(MuiAccordionDetails)(
    ({ theme }) => ({})
  );
