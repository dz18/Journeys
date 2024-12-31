import { 
    Typography, 
    Container, 
    TextField, 
    Button, 
    Box, 
    Divider
} from "@mui/material";
import { useEffect, useState } from "react";
import { getAccessToken, searchFlights } from "../services/AmadeusAPI";
import { DatePicker, StaticDatePicker} from "@mui/x-date-pickers";


export default function FlightsPage() {
    const [token, setToken] = useState(null)
    useEffect(() => {

        const fetchToken = async () => {
            const accessToken = await getAccessToken()
            setToken(accessToken)
            console.info(accessToken)
        }

        return () => fetchToken()

    }, [])

    return (
        <Container>

            {/* Title Banner */}
            <Typography 
                    variant="h2"
                    fontWeight='bold'
                    mb={2}
                >
                Discover your next getaway
            </Typography>   
            <Divider sx={{my: 1}}/>

            {/* Form */}
            <Box>
                
                {/* Search Form */}
                <Box sx={{
                    p: 1,
                    borderRadius: 2,
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Box flex={6} mr='4px'>
                        <Typography fontWeight='bold'>Destination</Typography>
                        <TextField 
                            placeholder="Where are we going?"
                            fullWidth
                        />
                    </Box>
                    <Box flex={3} mr='4px'>
                        <Typography fontWeight='bold'>Check-In Date</Typography>
                        <DatePicker
                            format="MM-DD-YYYY"
                        />
                    </Box>
                    <Box flex={3} mr='4px'>
                    <Typography fontWeight='bold'>Check-Out Date</Typography>
                        <DatePicker 
                            format="MM-DD-YYYY"
                        />
                    </Box>
                    <Box flex={2} mr='4px'>
                        <Typography fontWeight='bold'>Adults</Typography>
                        <TextField
                            placeholder="Adults"
                        />
                    </Box>
                    <Box flex={2} mr='4px'>
                        <Typography fontWeight='bold'>Children</Typography>
                        <TextField
                            placeholder="Children"
                        />
                    </Box>
                    <Box flex={2} mr='4px'>
                        <Typography fontWeight='bold'>Rooms</Typography>
                        <TextField 
                            placeholder="Rooms"
                        />
                    </Box>
                </Box>
                <Button variant="contained" fullWidth sx={{mx: 1}}>SEARCH</Button>
            </Box>
            
            {/* Instructions */}

        </Container>
    )
}