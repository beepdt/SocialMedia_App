import React from "react";
import { Switch, Typography, Box, Icon } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <Box display="flex" alignItems="center" justifyContent="space-between">

   
    <Typography
    variant="h3"
     sx={{
      fontFamily: "Thunder",
      fontWeight:700,
      display:{xs:'block',sm:'none',md:'block'}
    }}>Socio.io</Typography>
    <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
  
  </Box>
);

export default DarkModeToggle;
