import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/Profile/Profile";
import LoginPage from "./pages/LoginPage/LoginPage";
import Loading from "./components/Loading";
import Friends from  "./pages/Friends/Friends"

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import { themeSettings } from "./state/theme";

const AppRoutes = () => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const isAuth = Boolean(useSelector((state) => state.token));

    useEffect(() => {
          // Only trigger loading when logging in (navigating to /home while authenticated)
          if ( isAuth) {
            setIsLoading(true);
            const timer = setTimeout(() => {
              setIsLoading(false);
            }, 650); // 1.5s delay

            return () => clearTimeout(timer);
      }
    }, 
    
    [location.pathname, isAuth]);

    return (
          <ThemeProvider theme={createTheme(themeSettings(useSelector((state) => state.mode)))}>
            <CssBaseline />
            {isLoading ? (
              <Loading />
            ) : (
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />} />
                <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />
                <Route path="/friends" element={<Friends />} />
              </Routes>
            )}
          </ThemeProvider>
        );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;