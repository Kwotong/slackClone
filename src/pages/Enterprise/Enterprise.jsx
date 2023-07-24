import React from 'react';
import { HeaderEnterprise, Scale, Security, Engagement, Platform, SlackConnect, Blank, Blog, Faq } from '../../containers/enterprise';
import { Footer } from '../../components';

function Enterprise () {
    return (
        <div>
            <HeaderEnterprise />
            <Scale />
            <Security />
            <Engagement />
            <Platform />
            <SlackConnect />
            <Blank />
            <Blog />
            <Faq />
            <Footer 
            heading='Choose a better way to work'
            firstButton='talk to sales' 
            // secondButton='talk to sales' 
            />
        </div>
    )
}

export default Enterprise;