import { Outlet } from "react-router-dom";
import SearchNav from "../../components/SearchNav";
import { Box } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { APIProvider } from "@vis.gl/react-google-maps";
import { SearchProvider } from "../../contexts/searchContext";

const APIKEY = import.meta.env.VITE_GM_API_KEY

export default function SearchFrame() {

    return (
        <>
            <SearchNav/>
            <Box mt={2}><SearchProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <APIProvider apiKey={APIKEY}>
                        
                            <Outlet/>
                        
                    </APIProvider>
                </LocalizationProvider></SearchProvider>
            </Box>
        </>
    )
}