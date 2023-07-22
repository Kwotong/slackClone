import React from 'react';
import './blog.css'
import { ReadMore, ArticleFW } from '../../../components';
import intuitBooks from '../../../assets/intuit-quickbooks.jpeg';
import intuit from '../../../assets/intuit.png';
import lyft from '../../../assets/lyft.jpeg';
import lyftLogo from '../../../assets/lyft-logo.png';
import shopifyCustomer from '../../../assets/Slack-Customer-Shopify.jpeg';
import shopifyLogo from '../../../assets/Shopify-logo.png';
import slackCustomer from '../../../assets/slack-customer.jpeg';
import EverlaneLogo from '../../../assets/Everlane-logo.png';
import airbnb from '../../../assets/airbnb-logo.png';
import target from '../../../assets/target-logo.png';
import uber from '../../../assets/uber.png';
import newscorp from '../../../assets/logo-newscorp.png';
import medical from '../../../assets/logo-onemedical.png';
import sonos from '../../../assets/logo-sonos.png';
import usdepartment from '../../../assets/us-department-of-veteran-affairs.png';

function Blog() {

    const logoImages = [`${airbnb}`, `${target}`, `${uber}`, `${usdepartment}`, `${intuit}`, `${newscorp}`, `${medical}`, `${sonos}`];

    return (
        <div className='pricing__blog section__padding'>
            <h2 className='pricing__blog-heading'>You’re in good company</h2>
            <p className='pricing__blog-text'>Teams of every size, shape and kind have already made Slack the place where their work happens.</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }} >
                <ReadMore text='View all customer stories' />
            </div>
            <div className='pricing__blog-container'>
                <ArticleFW image={intuitBooks} logo={intuit} heading='Support agents at Intuit QuickBooks increase customer satisfaction by 12% with Slack' />
                <ArticleFW image={lyft} logo={lyftLogo} heading='Mission-critical sales work at Lyft Business' />
                <ArticleFW image={shopifyCustomer} logo={shopifyLogo} heading='eCommerce platform deploys super bot to enable glitch-free purchases' />
                <ArticleFW image={slackCustomer} logo={EverlaneLogo} heading='Everlane and Happy Returns elevate customer service with Slack' />
            </div>
            <div className='pricing__blog_logo-container'>
                {logoImages.map((item, index) => {
                    return (
                        <div className='pricing__blog-logoImg' key={index}>
                            <img src={item} alt='item image' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog;