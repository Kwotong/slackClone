import React from 'react';
import './readMore.css';
import arrow from '../../assets/lSBmc7tyNDRW9.svg';

function ReadMore ({ text }) {
    return (
        <div className='read-more'>
            <p>{text}</p>
            <img src={arrow} alt='arrow' />
        </div>
    )
}

export default ReadMore;