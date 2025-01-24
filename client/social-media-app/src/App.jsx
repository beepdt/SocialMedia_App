import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./components/Sidebar";
import {Box, Typography} from "@mui/material"

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#ff9800" : "#3f51b5",  // Dark: Orange, Light: Blue
      },
      text: {
        primary: darkMode ? "#ffffff" : "#000000",  // Text color for each mode
      },
      background: {
        default: darkMode ? "#121212" : "#FAFAFA",  // Dark/Light mode backgrounds
        paper: darkMode ? "#1e1e1e" : "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
      component="main"
      sx={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        top: "40px",
        left: "10px",
        borderRadius: "16px",
        maxWidth: "100vw",
        marginLeft: { xs: 0, sm: 10, md: 48 }, 
        marginRight:{xs: 1, sm: 2, md: 22},
        //marginBottom: {xs:60},
        padding: 1,
        height: "98vh",
        maxHeight:"98vh",
        backgroundColor: "background.paper" // Responsive margin
      }}
    >
      <Typography
        variant="h3"
        sx={{
          maxWidth:"100%",
          marginBottom: 2,
            padding: 3,
            fontWeight: "bold",
            wordBreak: "break-word"  // Padding
        }}
      >
        Welcome to the Social Media App dgdfgdfgdfgdfgdfgdgdgdgdfgdfgdfgdfg
      </Typography>
    </Box>


      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />

      
     

    </ThemeProvider>
  );
};

export default App;
