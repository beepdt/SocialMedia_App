import { Box } from "@mui/material";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";


const ContentBody = ({ darkMode, setDarkMode }) =>{
    return (
        <>

    

           <Box
           sx = {{
            bgcolor: "background.paper",
            maxWidth: "100vw",
            borderRadius: "16px",
            width: {xs: "95%", sm: "660px",md:"960px"},
            height: "100vh",
            position: "fixed",
            overflowY :"auto",
            overflowX : 'hidden',
            marginLeft: {md:50,sm:15,xs:2},
            marginRight:{xs:2},
            marginTop:{md:"40px",sm:"40px",xs:"64px"},
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
           }}
           >
           <h1>Hello World</h1>
           </Box>
        </>
    )
}

export default ContentBody;