import React from 'react';
import {useArticleContext} from '../util/context';

function SearchForm() {

    const {handleSearch, query, page, nbPages} = useArticleContext();

    return (
        <div className="search-container">
             <form onSubmit={(e) => e.preventDefault()} className="search-form">
            <div className="content-form">
            <h2>Search Articles</h2>
            <input type="text" className="form-input" value={query} onChange={(e) => handleSearch(e.target.value)}  />
            </div>
            </form>
            <div className="page-move">
                <button  >Prev</button>
                {/* onClick={() => {page == 0 ? page : page--}} */}
                <h3 className="pages">{page} of {nbPages}</h3>
                <button  >Next</button>
                {/* onClick={() => {page == nbPages ? page : page++}} */}
            </div>
        </div>
    )
}

export default SearchForm
