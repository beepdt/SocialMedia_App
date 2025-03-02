import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import UserWidget from "./../HomePage/UserWidget";
import {useSelector} from "react-redux";
import FriendsWidget from "./FriendsWidget";

const Friends = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const {_id,picturePath} = useSelector((state)=>state.user);

    
    return(
      <Box>
        <NavBar/>
        <Box
                mt="7rem"
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="2em"
                justifyContent="center"
            >
                 <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                  <UserWidget userId={_id} picturePath={picturePath} />
                 </Box>
                 <Box
                    flexBasis={isNonMobileScreens ? "42%" : undefined}
                    mt={isNonMobileScreens ? undefined : "2rem"}
                >
                        <FriendsWidget userId={_id}/>
                </Box>
            </Box>
      </Box>
    )
};
export default Friends;