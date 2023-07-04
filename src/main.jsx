import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App/App";
import store from "./store/store";
import "./main.css";

const rootNode = document.getElementById("root");
const root = createRoot(rootNode);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
