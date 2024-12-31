import { 
    Typography, 
    Container, 
    TextField, 
    Button, 
    Box, 
    Divider
} from "@mui/material";
import { useEffect, useState } from "react";
import { getAccessToken, getHotels, searchFlights } from "../services/AmadeusAPI";
import { DatePicker, StaticDatePicker} from "@mui/x-date-pickers";
import { PlaceAutocomplete } from "../services/GooglePlacesAPI";
import { APIProvider } from "@vis.gl/react-google-maps";
import HotelCard from "../components/HotelCard";

export default function StaysPage() {

    const [token, setToken] = useState(null)
    const [destination, setDestination] = useState('')
    const [hotelList, setHotelList] = useState(null)

    const handleSearch = async () => {
        const accessToken = await getAccessToken()
        const latitude = destination.latitude
        const longitude = destination.longitude
        const hotelList = await getHotels(accessToken, latitude, longitude)
        setHotelList(hotelList)
    }

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
                        <Typography fontWeight='bold'>Destination (City)</Typography>
                        <PlaceAutocomplete onPlaceSelect={setDestination}/>
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
                <Button 
                    onClick={handleSearch}
                    variant="contained" 
                    fullWidth 
                >
                    SEARCH
                </Button>
            </Box>
            
            {/* Instructions */}

            {/* Results */}
            {hotelList && hotelList.data.map((hotel) => (
                <HotelCard data={hotel}/>
            ))}
            

        </Container>
    )
}