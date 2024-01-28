import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home/home';
import About from './About/about';
import Contact from './Contact/contact';
import CardItemDetail from './CartItemDetail/cardItemDetail';

const Main = () => {

    return (
        <main className='main'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home">
                    <Route index element={<Home/>}/>
                    <Route path=":id" element={<CardItemDetail />} />
                </Route>    
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
    )
}

export default Main