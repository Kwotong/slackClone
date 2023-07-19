import React, { useState, useEffect } from 'react';
import './security.css';
import check from '../../../assets/check.svg';
import arrow from '../../../assets/lSBmc7tyNDRW9.svg';
import crowd from '../../../assets/crowdstrike@2x.png';
import security from '../../../assets/security.jpeg';

function Security () {

    const securityData = [
        'Meet compliance needs and regulatory requirements like FINRA, HIPAA and FedRAMP',
        'Rest assured Slack is using industry-accepted best practices and frameworks',
        'Secure your data with innovative features like Slack Enterprise Key Management'
    ]

    const Quote = () => {
        return (
            <>
                <p className='enterprise__security-quote'>“With the introduction of Slack Enterprise Key Management as an added security feature, we immediately saw its value in giving us total control of our data and the assurance that we’re protected in the event of a security threat in our supply chain.”</p>
                <img className='enterprise__security-crowdimg' src={crowd} alt='fox img' />
                <p className='enterprise__security-position'><span>Colin Black</span>, Chief Operating Officer</p>
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
        <div className='enterprise__security section__padding'>
            <div className='enterprise__security-top'>
                <div className='enterprise__security-content'>
                    <h4 className='small-heading'>Security</h4>
                    <h2 className='section-heading'>Enterprise-grade data protection</h2>
                    {
                        securityData.map((text, index) => {
                            return (
                                <div className='enterprise__security-details' key={index}>
                                    <div className='bullets enterprise__security-bullet'>
                                        <img src={check} alt='tick' />
                                    </div>
                                    <p>{text}</p>
                                </div>
                            )
                        })
                    }
                    <div className='enterprise__security-readmore'>
                        <p>Learn more about Slack at security</p>
                        <img src={arrow} alt='arrow img' />
                    </div>
                    {isSmallScreen >= 1200 && <Quote />}
                </div>
                <div className='enterprise__security-img'>
                    <img src={security} alt='scale img' />
                </div>
            </div>
            <div className='enterprise__security-bottom'>
                {isSmallScreen < 1200 && <Quote />}
            </div>
        </div>
    )
}

export default Security;