import React, { useState, useEffect } from 'react';
import './scale.css';
import check from '../../../assets/check.svg';
import arrow from '../../../assets/lSBmc7tyNDRW9.svg';
import fox from '../../../assets/fox.png';
import scale from '../../../assets/scale.jpeg';

function Scale() {

    const scaleData = [
        'Get peace of mind with 99.99% uptime SLA',
        'Customize Slack to your business with unlimited workspaces and channels',
        'Govern all your users and teams from a single place'
    ]

    const Quote = () => {
        return (
            <>
                <p className='enterprise__scale-quote'>“Slack has been the hammer that has helped us tear down the walls of silos. It has enabled us to position Slack as the operating system of collaboration across 194 countries and 171 offices, pulling us together like nothing else has.”</p>
                <img className='enterprise__scale-foximg' src={fox} alt='fox img' />
                <p className='enterprise__scale-position'><span>Jeff Dow</span>, Executive Vice President, Media and Broadcast Operations</p>
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
        <div className='enterprise__scale section__padding'>
            <div className='enterprise__scale-top'>
                <div className='enterprise__scale-content'>
                    <h4 className='small-heading'>scale</h4>
                    <h2 className='section-heading'>Created to meet the needs of global organizations</h2>
                    {
                        scaleData.map((text, index) => {
                            return (
                                <div className='enterprise__scale-details' key={index}>
                                    <div className='bullets'>
                                        <img src={check} alt='tick' />
                                    </div>
                                    <p>{text}</p>
                                </div>
                            )
                        })
                    }
                    <div className='enterprise__scale-readmore'>
                        <p>Learn more about Slack at scale</p>
                        <img src={arrow} alt='arrow img' />
                    </div>
                    {isSmallScreen >= 1200 && <Quote />}
                </div>
                <div className='enterprise__scale-img'>
                    <img src={scale} alt='scale img' />
                </div>
            </div>
            <div className='enterprise__scale-bottom'>
                {isSmallScreen < 1200 && <Quote />}
            </div>
        </div>
    )
}

export default Scale;