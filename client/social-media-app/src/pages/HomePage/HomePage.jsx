import { Box, useMediaQuery } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import { useSelector } from "react-redux";
import UserWidget from "./UserWidget";
import MyPostWidget from "./MyPostWidget";
import PostsWidget from "./PostsWidget";
import FriendsWidget from "../Friends/FriendsWidget";


const HomePage = () =>{
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const {_id, picturePath} = useSelector((state)=>state.user);
    return(
        <Box>
            <NavBar/>
            <Box
                mt="7rem"
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="0.5rem"
                justifyContent="space-between"
            >
                <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                     <UserWidget userId={_id} picturePath={picturePath} />
                </Box>
                <Box
                    flexBasis={isNonMobileScreens ? "42%" : undefined}
                    mt={isNonMobileScreens ? undefined : "2rem"}
                >
                        <MyPostWidget picturePath={picturePath}/>
                        <PostsWidget userId={_id} />
                </Box>

                {isNonMobileScreens  && (
                        <Box
                            flexBasis="26%"
                        >
                            <FriendsWidget userId={_id}/>
                        </Box>
                )}

                        
                    </Box>
        </Box>
    )
}

export default HomePage;