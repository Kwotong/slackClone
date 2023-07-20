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
            <Footer />
        </div>
    )
}

export default Enterprise;