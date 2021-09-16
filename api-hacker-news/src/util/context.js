import React, { useReducer, useContext, useEffect, useState} from 'react';
import {reducer} from './reducer';


const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
    loading: true,
    hits: [],
    nbPages: 0,
    page: 0,
    query: "React",
};

const ArticleContext = React.createContext();

export const ArticleProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchArticles = async (url) => {
        dispatch({type: "SET_LOADING"});
        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch({type: "SET_HITS", payload: data});
        } catch (error) {
            console.error(error);
        }
    };


    const handleSearch = (query) => {
        dispatch({type: "HANDLE_SEARCH", payload: query});
    }

    const handlePage = (value) => {
        dispatch({type: "HANDLE_PAGE", payload: value})
    }

    useEffect(() => {
        fetchArticles(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
    }, [state.query, state.page]);

    return (
        <ArticleContext.Provider value={{...state, handleSearch, handlePage}}>
            {children}
        </ArticleContext.Provider>
    )
};

export const useArticleContext = () => {
    return useContext(ArticleContext);
}