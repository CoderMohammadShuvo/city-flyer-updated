import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import publicIp from 'public-ip';
ReactDOM.render(

 
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
