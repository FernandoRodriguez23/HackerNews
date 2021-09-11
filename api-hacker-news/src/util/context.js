import React, { useState, useContext} from 'react';
import { useFetch } from './useFetch';

const ArticleContext = React.createContext();

export const ArticleProvider = ({children}) => {
    const [query, setQuery] = useState('');
    const {loading, articels} = useFetch(`search?${query}=&`);

    return <ArticleContext.Provider value={{query, setQuery, loading, articels}}>
        {children}
    </ArticleContext.Provider>
};

export const useArticleContext = () => {
    return useContext(ArticleContext)
}