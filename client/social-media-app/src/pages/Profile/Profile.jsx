import { Box, useMediaQuery } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import { useSelector } from "react-redux";
import UserWidget from "../HomePage/UserWidget";
import MyPostWidget from "../HomePage/MyPostWidget"
import PostsWidget from "../HomePage/PostsWidget";
import FriendsWidget from "../Friends/FriendsWidget";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const { userId } = useParams();
    const token = useSelector((state)=> state.token);
    
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")

    const getUser = async() => {
        const response = await fetch(`http://localhost:3001/users/${userId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}`}
        })
        const data = await response.json();
        setUser(data);
    }
    useEffect(()=>{
        getUser();
    },[]); // eslint-disable-line react-hooks/exhaustive-deps


    if(!user) return null;

    return(
       <Box>
         <NavBar/>
            <Box
                mt="7rem"
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="2rem"
                justifyContent="center"
            >
                <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                     <UserWidget userId={userId} picturePath={user.picturePath} />
                     <Box m="2rem 0"/>
                     <FriendsWidget userId={userId}/>
                </Box>
                <Box
                    flexBasis={isNonMobileScreens ? "42%" : undefined}
                    mt={isNonMobileScreens ? undefined : "2rem"}
                >   
                    <PostsWidget userId={userId} isProfile />
                </Box>

                

                        
            </Box>
       </Box>
    )
};
export default ProfilePage;