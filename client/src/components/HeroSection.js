import React from 'react';
import './styles/hero-section.css';

class HeroSection extends React.Component {
    render() {
        return(
        <div className="hero-section">
            <div className="top-heading">
                <h1>Are you looking for an apartment in Israel?</h1>
            </div>
            <div className="bottom-heading">
                <h1>Do you need help finding a buyer or a seller?</h1>
            </div>
        </div>
        )
    }
}

export default HeroSection;