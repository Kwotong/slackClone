import React, { useState, useEffect } from 'react';
import './engagement.css';
import check from '../../../assets/check.svg';
import arrow from '../../../assets/lSBmc7tyNDRW9.svg';
import idc from '../../../assets/idc.png';
import intuit from '../../../assets/intuit.png';
import engagement from '../../../assets/engagement.jpeg';
function Engagement() {

    const engagementData = [
        'Work in a way that feels natural to you, supported by a simple, intuitive user experience',
        'Automate away routine tasks with custom workflows, no code needed',
        'Keep projects moving, wherever you are, on desktop or mobile'
    ]

    const Details = () => {
        return (
            <>
                <div className='enterprise__engagement-stats-container'>
                    <div className='enterprise__engagement-stats'>
                        <h3>24%</h3>
                        <p>faster to reach full employee productivity¹</p>
                    </div>
                    <div className='enterprise__engagement-stats'>
                        <h3>36%</h3>
                        <p>faster case resolution²</p>
                    </div>
                </div>
                <div className='enterprise__engagement-image-container'>
                    <div className='enterprise__engagement-image'>
                        <img src={idc} alt='IDC img' />
                    </div>
                    <div className='enterprise__engagement-image'>
                        <img src={intuit} alt='intuit img' />
                    </div>
                </div>
                <p className='enterprise__engagement-source'><span>¹Source:</span> IDC “The Business Value of Slack”</p>
                <p className='enterprise__engagement-source'><span>²Source:</span> Intuit</p>
            </>
        )
    }

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth);

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className='enterprise__engagement section__padding'>
            <div className='enterprise__engagement-top'>
                <div className='enterprise__engagement-content'>
                    <h4 className='small-heading'>engagement</h4>
                    <h2 className='section-heading'>Engagement, not installations, is how work gets done</h2>
                    {
                        engagementData.map((text, index) => {
                            return (
                                <div className='enterprise__engagement-details' key={index}>
                                    <div className='bullets enterprise__engagement-bullets'>
                                        <img src={check} alt='tick' />
                                    </div>
                                    <p>{text}</p>
                                </div>
                            )
                        })
                    }
                    <div className='enterprise__engagement-readmore'>
                        <p>Learn more about how fuels engagement</p>
                        <img src={arrow} alt='arrow img' />
                    </div>
                    {isSmallScreen >= 1200 && <Details />}
                </div>
                <div className='enterprise__engagement-img'>
                    <img src={engagement} alt='scale img' />
                </div>
            </div>
            <div className='enterprise__engagement-bottom'>
                {isSmallScreen < 1200 && <Details />}
            </div>
        </div>
    )
}

export default Engagement;