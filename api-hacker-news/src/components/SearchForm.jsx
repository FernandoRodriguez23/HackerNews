import React from 'react'
import {useArticleContext} from '../util/context';
// import {reducer} from '../util/reducer'

function SearchForm() {

    const {handleSearch, query, page, nbPages, loading, handlePage} = useArticleContext();
    // const [state, dispatch] = useReducer(reducer)


    return (
        <div className="search-container">
             <form onSubmit={(e) => e.preventDefault()} className="search-form">
            <div className="content-form">
            <h2>Search Articles</h2>
            <input type="text" className="form-input" value={query} onChange={(e) => handleSearch(e.target.value)}  />
            </div>
            </form>
            <div className="page-move">
                <button disabled={loading} onClick={() => handlePage('dec')} >Prev</button>
                <h3 className="pages">{page + 1} of {nbPages}</h3>
                <button disabled={loading} onClick={() => handlePage('inc')} >Next</button>
            </div>
        </div>
    )
}

export default SearchForm
