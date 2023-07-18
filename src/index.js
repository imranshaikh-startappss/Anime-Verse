import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./Theme/Theme.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./Theme/Theme";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
