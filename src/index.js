import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import Navigation from "./navigation/navigation";
import axios from "axios";
import styled from "@emotion/styled";
import { withAuthenticationRequired } from "@auth0/auth0-react";
// Auth0
import Auth0ProviderWithHistory from "./auth/auth0ProviderWithHistory";
// Local Imports
import Dashboard from "./pages/dashboard";
import SearchPage from "./pages/searchPage";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage/loginPage";
import SettingsPage from "./pages/settingsPage";
import AppRoutes from "./navigation/appRoutes";

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

const Loading = () => {
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Auth0ProviderWithHistory>
        <Navigation />
        <AppRoutes />
      
      </Auth0ProviderWithHistory>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
