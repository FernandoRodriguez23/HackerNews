import React, { useReducer } from 'react'
import {useArticleContext} from '../util/context';
import {reducer} from '../util/reducer';

function Articles() {

    const {loading, hits, nbPage, page, query, removeArticle} = useArticleContext();
    const [state, dispatch] = useReducer(reducer);
    
    if(loading){
        <div className="loading">
            <div className="spinner"></div>
            <h1>Loading...</h1>
        </div>
    }

    return (
            
            <div className="article-container">
            {hits.map((hit) => {
                const {title, url, author, points, num_comments : nbComments, objectID : id} = hit;

                return (
                    <div className="article" key={id}>
                        <h3 className="title">{title}</h3>
                        <h5 className="description">{points} by {author} | {nbComments} comments</h5>
                        <h6 className="more">
                            <a href={url} className="read-more" target='_blank' rel='noopener noreferrer'>Read More</a>
                            <button className="remove" onClick={() => removeArticle(id)} >Remove</button>
                        </h6>
                    </div>
                )
            })}
                            
            </div>
            
           
    )
}

export default Articles
