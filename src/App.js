import React from 'react';
import './app.css';
import { Navbar, Search } from './components';
import { Footer, Header, Teams, Usedby, Feature, Testimonial, Blog } from './containers';

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
            <Footer />
        </div>
    )
}

export default App;