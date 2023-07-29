import React, { useState, useEffect } from 'react';
import './form.css';
import airbnb from '../../../assets/airbnb-logo.png';
import target from '../../../assets/target-logo.png';
import uber from '../../../assets/uber.png';
import intuit from '../../../assets/intuit.png';
import newscorp from '../../../assets/logo-newscorp.png';
import medical from '../../../assets/logo-onemedical.png';
import sonos from '../../../assets/logo-sonos.png';
import usdepartment from '../../../assets/us-department-of-veteran-affairs.png';
import lyftLogo from '../../../assets/lyft-logo.png';

function Form() {

    const logo = [`${airbnb}`, `${target}`, `${uber}`, `${intuit}`, `${newscorp}`, `${usdepartment}`, `${medical}`, `${sonos}`];


    function handleClick(event) {


        event.preventDefault(); // prevent page refresh. yet to add action for submit button
    }

    const [contactInfo, setContactInfo] = useState({
        fName: '',
        lName: '',
        email: '',
        country: '',
        company: '',
        size: '',
        department: '',
        role: '',
        tel: '',
        help: '',
        more: ''
    });

    const updateFormState = (name, value, prev) => {
        return {
          ...prev,
          [name]: value,
        };
    };

    function handleChange(event) {
        const { name, value } = event.target;

        setContactInfo((prev) => updateFormState(name, value, prev));

        console.log(contactInfo);
    }

    return (
        <div className='contact__form section__padding' >
            <div className='contact__form-companies'>
                <h2 className='contact__form-heading' >Incredible companies use Slack</h2>
                <div className='contact__form-logo-container'>
                    {logo.map((logo, index) => {
                        return (
                            <div className='contact__form-logo' key={index}>
                                <img src={logo} alt='logo img' />
                            </div>
                        )
                    })}
                </div>
                <hr className='divider' />
                <div className='contact__form-testimonial'>
                    <img src={lyftLogo} alt='logo img' />
                    <p className='contact__form-testimonial-text'>“Slack is business done right. When you have collaboration happening in one spot, leadership doesn’t need to be copied on an email. You can hop into a Slack channel, cruise along with the project, and jump in where needed.”</p>
                    <p className='contact__form-testimonial-name'>Benjamin Sternsmith</p>
                    <p className='contact__form-testimonial-position'>Area Vice President of Sales, Lyft Business</p>
                </div>
            </div>
            <div className='contact__form-input'>
                <form onSubmit={handleClick}>
                    <div className='contact__form_twoColumns'>
                        <div className='contact__form-col-1'>
                            <label htmlFor='fName'>First Name <span>*</span></label>
                            <input id='fName' name='fName' required type='text' onChange={handleChange} value={contactInfo.fName} placeholder='Your first name'></input>
                        </div>
                        <div className='contact__form-col-2'>
                            <label htmlFor='lName'>Last Name <span>*</span></label>
                            <input id='lName' name='lName' type='text' required onChange={handleChange} value={contactInfo.lName} placeholder='Your last name'></input>
                        </div>
                    </div>
                    <div className='contact__form-row'>
                        <label htmlFor='email'>Work email <span>*</span></label>
                        <input id='email' name='email' onChange={handleChange} placeholder='example@acme.com' value={contactInfo.email} type='email' required ></input>
                    </div>
                    <div className='contact__form-row'>
                        <label htmlFor='country'>Country <span>*</span></label>
                        <select name='country' id='country' required onChange={handleChange} value={contactInfo.country}>
                            <option value="">Please select one</option>
                            <option value="1">Cameroon</option>
                            <option value="2">Nigeria</option>
                            <option value="3">United States</option>
                            <option value="4">United Kingdom</option>
                            <option value="5">Germany</option>
                        </select>
                    </div>
                    <div className='contact__form_twoColumns'>
                        <div className='contact__form-col-1'>
                            <label htmlFor='company'>Company <span>*</span></label>
                            <input type='text' name='company' id='company' required placeholder='Company Name' onChange={handleChange} value={contactInfo.company}></input>
                        </div>
                        <div className='contact__form-col-2'>
                            <label htmlFor='size'>Company size <span>*</span></label>
                            <select name='size' id='size' required onChange={handleChange} value={contactInfo.size}>
                                <option value="">Please select one</option>
                                <option value="1-15">1-15</option>
                                <option value="16-100">16-100</option>
                                <option value="01-500">101-500</option>
                                <option value="501-1000">501-1000</option>
                                <option value="1000+">1000+</option>
                            </select>
                        </div>
                    </div>
                    <div className='contact__form_twoColumns'>
                        <div className='contact__form-col-1'>
                            <label htmlFor='department'>Department <span>*</span> </label>
                            <select name='department' id='department' required onChange={handleChange} value={contactInfo.department}>
                                <option value="">Please select one</option>
                                <option value="1">Dev/Engineering</option>
                                <option value="2">Sales</option>
                                <option value="3">IT</option>
                                <option value="4">Support & Success</option>
                                <option value="5">Marketing</option>
                                <option value="6">Finance/Legal/Ops</option>
                                <option value="6">HR/People</option>
                                <option value="6">Strategy/Biz Dev</option>
                            </select>
                        </div>
                        <div className='contact__form-col-2'>
                            <label htmlFor='role'>Role <span>*</span></label>
                            <select name='role' id='role' required onChange={handleChange} value={contactInfo.role}>
                                <option value="">Please select one</option>
                                <option value="1">CXO</option>
                                <option value="2">VP</option>
                                <option value="3">Director</option>
                                <option value="4">Manager</option>
                                <option value="5">Contributor</option>
                            </select>
                        </div>
                    </div>
                    <div className='contact__form-row'>
                        <label htmlFor='tel'>Phone Number <span>*</span></label>
                        <input type='tel' name='tel' id='tel' required placeholder='(555) 555 5555' onChange={handleChange} value={contactInfo.tel}></input>
                    </div>
                    <div className='contact__form-row'>
                        <label htmlFor='help'>How can our sales help you <span>*</span></label>
                        <select name='help' id='help' required onChange={handleChange} value={contactInfo.help}>
                            <option value="">Please select one</option>
                            <option value="1">I want to evaluate slack for my organization</option>
                            <option value="2">I want to understand which slack plan is right for me</option>
                            <option value="3">I want to buy linceses or upgrade</option>
                            <option value="4">I have a product question</option>
                            <option value="5">I need a compliance plan</option>
                        </select>
                    </div>
                    <hr className='divider' />
                    <div className='contact__form-row'>
                        <label htmlFor='more'>Anyting else? (optional) </label>
                        <textarea name='more' id='more' rows='5' placeholder='What challenges are you looking to overcome with Slack' onChange={handleChange} value={contactInfo.more}></textarea>
                    </div>
                    <p className='contact__form-info'>By registering, you confirm that you agree to the processing of your personal data by Salesforce as described in the <span>Privacy Statement</span>.</p>
                    <p className='contact__form-instruction'>Fields marked with an asterisk (*) are required.</p>
                    <button className='purple-btn' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;