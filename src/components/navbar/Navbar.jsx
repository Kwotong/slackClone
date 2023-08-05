import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { RiSearchLine, RiMenuLine } from 'react-icons/ri';
import { AiOutlineDownload } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { FaCaretRight } from 'react-icons/fa';

import logoWhite from '../../assets/slacklogo.png';
import logoBlack from '../../assets/rsz_slack_rgb.png';
import caretDown from '../../assets/icon_chevron_white_nav.svg';


function Navbar() {

    // DROPDOWN

    const dropdownText = ['Features', 'Channels', 'Intefration', 'Security', 'Slack Connect', 'Customers'];

    const DropDown = () => {
        return (
            <div className='slack__navbar-dropdown_container'>
                <div className='slack__navbar-dropdown_links'>
                    { dropdownText.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    })}
                </div>
                <div className='divider' />
                <div className='slack__navbar-dropdown_downlods'>
                    <AiOutlineDownload size={25} className='download' />
                    <p>Download Slack</p>
                </div>
            </div>
        )
    }

    // PHONE MENU

    const PhoneMenu = () => {
        return (
            <div className='slack__phone_menu'>
                <div className='slack__phone_menu-top'>
                    <div className='slack__phone_menu-logo'>
                        <img src={logoBlack} alt='logo img' />
                    </div>
                    <IoMdClose />
                </div>
                <div className='slack__phone_menu-middle'>
                    <div>
                        <p>Product</p>
                    </div>
                    <FaCaretRight />
                </div>
                <div className='slack__phone_menu-bottom'>

                </div>
            </div>
        )
    }

// NAVBAR WITH LINKS
    
    const MenuLinkContent = () => {

        const [toggleProduct, setToggleProduct] = useState(false);
    
        const handleHover = () => {
            setToggleProduct((prev) => (!prev));
        }

        return (
            <div className='slack__navbar'>
                <div className='slack__navbar-links'>
                    <div className='slack__navgar-links_logo'>
                        <img src={logoWhite} alt='logo image' />
                    </div>
                    <div className='slack__navbar-links_container'>
                        <div className='slack__navbar-link_dropdown' onMouseEnter={handleHover} onMouseLeave={handleHover}>
                            <p className=''><a href='#'> Product</a></p>
                            <img src={caretDown} alt='caret down' className={ toggleProduct ? 'rotate' : '' }/>
                            {toggleProduct && <DropDown /> }
                        </div>
                        <div className='slack__navbar-link'>
                            <p className='slack__navbar-linkitems'><a href='#'>Solutions</a></p>
                        </div>
                        <div className='slack__navbar-link'>
                            <p className='slack__navbar-linkitems'><a href='/enterprise'>Enterprise</a></p>
                        </div>
                        <div className='slack__navbar-link'>
                            <p className='slack__navbar-linkitems'><a href='#'>Resources</a></p>
                        </div>
                        <div className='slack__navbar-link'>
                            <p className='slack__navbar-linkitems'><a href='/pricing'>Pricing</a></p>
                        </div>
                    </div>
                </div>
                <div className='slack__navbar-buttons'>
                    <RiSearchLine color='#fff' size={25} className='slack__navbar-search' onClick={() => handleMenu(true)}/>
                    <RiMenuLine color='#fff' size={25} className='slack__navbar-phonemenu'/>
                    <a href='/signin'><button className='slack__navbar-signin'>Sign in</button></a>
                    <a href='/contact-sales'><button className='slack__navbar-sales'>TALK TO SALES</button></a>
                    <a href='/signup'><button className='slack__navbar-free'>TRY FOR FREE</button></a>
                </div>
            </div>
        )
    }

// NAVBAR WITH SEARCH

const SearchMenu = () => {

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

    return (
        <div className='slack__search'>
            <div className='slack__search-logo'>
                <img src={logoBlack} alt='logo image' />
            </div>
            <RiSearchLine size='25px' className='slack__search-searchIcon'/>
            <div className='slack__search-input'>
                <input type='text' name='search' id='search' placeholder={ windowWidth < 890 ? 'Search slack.com' : 'Find anything (ie. channels, emoji, or reset password'} />
                <IoMdClose size='25px' className='slack__search-closeIcon' onClick={() => handleMenu(false)}/>
            </div>
            <button type='button' className='transparent-btn-purple'>Search</button>
        </div>
    )
}
   const [displayMenu, setDisplayMenu] = useState(false);

   const handleMenu = (state) => {
        setDisplayMenu(() => state);
   }

    return(
        <div className='slack__navbar-container'>
            { displayMenu ? <SearchMenu /> : <MenuLinkContent /> }
        </div>
    )
}

export default Navbar;