import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const SidebarItem = ({ icon, label, onClick }) => (
  <ListItemButton onClick={onClick}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={label} />
  </ListItemButton>
);

export default SidebarItem;
