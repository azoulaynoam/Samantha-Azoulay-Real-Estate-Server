import React from 'react';
import './styles/nav.css'

class NavigationBar extends React.Component {
    render() {
        return(
        <div className="navigation-wrapper">
            <div className="left-column">
                <div className="icon">
                    <a href="tel:+972502364585">
                        <i className="fas fa-phone-volume"></i>
                    </a>
                </div>
                <div className="contact-hours-wrapper">
                    <div className="phone">
                        <a href="tel:+972502364585">
                            +972-502-364-585
                        </a>
                    </div>
                    <div className="hours">
                        8:00 - 22:00
                    </div>
                </div>
            </div>
            <div className="center-column">
                <div className="icon">
                    <img src="images/icon.png" alt="Icon"/>
                </div>
                <div className="logo">
                    Samantha Azoulay
                    <br/>
                    Real-Estate
                </div>
            </div>
            <div className="right-column">
                <input type="checkbox" id="check"/>
                <label className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <div className="links-wrapper">
                    <div className="nav-link">
                        <a href="index.html">Home</a>
                    </div>
                    <div className="nav-link">
                        <a href="about.html">About Me</a>
                    </div>
                    <div className="nav-link">
                        <a href=".contact-me">Contact Me</a>
                    </div>
                    <div className="nav-link">
                        <a href="#apartment-search-section">Apartments</a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default NavigationBar;