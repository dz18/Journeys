import { 
    AppBar, 
    Toolbar,
    Box,
    Container,
} from "@mui/material";
import NavMainLayer from "./NavMainLayer";

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

                        <NavMainLayer/>             

                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}