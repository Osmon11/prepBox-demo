import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { RouterProvider } from "react-router-dom";

import router from "libs/router";
import prepBoxTheme from "utils/prep-box-theme.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={prepBoxTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
