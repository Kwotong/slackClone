import React from 'react';
import './articleFW.css';
import arrow from '../../assets/arrowbold.svg';

function ArticleFW({ image, logo, heading }) {
    return (
        <div className='articleFW'>
            <div className='articleFW__image'>
                <img src={image} alt='article img' />
            </div>
            <div className='articleFW__content'>
                <div>
                    <div className='articleFW__logo'>
                        <img src={logo} alt='company logo' />
                    </div>
                    <h3 className='articleFW__heading'>{heading}</h3>
                </div>
                <div className='articleFW__readmore-arrow'>
                    <img src={arrow} alt='arrow image' style={{ width: '20px', height: '20px' }} />
                </div>
            </div>
        </div>
    )
}

export default ArticleFW;