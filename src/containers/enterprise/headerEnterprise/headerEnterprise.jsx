import React, { useState } from 'react';
import './headerEnterprise.css';
import heroImage from '../../../assets/enterprise-hero.jpeg';
import check from '../../../assets/check.svg';
import airbnb from '../../../assets/airbnb-logo.png';
import target from '../../../assets/target-logo.png';
import uber from '../../../assets/uber.png';
import intuit from '../../../assets/intuit.png';
import newscorp from '../../../assets/logo-newscorp.png';
import medical from '../../../assets/logo-onemedical.png';
import sonos from '../../../assets/logo-sonos.png';
import usdepartment from '../../../assets/us-department-of-veteran-affairs.png';
import arrow from '../../../assets/arrow.svg';

function HeaderEnterprise() {

    const listData = ['scale', 'engagement', 'security', 'platform', 'slack connect'];

    const logoImages = [`${airbnb}`, `${target}`, `${uber}`, `${usdepartment}`, `${intuit}`, `${newscorp}`, `${medical}`, `${sonos}`];

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = (prev) => {
        setIsHovered(!prev);
    }

    return (
        <div className='enterprise__header section__padding'>
            <div className='enterprise__header_top'>
                <div className='enterprise__header_content'>
                    <h4 className='small-heading'>Enterprise</h4>
                    <h2 className='section-heading'>Built with enterprises, for enterprises</h2>
                    <p className='enterprise__header-intro'>Slack is secure. It’s flexible. It’s software that people actually enjoy using. And it’s here to help your business.</p>
                    <p className='enterprise__header-advantage'>Learn how Slack supports organizations of all sizes:</p>
                    <ul className='enterprise__header_list'>
                        {listData.map((item, index) => {
                            return (
                                <li className='enterprise__header_item' key={index}>
                                    <div className='enterprise__header-checkimg bullets'>
                                        <img src={check} alt='check img' />
                                    </div>
                                    <p>{item}</p>
                                </li>
                            )
                        })}
                    </ul>
                    <button className='purple-btn' type='button'>Contact sales</button>
                </div>
                <div className='enterprise__header-imagecontainer'>
                    <div className='enterprise__header_image'>
                        <img src={heroImage} alt='header img' />
                    </div>
                </div>
            </div>
            <div className='enterprise__header_bottom' onMouseEnter={() => handleHover(isHovered)} onMouseLeave={() => handleHover(isHovered)}>
                <div className='enterprise__header-logos'>
                    {logoImages.map((image, index) => {
                        return (
                            <div key={index}>
                                <img src={image} alt='logo img' />
                            </div>
                        )
                    })}
                </div>
                {isHovered && (
                    <div className='enterprise__header_seemore' >
                        <p>See all customer stories</p>
                        <img src={arrow} alt='arrow img' />
                    </div>
                )}
            </div>
        </div>
    )
}

export default HeaderEnterprise;