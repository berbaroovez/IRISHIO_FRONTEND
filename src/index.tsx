import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import GlobalStyles from "./utils/GlobalStyles";

const rootEl = document.getElementById("root");

render(
  <>
    <GlobalStyles /> <App />
  </>,
  rootEl,
);
