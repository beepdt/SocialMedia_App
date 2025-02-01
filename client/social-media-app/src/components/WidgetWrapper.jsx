import { Box } from "@mui/material";
import { padding, styled } from "@mui/system";

const WidgetWrapper = styled(Box) (({theme}) => ({
    padding: "1.5rem 1.5rem 0.75rem 1.5rem",
    backgroundColor: theme.palette.bacground.alt,
    borderRadius: "8px"
}));

export default WidgetWrapper;