import { styled } from "@mui/material/styles";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const FAQAccordion = styled((props) => (
  <MuiAccordion
    disableGutters
    elevation={0}
    square
    {...props}
  />
))(({ theme }) => ({
  "&:before": {
    display: "none",
  },
  background: "#FFFFFF",
  border: "1px solid #D3D3D3",
  borderRadius: "16px",
}));

export const FAQAccordionSummary = styled(
  (props) => (
    <MuiAccordionSummary
      expandIcon={<ExpandMoreIcon />}
      {...props}
    />
  )
)(({ theme }) => ({
  padding: "32px 41px",
  "& .MuiTypography-root": {
    color: "#000000",
    lineHeight: "30px",
  },
  "& .MuiAccordionSummary-content": {
    margin: "0px",
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "#000000",
  },
}));

export const FAQAccordionDetails = styled(
  MuiAccordionDetails
)(({ theme }) => ({ padding: "0px 41px 32px" }));
