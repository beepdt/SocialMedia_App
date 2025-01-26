import React, { useState } from "react";
import { BrowserRouter,Navigate,Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/Profile/Profile";
import Friends from "./pages/Friends/Friends";
import LoginPage from "./pages/LoginPage/LoginPage";


import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./components/Sidebar";
import ContentBody from "./components/ContentBody";
import {Box, Typography} from "@mui/material";
import "./index.css";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./state/theme";

const App = () => {

  const mode = useSelector((state)=> state.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode]);
  

  return (


<BrowserRouter>

    <ThemeProvider theme = {theme}>
      <CssBaseline/>

          <Routes>

            <Route path ="/" element={<LoginPage/>} />
            <Route path ="/home" element={<HomePage/>} />
            <Route path ="/profile/:userId" element={<ProfilePage/>} />

          </Routes>

    </ThemeProvider>
  
</BrowserRouter>

   
  );
};

export default App;
