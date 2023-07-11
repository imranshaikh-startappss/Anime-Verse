import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// content: '""',
// display: "block",
// borderRadius: "1px",
// backgroundColor: "transparent",
// marginBottom: "3px",
// },
// "&:hover::after": {
// borderBottom: "3px solid black",
// marginBottom: "0px",
// backgroundColor: "transparent",
// },
// "&:hover::after": {
//   content: '""',
//   display: "block",
//   borderBottom: "3px solid black",
//   borderRadius: "1px",
//   backgroundColor: "transparent",
//   bo
// },
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
