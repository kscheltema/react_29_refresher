import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { FavContextProvider } from "./store/fav-context";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <FavContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavContextProvider>,
  document.getElementById("root")
);
