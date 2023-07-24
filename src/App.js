import React from 'react';
import './App.css';
import { Navbar, Footer, Search } from './components';
import { Header, Teams, Usedby, Feature, Testimonial, Blog } from './containers/home';

function App() {
    return (
        <div>
            <Navbar />
            {/* <Search /> */}
            <Header />
            <Usedby />
            <Feature />
            <Teams />
            <Testimonial />
            <Blog />
            <Footer 
            heading='See all you can accomplish with Slack'
            firstButton='try for free' 
            secondButton='talk to sales' 
            />
        </div>
    )
}

export default App;