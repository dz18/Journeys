import { Outlet } from "react-router-dom";
import SearchNav from "../components/SearchNav";
import { Box } from "@mui/material";

export default function SearchFrame() {
    return (
        <>
            <SearchNav/>
            <Box pt={18}>
                <Outlet/>
            </Box>
        </>
    )
}