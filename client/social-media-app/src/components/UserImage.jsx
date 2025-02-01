import { Avatar, Box } from "@mui/material";

const UserImage = ({image, size = "60px"}) => {
    return (
        <Box
            width={size} height={size}
        >
            <Avatar
                alt="user"
                src= {`http://localhost:3001/assets/${image}`}
                sx={{
                    width: size,
                    height: size,
                }}/>
        </Box>
    )
}

export default UserImage;