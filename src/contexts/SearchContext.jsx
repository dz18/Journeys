import { createContext, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchContext = createContext()

export const useSearch = () => {
    return useContext(SearchContext)
};

export const SearchProvider = ({ children }) => {

    const navigate = useNavigate()

    const [hotelList, setHotelList] = useState(null)
    const [currentSearchedName, setCurrentSearchedName] = useState('')

    const handleNav = () => {
        
    }

    return (
        <SearchContext.Provider value={{ hotelList, setHotelList, currentSearchedName, setCurrentSearchedName }}>
            {children}
        </SearchContext.Provider>
    );
};