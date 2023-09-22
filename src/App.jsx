import './App.css';
import React from 'react';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Hero from './components/Hero/Hero';
import WeatherContainer from './components/WeatherContainer/WeatherContainer'
import HighlightItemContainer from './components/HighlightsItemContainer/HighlightsItemContainer';


function App() {

    return (
        <div>   
            <Hero/>
            <WeatherContainer/>
            <HighlightItemContainer/>
            <Footer/>       
        </div>
    )
}

export default App 