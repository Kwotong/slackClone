import React, { useState, useEffect } from 'react';
import './footer.css';
import logo from '../../assets/favicon-32-ua.png';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaTwitter, FaFacebookSquare, FaYoutubeSquare, FaLinkedin, FaCaretDown } from 'react-icons/fa';


function Footer() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const footerData =[
        {
            heading: 'WHY SLACK?',
            text: ['Slack vs. Email', 'Channels', 'Engagement', 'Scale', 'Watch the Demo']
        },
        {
            heading: 'PRODUCT',
            text: ['Features', 'Integrations', 'Enterprise', 'Solutions', 'Releases']
        }, 
        {
            heading: 'PRICING',
            text: ['Plans',  'Paid vs. Free']
        },
        {
            heading: 'RESOURCES',
            text: ['Partners', 'Developers', 'Community',  'Apps', 'Blog', 'Help Center', 'Events']
        },
        {
            heading: 'COMPANY',
            text: ['About Us', 'Leadership', 'News', 'Media Kit', 'Careers']
        }
    ]

    const [activeIndex, setActiveIndex] = useState(null)

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index? null : index);
    }

    function FooterLink ({ item }) {
        return (
            <div>
                { item.text.map((text, index) => {
                    return (
                        <div key={index + text} className='slack__footer-links_test'>
                            <p>{text}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

    const bottomData = ['Status', 'Privacy', 'Terms', 'Your Privacy Choices', 'Cookie Preferences', 'Contact Us', 'Change Region' ];

    const year = new Date().getFullYear();

    return(
        <div className='slack__footer'>
            <div className='slack__footer-top section__padding'>
                <h2>See all you can accomplish with Slack</h2>
                <div className='slack__footer-btn_container'>
                    <button className='white-btn'>Try for free</button>
                    <button className='transparent-btn-white'>Talk to sales</button>
                </div>
            </div>
            <div className='slack__footer-middle'>
                <div className='slack__footer-icon_container'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='slack__footer-links_container'>
                    { footerData.map((item, index) => {
                        return (
                            <div className='slack__footer-links_column_container' key={index}>
                                <div className='slack__footer-links-head' onClick={ windowWidth < 620 ? () => toggleAccordion(index) : null}>
                                    <h4>{item.heading}</h4>
                                    { windowWidth < 620 && <FaCaretDown className={`${ activeIndex === index ? 'rotate' : ''}`}/>}
                                </div>
                                { windowWidth > 620 && <FooterLink item={item} /> }
                                { activeIndex === index && windowWidth <= 620 && <FooterLink item={item} /> }
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='slack__footer-bottom'>
                <div className='slack__footer-bottom_links'>
                    <div className='slack__footer-links_text'>
                    { bottomData.map((link, index) => {
                        return(
                                <p key={index}>{link}</p>
                                )
                            })}
                    </div>
                    <div className='slack__footer_icon'>
                        <div className='slack__footer-download'>
                            <AiOutlineDownload size={24} color='var(--color-5)' />
                            <p>Download Slack</p>
                        </div>
                        <div className='slack__footer-social'>
                            <FaTwitter className='social-icon' />
                            <FaFacebookSquare className='social-icon'/>
                            <FaYoutubeSquare className='social-icon'/>
                            <FaLinkedin className='social-icon'/>
                        </div>
                    </div>
                </div>
                <p className='footer__bottom-text' >©{year} Slack Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.</p>
            </div>
        </div>
    )
}

export default Footer;