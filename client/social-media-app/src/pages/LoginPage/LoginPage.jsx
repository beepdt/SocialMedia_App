import { Box } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import { Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () =>{

    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");


    return(
        <Box>
            <Box 
            width="100%" 
            backgroundColor={theme.palette.background.alt} 
            p="1rem 6%" 
            textAlign="center"
            >
                <Typography
                fontWeight="bold"
                fontSize = "32px"
                color="primary"
                >
                    Socio.io
                </Typography>
            </Box>

            <Box
                width={isNonMobileScreens ? "50%" : "90%"}
                p = "2rem"
                m="2rem auto"
                borderRadius="8px"
                backgroundColor={theme.palette.background.alt}
                >
                <Typography
                    fontWeight="500" 
                    variant="h5"
                    sx={{mb:"1.5rem",fontFamily: "Satoshi-Medium"}}
                >
                    Welcome to Socio.io
                </Typography>
                <Form/>
            </Box>
        </Box>
        

        
    )
}

export default LoginPage;