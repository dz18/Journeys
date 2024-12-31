import axios from "axios"

const getAccessToken = async () => {

    const tokenUrl = "https://test.api.amadeus.com/v1/security/oauth2/token"
    const credentials = {
        grant_type : 'client_credentials',
        client_id : import.meta.env.VITE_AMADEUS_API_KEY,
        client_secret : import.meta.env.VITE_AMADEUS_API_SECRET
    }

    try {
        const response = await axios.post(tokenUrl, new URLSearchParams(credentials))
        return response.data.access_token
    } catch (error) {
        console.log('Error Fetching Amadeus', error)
    }
}

const searchFlights = async (accessToken, origin, destination, departureDate, totalAdults, totalPassengers) => {
    const searchUrl = `https://test.api.amadeus.com/v2/shopping/flight-offers`;

    const params = {
        originLocationCode: origin,
        destinationLocationCode: destination,
        departureDate: departureDate,
        adults: totalAdults,
        max: totalPassengers
    };

    try {
        const response = await axios.get(searchUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            params
        });

        return response.data;
    } catch (error) {
        console.error("Error searching for flights", error);
        throw error;
    }
}

/* Return a list of hotels near a city */
const getHotels = async (accessToken, latitude, longitude) => {
    const searchUrl =  "https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-geocode"
    const params = {
        latitude,
        longitude 
    }

    try {
        const response = await axios.get(searchUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            params
        })

        return response.data;
    } catch (error) {
        console.error("Error searching for Hotels", error);
        throw error;
    }

}

const getAvailableRooms = async (accessToken, hotelIds, adults) => {
    const searchUrl = 'https://test.api.amadeus.com/v3/shopping/hotel-offers'

    try {
        const response = await axios.get(searchUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            params: {
                hotelIds
            }
        })

        return response.data;
    } catch (error) {
        console.error("Error searching for Hotels", error);
        throw error;
    }
}

/* Once the user finds a hotel, check its availability. */
const checkHotelAvailability = async (accessToken) => {

}

export {
    getAccessToken,
    searchFlights,
    getHotels,
}