import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";
import Navigation from "./navigation/navigation";
import DeviceDetail from "./deviceDetails/deviceDetail";
// import DeviceList from "./components/DeviceList"
import Dashboard from "./pages/dashboard";
import SearchPage from "./pages/searchPage";
import HomePage from "./pages/homePage";
import axios from "axios";
import styled from "@emotion/styled";
import LoginPage from "./pages/loginPage";


const Body = styled.body`
  margin: 0;
  padding: 0;
`;


const cors = require("cors");


const theme = {
  colors: {
    primary: "#284b63", // primary color (blue)
    complementary1: "#3c6e71", // complementary color 1 (dark blue/green)
    complementary2: "#d9d9d9", // complementary color 2 (gray)
    accent: "#1985a1", // accent color (blue/green)
    accent2: "#fca311", // accent color 2 (orange)
    dark: "#353535", // dark color (dark gray)
    text: "#ffffff", // text color (white)
    alert: "#eb5e28", // alert color (orange/red)
  },
};



ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/devices/:deviceId" element={<DeviceDetail />} />
        <Route path = "/login" element={<LoginPage />} />
      </Routes>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
