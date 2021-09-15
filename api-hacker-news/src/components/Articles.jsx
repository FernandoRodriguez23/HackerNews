import React, { useReducer } from 'react'
import {useArticleContext} from '../util/context';
import {reducer} from '../util/reducer';

function Articles() {

    const {loading, hits, nbPage, page, query} = useArticleContext();
    const [state, dispatch] = useReducer(reducer);
    
    if(loading){
        <div className="loading">loading</div>
    }

    return (
            
            <div className="article-container">
            {hits.map((hit) => {
                const {title, url, author, points, num_comments : nbComments, objectID} = hit;

                return (
                    <div className="article" key={objectID}>
                        <h3 className="title">{title}</h3>
                        <h5 className="description">{points} by {author} | {nbComments}</h5>
                        <h6 className="more">
                            <a href={url} className="read-more">Read More</a>
                            <button className="remove" onClick={() => {dispatch({type: "REMOVE_ITEM", payload: objectID})}} >Remove</button>
                        </h6>
                    </div>
                )
            })}
                            
            </div>
            
           
    )
}

export default Articles
