import React from 'react';
import './signUp.css';
import logoBlack from '../../assets/rsz_slack_rgb.png';
import googleLogo from '../../assets/googleLogo.svg';
import appleLogo from '../../assets/appleLogo.svg';

function SignUpContainer() {
    return (
        <div className='signup section__padding'>
            <div className='signup__logo' >
                <img src={logoBlack} alt='slack logo' />
            </div>
            <div className='signup__content'>
                <h2>Sign in to Slack</h2>
                <p className='singup__text'>We suggest using the email address you use at work.</p>
                <input className='signup__email' type='email' name='email' required placeholder='name@work-email.com' />
                <button type='button' className='signup__button'>Sign in With Email</button>
                <p className='signup__altenative'><span>OR</span></p>
                <div className='signup__google'>
                    <img src={googleLogo} alt='google logo' />
                    <p>Sign in with Google</p>
                </div>
                <div className='signup__apple'>
                    <img src={appleLogo} alt='apple logo' />
                    <p>Sign in With Apple</p>
                </div>
                <div className='signup__message'>
                    <p>Aready using Slack?</p>
                    <p>Sign into an existing workspace</p>
                </div>
            </div>
            <div className='signup__footer' >
                <p>Privacy & Terms</p>
                <p>Contact Us</p>
                <p>Change Region</p>
            </div>
        </div>
    )
}

export default SignUpContainer;