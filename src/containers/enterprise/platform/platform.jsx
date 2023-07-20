import React, { useState, useEffect } from 'react';
import './platform.css';
import check from '../../../assets/check.svg';
import arrow from '../../../assets/lSBmc7tyNDRW9.svg';
import platform from '../../../assets/platform.jpeg';
import zoom from '../../../assets/zoom.png';
import outlook from '../../../assets/outlook.png';
import google from '../../../assets/google-drive.png';
import saleforce from '../../../assets/salesforce.png';
import service from '../../../assets/service-now.png';
import onedrive from '../../../assets/onedrive.png';
import gmail from '../../../assets/gmail.png';
import dropbox from '../../../assets/dropbox.png';

function Platform() {

    const platformData = [
        'Ensure third-party apps are compliant',
        'Standardize app permissions across your organization',
        'Drive usage with more than 2,600 apps'
    ]

    const logoData = [`${zoom}`, `${outlook}`, `${google}`, `${saleforce}`, `${service}`, `${onedrive}`, `${gmail}`, `${dropbox}`]

    const Logos = () => {
        return (
            <>
                <div className='enterprise__platform-logo-container'>
                    {logoData.map((image, index) => {
                        return (
                            <div className='enterprise__platform-logo' key={index}>
                                <img src={image} alt='logo img' />
                            </div>
                        )
                    })}
                </div>
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
        <div className='enterprise__platform section__padding'>
            <div className='enterprise__platform-top'>
                <div className='enterprise__platform-content'>
                    <h4 className='small-heading'>Platform</h4>
                    <h2 className='section-heading'>Apps that boost productivity and scale with you</h2>
                    {
                        platformData.map((text, index) => {
                            return (
                                <div className='enterprise__platform-details' key={index}>
                                    <div className='bullets enterprise__platform-bullets'>
                                        <img src={check} alt='tick' />
                                    </div>
                                    <p>{text}</p>
                                </div>
                            )
                        })
                    }
                    <div className='enterprise__platform-readmore'>
                        <p>Learn more about Slack at scale</p>
                        <img src={arrow} alt='arrow img' />
                    </div>
                    {isSmallScreen >= 1200 && <Logos />}
                </div>
                <div className='enterprise__platform-img'>
                    <img src={platform} alt='scale img' />
                </div>
            </div>
            <div className='enterprise__platform-bottom'>
                {isSmallScreen < 1200 && <Logos />}
            </div>
        </div>
    )
}

export default Platform;