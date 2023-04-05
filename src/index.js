import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// eslint-disable-next-line no-unused-vars
import { app as firebase } from "./firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
