import React, { useState, useContext} from 'react';
import { useFetch } from './useFetch';

const MovieContext = React.createContext();

export const MovieProvider = ({children}) => {
    const [query, setQuery] = useState('batman');
    const {loading, error, movies} = useFetch(`s=${query}&`);

    return <MovieContext.Provider value={{query, setQuery, loading, error, movies}}>
        {children}
    </MovieContext.Provider>
};

export const useMovieContext = () => {
    return useContext(MovieContext)
}