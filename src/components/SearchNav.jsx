import { 
    AppBar, 
    Toolbar,
    Box,
    Container,
    Typography,
} from "@mui/material";
import NavMainLayer from "./NavMainLayer";
import NavSearchLayer from "./NavSearchLayer";

export default function SearchNav() {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="fixed"
                sx={{
                    boxShadow: "none",
                }}
            >
                <Toolbar>
                    <Container sx={{
                        my: 1
                    }}>

                        {/* Top Layer */}
                        <NavMainLayer/>             

                        {/* Search Layer */}
                        <NavSearchLayer/>

                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}