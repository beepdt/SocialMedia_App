import { Box } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import Typography from "@mui/material";
import useTheme from "@mui/material";
import useMediaQuery from "@mui/material";
import Form from "./Form";

const LoginPage = () =>{

    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(minWidth: 1000px)");


    return(
        <Box>
            <Box 
            width="100%" 
            backgroundColor={theme.pallete.background.alt} 
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
                borderRadius="1.5rem"
                backgroundColor={theme.pallete.background.alt}
                >
                <Typography
                    fontWeight="500" 
                    variant="h5"
                    sx={{mb:"1.5rem"}}
                >
                    Welcome to Socio.io
                </Typography>
                <Form/>
            </Box>
        </Box>
        

        
    )
}

export default LoginPage;