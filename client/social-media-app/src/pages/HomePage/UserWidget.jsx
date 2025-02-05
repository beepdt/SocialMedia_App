import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, darken, Divider, Typography, useTheme } from "@mui/material";
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import {useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

const UserWidget = ({ userId, picturePath}) => {
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state)=> state.token)
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    const getUser = async () => {
        const response = await fetch(`http://localhost:3001/users/${userId}`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}`},
            });
            const data = await response.json();
            setUser(data);
    };

    useEffect(()=>{
        getUser();
    },[]) //eslint-disable-line react-hooks/exhaustive-deps

    if (!user) {
        return <Typography>Loading...</Typography>;
    }

    const {
        firstName,
        lastName,
        viewedProfile,
        impressions,
        friends,
    } = user;

    return (
        <WidgetWrapper>
        {/* FIRST ROW */}
        <FlexBetween
          gap="0.5rem"
          pb="1.1rem"
          onClick={() => navigate(`/profile/${userId}`)}
        >
          <FlexBetween gap="1rem">
            <UserImage image={picturePath} />
            <Box>
              <Typography
                variant="h2"
                color={dark}
                fontWeight="500"
                sx={{
                  "&:hover": {
                    color: palette.primary.light,
                    cursor: "pointer",
                  },
                }}
              >
                {firstName} {lastName}
              </Typography>
              <Typography color={medium} variant="h4">{friends.length} friends</Typography>
            </Box>
          </FlexBetween>
          <ManageAccountsOutlined />
        </FlexBetween>
  
        <Divider />

                    {/*Second Row */}

                    <Box p="1rem 0">
                        <Box 
                          sx={{
                                "&:hover": {
                                  cursor: "pointer",
                                },
                              }}
                              onClick={()=> navigate("/home")}
                          display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                            
                            <Typography color={medium} fontFamily="Satoshi-Medium">Home</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap="1rem">
                            
                            <Typography color={medium}  fontFamily="Satoshi-Medium">Friends</Typography>
                        </Box>
                    </Box>

                    {/*THIRD ROW */}
                    <Box
                        p="1rem 0"
                    >
                        <FlexBetween mb="0.5rem">
                            <Typography color={medium} fontFamily="Satoshi-Medium">
                            Who's viewed your profile</Typography>
                            <Typography color={main} fontWeight="500" variant="h4">{viewedProfile}</Typography>
                        </FlexBetween>
                        <FlexBetween>
                            <Typography color={medium} fontFamily="Satoshi-Medium">
                            Impressions</Typography>
                            <Typography color={main} fontWeight="500" variant="h4">{impressions}</Typography>
                        </FlexBetween>
                    </Box>

                    {/*FOURTH ROW */}
                    
               

            
        </WidgetWrapper>
    )
};

export default UserWidget;