import React from 'react';
import { Blog, Details, Faq, Plan } from '../../containers/pricing';

function Pricing () {
    return (
        <div>
            <Plan />
            <Details />
            <Faq />
            <Blog />
        </div>
    )
}

export default Pricing;