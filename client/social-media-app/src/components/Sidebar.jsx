import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DarkModeToggle from "./DarkModeToggle";
import SearchBar from "./SearchBar";
import { Settings } from "@mui/icons-material";

const Sidebar = ({ darkMode, setDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box
      sx={{
        value:{selectedTab},
        width: 320,
        height: 420,
        backgroundColor: "background.paper",
        borderRadius: "16px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        top: "40px",
        left: "40px", 
        bottom: "80px",
      }}
    >
      <List>

      <Box sx={{ marginTop: "auto", padding: "16px", marginLeft:2 }}>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </Box>
      

      

      <ListItemButton>
        <ListItemIcon sx={{marginLeft:2}}><HomeIcon /></ListItemIcon>
        <ListItemText primary = "Home" sx = {{marginLeft:2}}/>
      </ListItemButton>
        
        <ListItemButton>
          <ListItemIcon sx={{marginLeft:2}}><PersonIcon /></ListItemIcon>
          <ListItemText primary="Profile" sx = {{marginLeft:2}}/>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{marginLeft:2}}><GroupIcon /></ListItemIcon>
          <ListItemText primary="Friends" sx = {{marginLeft:2}}/>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{marginLeft:2}}><SettingsIcon /></ListItemIcon>
          <ListItemText sx = {{marginLeft:2}} primary="Settings" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{marginLeft:2}}><ExitToAppIcon /></ListItemIcon>
          <ListItemText sx = {{marginLeft:2}} primary="Logout"/>
        </ListItemButton>

      </List>


    </Box>
  );

  const bottomNavContent = (
    <BottomNavigation
      value={selectedTab}
      onChange={(event, newValue) => setSelectedTab(newValue)}
      showLabels
      sx={{
        alignContent:"center",
        borderRadius: "16px",
        width: "100",
        position: "fixed",
        bottom: 8,
        left: 4,
        right: 4,
        backgroundColor: "background.paper",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      <BottomNavigationAction label="Friends" icon={<GroupIcon />} />
      <BottomNavigationAction label="Logout" icon={<ExitToAppIcon />} />
    </BottomNavigation>
  );

  const tabletDrawerContent = (
    <Box
      sx={{
        width: 60,
        height: "98%",
        backgroundColor: "background.paper",
        borderRadius: "16px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        top: "40px",
        left: "48px", 
        bottom: "8px",
      }}
    >
      <List>

      <ListItemText 
        primary = "S.io" 
        primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '13px' }} 
       />

       <Box sx={{ marginTop: "auto", padding: "8px" }}>

       </Box>

      <ListItemButton>
        <ListItemIcon><HomeIcon /></ListItemIcon>
      </ListItemButton>
        
        <ListItemButton>
          <ListItemIcon><PersonIcon /></ListItemIcon>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon><GroupIcon /></ListItemIcon>
        </ListItemButton>

       <ListItemButton>
        <ListItemIcon><SettingsIcon/></ListItemIcon>
      </ListItemButton>

        <ListItemButton>
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
        </ListItemButton>

      </List>

      <Box sx={{ marginTop: 3 }}>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </Box>
      

    </Box>
  );

  return (
    <>
      <Drawer variant="permanent" sx={{ display: { xs: "none", md: "block",sm: "none" },
      width: 240,
          
       }}>
        {drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "none", sm: "block" },
          width: 60, // Collapsed width for tablet
         
        }}
      >
        {tabletDrawerContent}
      </Drawer>


      

      <Box sx={{ display: { xs: "block", sm: "none" ,md: "none"} }}>
      <Box sx={{ marginTop: 2,marginLeft:2}}>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </Box>

        {bottomNavContent}
      </Box>

      

    </>
  );
};

export default Sidebar;
