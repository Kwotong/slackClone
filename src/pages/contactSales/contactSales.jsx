import React from 'react';
import { Header, Form } from '../../containers/contactSales';
import { Footer } from '../../components';

function ContactSales () {
    return(
        <div>
            <Header />
            <Form />
            <Footer
            heading='See all you can accomplish with Slack'
            firstButton='talk to sales' 
            secondButton='' />
        </div>
    )
}

export default ContactSales;