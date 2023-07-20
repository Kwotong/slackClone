import React from 'react';
import './article.css';
import arrow from '../../assets/arrowbold.svg';

function Article({ IMG, title, category, more }) {
    return(
        <div className='slack__article'>
            <div className='slack__article-image'>
                <img src={IMG} alt='article img' />    
            </div>
            <div className='slack__article-content'>
                <div className='slack__article-description'>
                    <p>{category}</p>
                    <h3>{title}</h3>
                </div>
                <div className='slack__article-readmore'>
                    <p>{more}</p>
                    <img src={arrow} alt='arrow' />
                </div>
            </div>
        </div>
    )
}

export default Article;