import React from 'react'
import './Title.css';
import headshot from "./img/Krishna-Headshot.JPG"

function Title() {
    return (
        <div>
        <div class="header-main">
            <img class="clip-polygon" id="headshot" src={headshot} alt="headshot"/>
            <div id="title-info">
                <h1 id="name-title">KRISHNA<br />PATEL</h1>
                <p>SITE CURRENTLY UNDER CONSTRUCTION</p>
            </div>
        </div>
            <div class="arrow-down"></div>
        </div>
    )
}

export default Title