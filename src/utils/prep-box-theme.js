import { createTheme } from "@mui/material";

const prepBoxTheme = createTheme({
  palette: {
    primary: { main: "#ffffff" },
    text: {
      primary: "#ffffff",
      secondary: "#121217",
    },
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      fontSize: "4.688rem",
      fontWeight: 400,
    },
    button: {
      textTransform: "initial",
      fontSize: "1.13rem",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textTransform: "capitalize",
          "&.Mui-selected": {
            color: "#4098F9",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#4098F9",
        },
      },
    },
  },
});

export default prepBoxTheme;
