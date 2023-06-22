import React from "react";
import { Route, Routes } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import HomePage from "../pages/homePage";
import Dashboard from "../pages/dashboard";
import SearchPage from "../pages/searchPage";
import SettingsPage from "../pages/settingsPage";
import MapPage from "../pages/mapPage";
// import Loading from "./components/Loading";

const Loading = () => {
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

const ProtectedDashboard = withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <Loading />,
});

const ProtectedSearchPage = withAuthenticationRequired(SearchPage, {
  onRedirecting: () => <Loading />,
});

const ProtectedSettingsPage = withAuthenticationRequired(SettingsPage, {
  onRedirecting: () => <Loading />,
});

const ProtectedMapPage = withAuthenticationRequired(MapPage, {
  onRedirecting: () => <Loading />,
});

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/dashboard" element={<ProtectedDashboard />} />
    <Route path="/search" element={<ProtectedSearchPage />} />
    <Route path="/map" element={<ProtectedMapPage />} />
    <Route path="/settings" element={<ProtectedSettingsPage />} />
  </Routes>
);

export default AppRoutes;
