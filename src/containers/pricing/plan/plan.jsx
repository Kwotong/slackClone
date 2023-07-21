import React from 'react';
import './plan.css';
import tick from '../../../assets/tick.svg';

const PlanDescription = ({ plan, description, price, btnText, prevBenefits, data }) => {
    return (
        <div className='pricing__plan-description'>
            <div className='pricing__plan-top'>
                <h3 className='pricing__plan-name'>{plan}</h3>
                <div className='pricing__plan-def-container'>
                    <p className='pricing__plan-definition'>{description}</p>
                    <h3 className='pricing__plan-price'><span>{price}</span></h3>
                </div>
                <button className='purple-btn pricing__plan-button'>{btnText}</button>
                <p className='pricing__plan-benefits'>{prevBenefits}</p>
                {data.map((item, index) => {
                    return (
                        <div className='pricing__plan-detail' key={index} >
                            <div className='pricing__plan-tick'>
                                <img src={tick} alt='tick img' />
                            </div>
                            <p className='pricing__plan-detail-text' >{item}</p>
                        </div>
                    )
                })
                }
            </div>
            <div className='pricing__plan-bottom'>
                <p className='pricing__plan-readmore'>Learn more</p>
            </div>
        </div>
    )
}
function Plan() {

    const freeData = [
        'Access to the most recent 90 days of message history',
        '10 integrations with other apps like Google Drive, Office 365 and many more',
        '1:1 audio and video conversations with screen sharing',
        'Canvases in channels and DMs with 7 days of version history'
    ]

    const proData = [
        'The full context of your organization’s message history at your fingertips',
        'Timely info and actions in one place with unlimited integrations',
        'Audio and video conversations with screen sharing with up to 50 people',
        'Secure collaboration with outside organizations or guests from within Slack',
        'Unlimited canvases with 30 days of version history and advanced user roles'
    ]

    const businessData = [
        'Advanced identity management through SAML-based SSO and real-time Active Directory sync with OneLogin, Okta and Ping Identity',
        'Compliance requirements met with data exports for all messages',
        'Around-the-clock teamwork and assistance with 99.99% guaranteed uptime and 24/7 support with a four-hour response time',
        'Unlimited canvases with 90 days of version history'
    ]

    const enterpriseData = [
        'Peace of mind with enterprise-grade security and compliance, such as HIPAA support and the Enterprise Key Management add-on',
        'Large scale collaboration and alignment with support for up to 500,000 users',
        'Streamlined administration with centralized controls and customizable policies',
        'Unlimited canvases and version history plus advanced security and controls'
    ]


    return (
        <div className='pricing__plan'>
            <h2 className='pricing__plan-heading'>Make teamwork more productive</h2>
            <div className='pricing__plan-container'>
                <PlanDescription
                    plan='Free'
                    description='The quickest and easiest way to try Slack'
                    price='$0 USD/mo'
                    btnText='get started'
                    prevBenefits=''
                    data={freeData}
                />
                <PlanDescription
                    plan='Pro'
                    description='More power for small teams who want better collaboration'
                    price='$7.25 USD/mo'
                    btnText='get started'
                    prevBenefits='All the benefits of Free, and:'
                    data={proData}
                />
                <PlanDescription
                    plan='Business+'
                    description='Scale your business, increase productivity, and keep your teams connected'
                    price='$12.50 USD/mo'
                    btnText='get started'
                    prevBenefits='All the goodness of Pro, and:'
                    data={businessData}
                />
                <PlanDescription
                    plan='Enterprise Grid'
                    description='Slack for the most demanding enterprises—all the flexibility to meet your regulatory requirements and all the power to match your growth'
                    btnText='Contact Sales'
                    prevBenefits='All the greatness of Business+, and:'
                    data={enterpriseData}
                />
            </div>
        </div>
    )
}

export default Plan;