import React from "react";
import ReactDOM from "react-dom";

import {List} from "./list_react.js";

export const rendering = () => { ReactDOM.render(
  <List/>,
  document.getElementById("root")
);
}