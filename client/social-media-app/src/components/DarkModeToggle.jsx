import React from "react";
import { Switch, Typography, Box, Icon } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <Box display="flex" alignItems="center" justifyContent="space-between">

    <DarkModeIcon/>  
    <Typography>Dark Mode</Typography>
    <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
  
  </Box>
);

export default DarkModeToggle;
