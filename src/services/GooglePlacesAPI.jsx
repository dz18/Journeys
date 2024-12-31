import { TextField } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";

const PlaceAutocomplete = ({ onPlaceSelect }) => {
    const [placeAutocomplete, setPlaceAutocomplete] = useState(null);
    const inputRef = useRef(null);
    const places = useMapsLibrary("places");
  
    useEffect(() => {
        if (!places || !inputRef.current) return;
  
        const options = {
            fields: ["geometry", "name", "formatted_address"],
        };
  
        setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
    }, [places]);
    
    useEffect(() => {
        if (!placeAutocomplete) return;
  
        placeAutocomplete.addListener("place_changed", () => {
            const place = placeAutocomplete.getPlace();
            if (place.geometry) {
                const latitude = place.geometry.location.lat();
                const longitude = place.geometry.location.lng();
                onPlaceSelect({
                    name: place.name,
                    address: place.formatted_address,
                    latitude,
                    longitude,
                });
            }
        });
    }, [onPlaceSelect, placeAutocomplete]);

    return (
      <div className="autocomplete-container">
        <TextField inputRef={inputRef} fullWidth/>
      </div>
    );
};

export {
    PlaceAutocomplete
} 