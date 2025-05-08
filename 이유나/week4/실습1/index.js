import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVital";

import library from "./실습2/library";
import Clock from "./실습3/Clock";

setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
    document.getElementById("root")
  );
}, 1000);

reportWebVitals();
