import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// eslint-disable-next-line
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// eslint-disable-next-line
import NotificationList from "./chapter_06/NotificationList";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
