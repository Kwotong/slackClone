import React from 'react';
import './header.css';
import whiteTick from '../../../assets/tickWhite.svg';
import bgImage from '../../../assets/bg-halftone-black-20p.png';

function Header() {

    const headerData = ['Learn how to increase team productivity', 'Get pricing information', 'Explore use cases for your team'];

    return (
        <div className='contact__header section__padding'>
            {/* <div className='contact__header-overlay'>
                <img src={bgImage} alt='overlay img' />
            </div> */}
            <div className='contact__header-content' >
                <h2 className='contact__header-heading'>Contact our sales team</h2>
                <p className='contact__header-text' >We're happy to answer questions and get you acquainted with Slack.</p>
                <div className='contact__header-list'>
                    {headerData.map((item, index) => {
                        return (
                            <div className='contact__header-data' key={index}>
                                <img src={whiteTick} alt='white tick' />
                                <p>{item}</p>
                            </div>
                        )
                    })}
                </div>
                <p className='contact__header-help'>For technical issues and general inquiries, please <span>visit our Help Center</span>.</p>
            </div>
        </div>
    )
}

export default Header;