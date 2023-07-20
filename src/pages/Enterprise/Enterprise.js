import React from 'react';
import { HeaderEnterprise, Scale, Security, Engagement, Platform, SlackConnect, Blank, Blog, Faq } from '../../containers/enterprise';

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
        </div>
    )
}

export default Enterprise;