import { Outlet } from "react-router-dom";
import AccountNav from "../components/AccountNav";
import { Box } from "@mui/material";

export default function AccountFrame() {
    return (
        <>
            <AccountNav/>
            <Box mt={2}>
                <Outlet/>
            </Box>
        </>
    )
}