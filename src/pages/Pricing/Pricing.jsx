import React from 'react';
import { Blog, Details, Faq, Plan } from '../../containers/pricing';
import { Footer } from '../../components';

function Pricing () {
    return (
        <div>
            <Plan />
            <Details />
            <Faq />
            <Blog />
            <Footer 
            heading='Whatever work you do, you can do it in Slack'
            firstButton='get started' 
            secondButton='talk to sales' 
            />
        </div>
    )
}

export default Pricing;