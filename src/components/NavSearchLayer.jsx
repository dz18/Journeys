import { 
    Box,
    Typography,
} from "@mui/material";
import { 
    BedOutlined,
    FlightTakeoffOutlined,
    TravelExplore
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const searchNav = [
    {
        icon: <BedOutlined/>,
        text: 'Stays',
        path: '/search/stays'
    },
    {
        icon: <FlightTakeoffOutlined/>,
        text: 'Flights',
        path: '/search/flights'
    },
    {
        icon: <TravelExplore/>,
        text: 'Flights + Hotel',
        path: '/search/flight-hotel'
    }
]

export default function NavSearchLayer() {

    const navigate = useNavigate()
    const location = useLocation();

    // Get Current Search Page to highlight Tab
    const [selected, setSelected] = useState('stays')
    useEffect(() => {
        if (location.pathname.includes("/search/stays")) {
            setSelected("/search/stays");
        } else if (location.pathname.includes("/search/flights")) {
            setSelected("/search/flights");
        } else if (location.pathname.includes("/search/flight-hotel")) {
            setSelected("/search/flight-hotel");
        }
    })

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row", 
                alignItems: 'center'
            }}
        >
        {searchNav.map((search, i) => (
            <Box
                key={i}
                onClick={() => navigate(search.path)}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    borderRadius: 2,
                    cursor: 'pointer',
                    p: 1,
                    px: 3,
                    my: 1,
                    mr: 1,
                    "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                    },
                    border: search.path == selected ? 1 : 0,
                    bgcolor: search.path == selected ? 'rgba(255, 255, 255, 0.2)' : 0
                }}
            >
                {search.icon}
                <Typography 
                    component='span'
                    ml={1}
                >
                    {search.text}
                </Typography>
            </Box>
        ))}
        </Box>
    )
}