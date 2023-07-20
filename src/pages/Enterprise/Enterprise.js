import React from 'react';
import { HeaderEnterprise, Scale, Security, Engagement, Platform } from '../../containers/enterprise';

function Enterprise () {
    return (
        <div>
            <HeaderEnterprise />
            <Scale />
            <Security />
            <Engagement />
            <Platform />
        </div>
    )
}

export default Enterprise;