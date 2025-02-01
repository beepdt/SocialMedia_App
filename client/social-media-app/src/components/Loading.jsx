import React from "react";
import "./DotLoader.css";
import { useTheme } from "@mui/material";

const Loading = () => {

    const theme = useTheme();

    return(
    <div class="wrapper">
        <div class="container"
            style={{
                "--dot-color": theme.palette.primary.dark,
            }}
        >
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>
    );
};

export default Loading;