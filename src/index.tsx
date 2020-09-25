import React from "react";
import ReactDOM from "react-dom";

import Timesheet from "./Timesheet";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Timesheet />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
