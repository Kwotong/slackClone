import React from 'react';
import './usedby.css';
import airbnb from '../../assets/airbnb-logo.png';
import nasa from '../../assets/logo-nasa.png';
import uber from '../../assets/uber.png';
import target from '../../assets/target-logo.png';
import nyt from '../../assets/nyt.png';
import etsy from '../../assets/logo-etsy.png';

function Usedby() {
    return(
        <div className='slack__usedby section__padding'>
            <h4>TRUSTED BY COMPANIES ALL OVER THE WORLD</h4>
            <div className='slack__usedby-logo_container'>
                <div className='slack__usedby-logo_image'>
                    <img src={airbnb} alt='logo' />
                </div>
                <div className='slack__usedby-logo_image'>
                    <img src={nasa} alt='logo' />
                </div>
                <div className='slack__usedby-logo_image'>
                    <img src={uber} alt='logo' />
                </div>
                <div className='slack__usedby-logo_image'>
                    <img src={target} alt='logo' />
                </div>
                <div className='slack__usedby-logo_image'>
                    <img src={nyt} alt='logo' />
                </div>
                <div className='slack__usedby-logo_image'>
                    <img src={etsy} alt='logo' />
                </div>
            </div>
        </div>
    )
}

export default Usedby;