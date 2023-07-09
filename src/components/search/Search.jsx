import React from 'react';
import './search.css';
import logoBlack from '../../assets/rsz_slack_rgb.png';
import { RiSearchLine } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';


const Search = () => {
    return (
        <div className='slack__search'>
            <div className='slack__search-logo'>
                <img src={logoBlack} alt='logo image' />
            </div>
            <RiSearchLine size='25px' className='slack__search-searchIcon'/>
            <div className='slack__search-input'>
                <input type='text' name='search' id='search' placeholder='Find anything (ie. channels, emoji, or reset password' />
                <IoMdClose size='25px' className='slack__search-closeIcon'/>
            </div>
            <button type='button' >Search</button>
        </div>
    )
}

export default Search;