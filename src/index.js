import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./Theme/Theme.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./Theme/Theme";
import { ThemeProvider } from "styled-components";
import Store from "./store/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);

reportWebVitals();
