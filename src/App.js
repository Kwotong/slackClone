import React from 'react';
import './app.css';
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
            <Footer />
        </div>
    )
}

export default App;