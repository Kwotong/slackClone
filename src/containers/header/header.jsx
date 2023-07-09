import React from 'react';
import './header.css';
import googleLogo from '../../assets/google-logo.png';
import video from '../../assets/hero-product-ui.webm';

function Header() {
    return(
        <div className='slack__header'>
            <div className='slack__header-content'>
                <h1 className='slack__header-heading'>Made for people.<br /><span>Built for productivity.</span></h1>
                <p className='slack__header-description'>Connect the right people, find anything you need and automate the rest. That’s work in Slack, your productivity platform.</p>
                <div className='slack__header-btn_container'>
                    <button className='white-btn'>Sign Up With Slack</button>
                    <div className='slack__header-google_btn'>
                        <div className='slack__header-btnImage'>
                            <img src={googleLogo} alt='google logo' />
                        </div>
                        <p>Sign Up with Google</p>
                    </div>
                </div>
                <p className='slack__header-description'>Slack is free to try for as long as you’d like</p>
            </div>
            <div className='slack__header-video'>
                <video src={video} width='100%' height='auto' />
            </div>
        </div>
    )
}

export default Header;