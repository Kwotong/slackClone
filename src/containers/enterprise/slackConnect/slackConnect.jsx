import React, { useState, useEffect } from 'react';
import './slackConnect.css';
import check from '../../../assets/check.svg';
import arrow from '../../../assets/lSBmc7tyNDRW9.svg';
import zendesk from '../../../assets/zendesk.png';
import connect from '../../../assets/slack-connect.jpeg';

function SlackConnect() {

    const connectData = [
        'Retain your data security practices while collaborating with trusted organizations',
        'Connect with employees, customers and partners in a single place',
        'Reduce context switching, increase transparency and speed up work'
    ]

    const Quote = () => {
        return (
            <>
                <p className='enterprise__connect-quote'>“Having all of the information about a specific partner available at once is super-important. We have a direct line of communication to our counterparts at the companies we work with most frequently.”</p>
                <img className='enterprise__connect-zendeskimg' src={zendesk} alt='zendesk img' />
                <p className='enterprise__connect-position'><span>Mike Yakovlev</span>, Manager of Technology Alliances</p>
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
        <div className='enterprise__connect section__padding'>
            <div className='enterprise__connect-top'>
                <div className='enterprise__connect-content'>
                    <h4 className='small-heading'>Slack Connect</h4>
                    <h2 className='section-heading'>Work with external organizations, securely</h2>
                    {
                        connectData.map((text, index) => {
                            return (
                                <div className='enterprise__connect-details' key={index}>
                                    <div className='bullets enterprise__connect-bullets'>
                                        <img src={check} alt='tick' />
                                    </div>
                                    <p>{text}</p>
                                </div>
                            )
                        })
                    }
                    <div className='enterprise__connect-readmore'>
                        <p>Learn how Slack Connect works</p>
                        <img src={arrow} alt='arrow img' />
                    </div>
                    {isSmallScreen >= 1200 && <Quote />}
                </div>
                <div className='enterprise__connect-img'>
                    <img src={connect} alt='scale img' />
                </div>
            </div>
            <div className='enterprise__connect-bottom'>
                {isSmallScreen < 1200 && <Quote />}
            </div>
        </div>
    )
}

export default SlackConnect;