import { Box, Typography, useTheme, Button } from "@mui/material";

const HotelCard = ({ data, key }) => {
    const theme = useTheme()

    return (
        <Box key={key}
            onClick={() => console.log(data)}
            sx={{
                p: 2,
                border: 2,
                borderRadius: 2,
                borderColor: theme.palette.primary.main,
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.06)",
                },
            }}
        >
            <Typography variant="h6">{data.name}</Typography>
            <Typography
                color="grey"
            >
                {data.distance.value} {data.distance.unit} from your destination
            </Typography>
        </Box>
    );
};

export default HotelCard;