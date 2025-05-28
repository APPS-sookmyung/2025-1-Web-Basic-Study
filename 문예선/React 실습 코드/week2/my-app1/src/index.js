import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// eslint-disable-next-line
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// eslint-disable-next-line
import NotificationList from "./chapter_06/NotificationList";
// eslint-disable-next-line
import Accommodaten from "./chapter_07/Accommodate";
// eslint-disable-next-line
import ConfirmButton from "./chapter_08/ConfirmButton";
// eslint-disable-next-line
import LandingPage from "./chapter_09/LandingPage";
// eslint-disable-next-line
import AttendanceBook from "./chapter_10/AttendanceBook";
// eslint-disable-next-line
import SignUp from "./chapter_11/SignUp";
// eslint-disable-next-line
import Calculator from "./chapter_12/Caculator";
// eslint-disable-next-line
import ProfileCard from "./chapter_13/ProfileCard";
import DarkOrLight from "./chapter_14/DarkOrLight";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
