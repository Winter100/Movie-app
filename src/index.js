import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { app as firebase } from "./firebase.js";

console.log(firebase);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
