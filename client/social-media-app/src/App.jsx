import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./components/Sidebar";
import ContentBody from "./components/ContentBody";
import {Box, Typography} from "@mui/material"
import "./index.css"

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    typography:{
      fontFamily: 'Satoshi-Medium'
    },
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#ff9800" : "#3f51b5",  // Dark: Orange, Light: Blue
      },
      text: {
        primary: darkMode ? "#ffffff" : "#000000",  // Text color for each mode
      },
      background: {
        default: darkMode ? "#101010" : "#FAFAFA",  // Dark/Light mode backgrounds
        paper: darkMode ? "#1e1e1e" : "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

     
    <ContentBody darkMode={darkMode} setDarkMode={setDarkMode}/>

    <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      

      
     

    </ThemeProvider>
  );
};

export default App;
