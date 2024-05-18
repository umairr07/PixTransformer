import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Body />
    <Footer />
  </React.StrictMode>
);
