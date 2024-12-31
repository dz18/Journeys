import { Box, Typography } from "@mui/material";

const HotelCard = ({ data, key }) => {
    return (
        <Box key={key}
            sx={{
                my: 1,
                p: 1,
                border: 1,
                borderColor: 'theme.primary.main'
            }}
        >
            <Typography>{data.name}</Typography>
        </Box>
    );
};

export default HotelCard;