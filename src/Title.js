import React from 'react'
import './Title.css';
import headshot from "./img/Krishna-Headshot.JPG"

function Title() {
    return (
        <div className="back-pic vignette-shadow">
            <div className="border-back">
                <div className="header-main">
                    <img className="clip-polygon vignette-shadow" id="headshot" src={headshot} alt="headshot"/>
                    <div id="title-info">
                        <h1 id="name-title">KRISHNA<br />PATEL</h1>
                        <p>SITE CURRENTLY UNDER CONSTRUCTION</p>
                    </div>
            </div>
        </div>
            <div className="arrow-down"></div>
        </div>
    )
}

export default Title