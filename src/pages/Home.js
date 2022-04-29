import React from 'react';
import '../App.css';
import Title from '../Title';
import Cards from '../Cards';
import Slides from '../Slides';

function Home() {
    return (
        <div className="App">
            <Title />
            <Cards />
            <Slides />
        </div>
    );
}

export default Home;