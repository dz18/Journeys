import { 
    Typography, 
    Container, 
    TextField, 
    Button, 
    Box, 
    Divider, 
    Grid2
} from "@mui/material";
import { useState } from "react";
import { getAccessToken, getHotels } from "../../services/AmadeusAPI";
import { DatePicker } from "@mui/x-date-pickers";
import { PlaceAutocomplete } from "../../services/GooglePlacesAPI";
import HotelCard from "../../components/HotelCard";

const itemsPerPage = 10;

export default function StaysPage() {

    const [destination, setDestination] = useState('');
    const [currentSearchedName, setCurrentSearchedName] = useState('')
    const [hotelList, setHotelList] = useState(null);
    const [paginatedHotels, setPaginatedHotels] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const updatePaginatedHotels = (page, hotelData) => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = page * itemsPerPage;
        setPaginatedHotels(hotelData.slice(startIndex, endIndex));
    };

    const handleSearch = async () => {
        const accessToken = await getAccessToken();
        const latitude = destination.latitude;
        const longitude = destination.longitude;
        setCurrentSearchedName(destination.name)

        const fullHotelList = await getHotels(accessToken, latitude, longitude);
        setHotelList(fullHotelList);
        setTotalPages(Math.ceil(fullHotelList.data.length / itemsPerPage));
        setCurrentPage(1);
        updatePaginatedHotels(1, fullHotelList.data);
    };

    const handleNextPage = () => {
        const nextPage = currentPage + 1;
        if (nextPage <= totalPages) {
            setCurrentPage(nextPage);
            updatePaginatedHotels(nextPage, hotelList.data);
        }
    };

    const handlePrevPage = () => {
        const prevPage = currentPage - 1;
        if (prevPage >= 1) {
            setCurrentPage(prevPage);
            updatePaginatedHotels(prevPage, hotelList.data);
        }
    };

    return (
        <Container>
            {/* Title Banner */}
            <Typography variant="h2" fontWeight="bold" mb={2}>
                Discover your next getaway
            </Typography>
            <Divider sx={{ my: 1 }} />

            {/* Search Form */}
            <Box
                sx={{
                    p: 1,
                    borderRadius: 2,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box flex={6} mr="4px">
                    <Typography fontWeight="bold">Destination (City)</Typography>
                    <PlaceAutocomplete onPlaceSelect={setDestination} />
                </Box>
                <Box flex={3} mr="4px">
                    <Typography fontWeight="bold">Check-In Date</Typography>
                    <DatePicker format="MM-DD-YYYY" />
                </Box>
                <Box flex={3} mr="4px">
                    <Typography fontWeight="bold">Check-Out Date</Typography>
                    <DatePicker format="MM-DD-YYYY" />
                </Box>
                <Box flex={2} mr="4px">
                    <Typography fontWeight="bold">Adults</Typography>
                    <TextField placeholder="Adults" />
                </Box>
                <Box flex={2} mr="4px">
                    <Typography fontWeight="bold">Children</Typography>
                    <TextField placeholder="Children" />
                </Box>
                <Box flex={2} mr="4px">
                    <Typography fontWeight="bold">Rooms</Typography>
                    <TextField placeholder="Rooms" />
                </Box>
            </Box>
            <Button onClick={handleSearch} variant="contained" fullWidth>
                SEARCH
            </Button>

            {/* Results */}
            {hotelList && (
                <>
                    <Typography
                        variant="h4"
                        sx={{
                            mt: 2,
                            fontWeight: 'bold',
                        }}
                    >
                        Search Results for "{currentSearchedName}"
                    </Typography>
                    <Typography color="grey">
                        Select a hotel to check availability
                    </Typography>

                    {/* Render Paginated Hotels */}
                    {paginatedHotels && (
                        <Grid2 container spacing={3} mt={2}>
                            {paginatedHotels.map((hotel, i) => (
                                <Grid2 item size={6} key={i}>
                                    <HotelCard data={hotel} />
                                </Grid2>
                            ))}
                        </Grid2>
                    )}

                    {/* Pagination Controls */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            my: 3,
                        }}
                    >
                        <Button
                            variant="outlined"
                            disabled={currentPage === 1}
                            onClick={handlePrevPage}
                            sx={{ mx: 1, display: 'flex', alignItems: "center" }}
                        >
                            Previous
                        </Button>
                        <Typography sx={{ mx: 2 }}>
                            Page {currentPage} of {totalPages}
                        </Typography>
                        <Button
                            variant="outlined"
                            disabled={currentPage === totalPages}
                            onClick={handleNextPage}
                            sx={{ mx: 1 }}
                        >
                            Next
                        </Button>
                    </Box>
                </>
            )}
        </Container>
    );
}
