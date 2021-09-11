import { useState, useEffect } from 'react'

const API_ENDPOINT = `http://hn.algolia.com/api/v1`;


//query is the s=batman part
export const useFetch = (query) => {
    const [loading, setLoading] = useState(true);
    const [articels, setArticels] = useState([])

    //url is variable that will take the endpoint and the query
    const fetchArticles = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();

            if(data.Response === 'True'){
                setArticels(data.Search || data);
            }
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        console.log(`${API_ENDPOINT}${query}`);
        fetchArticles(`${API_ENDPOINT}${query}`);
    }, [query]);

    return {loading, articels};
};

