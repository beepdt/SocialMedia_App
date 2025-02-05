import React from "react";
import { useState } from "react";
import {
        Box,
        IconButton,
        InputBase,
        Typography,
        Select,
        MenuItem,
        FormControl,
        useMediaQuery,
        useTheme } from "@mui/material";
import { 
    Search,
    Message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Menu,
    Close } from "@mui/icons-material";
import {setMode, setLogout} from "../../state";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";

const NavBar = ()=>{
  
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state)=>state.user);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    const primaryLight = theme.palette.background.light;
    const alt = theme.palette.background.alt;

    const fullName = `${user.firstName} ${user.lastName}`;
    return(
      //background body
        <FlexBetween padding = "1rem 6%" backgroundColor = {alt} sx={{
            position:"fixed",
            top:"1rem",
            left:"50%",
            transform:"translateX(-50%)",
            padding:"1rem 6%",
            backgroundColor:{alt},
            borderRadius:"8px",
            //boxShadow:"0px 4px 20px rgba(0,0,0,0.1)",
            width:"90%",
            maxWidth:"1200px",
            zIndex:"1000",
            }} >

            {/*app text Socio */}
        <FlexBetween gap = "1.75rem"> 

            <Typography
              fontWeight="bold"
              fontSize = "clamp(1rem,2rem,2.25rem)"
              color="primary"
              onClick={()=> navigate("/home")}
              sx={{
                  "&:hover": {
                      color : primaryLight,
                      cursor: "pointer",
                  },
              }}
            >
                Socio.io
            </Typography>

            {/*Search Bar */}
            {isNonMobileScreens && (
                <FlexBetween backgroundColor = {neutralLight} borderRadius="8px" gap="3rem" padding="0.1rem 1.5rem">
                    <InputBase placeholder="Search..." sx={{fontFamily: "Satoshi-Medium"}}/>
                    <IconButton>
                        <Search/>
                    </IconButton>
                </FlexBetween>
            )}
        </FlexBetween>
        {/* DESKTOP NAV*/}
        {isNonMobileScreens ? (<FlexBetween gap="2rem">

            <IconButton onClick={()=> dispatch(setMode())}>
                {theme.palette.mode === "dark" ? (
                    <DarkMode sx={{fontSize: "25px"}} />
                ):(
                    <LightMode sx={{ color:dark,fontSize: "25px"}}/>
                )}
            </IconButton>
            <Message sx={{fontSize: "25px"}}/>
            <Notifications sx={{fontSize: "25px"}}/>
            <Help sx={{fontSize: "25px"}}/>
            <FormControl variant="standard" value = {fullName} >
                <Select
                    value={fullName}
                    sx = {{
                        backgroundColor:neutralLight,
                        width:"160px",
                        borderRadius:"0.5rem",
                        p:"0.25rem 1rem",
                        "& .MuiSvgIcon-root": {
                            pr: "0.25rem",
                            width: "3rem"
                        },
                        "& .MuiSelect-select:focus":{
                            backgroundColor: neutralLight
                        }
                    }}
                    input={<InputBase/>}
                    >
                        <MenuItem value = {fullName}>
                            <Typography sx={{fontFamily: "Satoshi-Medium"}}>{fullName}</Typography>
                        </MenuItem>
                        <MenuItem onClick={()=> dispatch(setLogout())} sx={{fontFamily: "Satoshi-Medium"}}>
                                Log Out
                        </MenuItem>
                    </Select>
            </FormControl>
        </FlexBetween>)
            : 
            
            (<IconButton onClick={()=> setIsMobileMenuToggled(!isMobileMenuToggled)}>
                <Menu/>
            </IconButton>
            )}

            {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          //minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          

          {/* MENU ITEMS */}
          <FlexBetween
            position="absolute"
              top="100%"
              right="0"
              backgroundColor={alt}
              borderRadius="16px"
              boxShadow={"0px 4px 20px rgba(0,0,0,0.1)"}
              padding="1rem"
              display="flex"
              flexDirection="column"
              gap="1.6rem"
              
          >
          <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>

            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>

            <Message sx={{ fontSize: "25px" }} />

            <Notifications sx={{ fontSize: "25px" }} />

            <Help sx={{ fontSize: "25px" }} />

            <FormControl variant="standard" value={fullName}>
                <Select
                  value={fullName}
                  sx={{
                    backgroundColor: neutralLight,
                    width: "150px",
                    borderRadius: "0.25rem",
                    p: "0.25rem 1rem",
                    "& .MuiSvgIcon-root": {
                      pr: "0.25rem",
                      width: "3rem",
                    },
                    "& .MuiSelect-select:focus": {
                      backgroundColor: neutralLight,
                    },
                  }}
                  input={<InputBase />}
                >
                    <MenuItem value={fullName}>
                      <Typography>{fullName}</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => dispatch(setLogout())}>
                      Log Out
                    </MenuItem>
                </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
      

        </FlexBetween>
    );
};

export default NavBar;