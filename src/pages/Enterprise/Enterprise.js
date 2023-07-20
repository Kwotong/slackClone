import React from 'react';
import { HeaderEnterprise, Scale, Security, Engagement, Platform, SlackConnect, Blank, Blog } from '../../containers/enterprise';

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
        </div>
    )
}

export default Enterprise;