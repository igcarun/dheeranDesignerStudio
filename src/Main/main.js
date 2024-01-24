import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Home from './Home/home';
import About from './About/about';
import Contact from './Contact/contact';

const Main = () => {
// sbdf
   
    return (
        <main className='main'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
    )
}

export default Main