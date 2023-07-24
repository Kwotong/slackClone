import React from 'react';
import './signIn.css';
import logoBlack from '../../assets/rsz_slack_rgb.png';
import googleLogo from '../../assets/googleLogo.svg';
import appleLogo from '../../assets/appleLogo.svg';
import sparkles from '../../assets/sparkles.png';

function SignInContainer() {
    return (
        <div className='signin section__padding'>
            <div className='signin__new'>
                <p >New to Slack?</p>
                <p >Create an Account</p>
            </div>
            <div className='signin__content'>
                <div className='signin__logo'>
                    <img src={logoBlack} alt='slack logo' />
                </div>
                <div className='signin__input'>
                    <h2>Sign in to Slack</h2>
                    <p className='singin__text'>We suggest using the email address you use at work.</p>
                    <div className='signin__google'>
                        <img src={googleLogo} alt='google logo' />
                        <p>Sign in with Google</p>
                    </div>
                    <div className='signin__apple'>
                        <img src={appleLogo} alt='apple logo' />
                        <p>Sign in With Apple</p>
                    </div>
                    <p className='signin__altenative'><span>OR</span></p>
                    <input className='signin__email' type='email' name='email' required placeholder='name@work-email.com' />
                    <button type='button' className='signin__button'>Sign in With Email</button>
                    <div className='signin__message'>
                        <img src={sparkles} alt='star img' />
                        <p>We’ll email you a magic code for a password-free sign in. Or you can <span>sign in manually instead</span>.</p>
                    </div>
                </div>
                <div className='signin__footer'>
                    <p>Privacy & Terms</p>
                    <p>Contact Us</p>
                    <p>Change Region</p>
                </div>
            </div>
        </div>
    )
}

export default SignInContainer;