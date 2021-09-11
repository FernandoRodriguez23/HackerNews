import { useState, useEffect } from 'react'

const API_ENDPOINT = `http://hn.algolia.com/api/v1/items/:id&`


//query is the s=batman part
export const useFetch = (query) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({show: false, msg: ''});
    const [movies, setMovies] = useState([]);

    //url is variable that will take the endpoint and the query
    const fetchMovies = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();

            if(data.Response === 'True'){
                setMovies(data.Search || data);
                setError({show: false, msg: ""});
            } else {
                setError({show: true, msg: data.Error});
            }
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        console.log(`${API_ENDPOINT}${query}`);
        fetchMovies(`${API_ENDPOINT}${query}`);
    }, [query]);

    return {loading, error, movies};
};

