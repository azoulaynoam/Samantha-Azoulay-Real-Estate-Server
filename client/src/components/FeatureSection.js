import React from 'react';
import './styles/feature-section.css';

class FeatureSection extends React.Component {
    render() {
        return(
            <div className="feature-section">
                <div className="column-wrapper">
                    <div className="column">
                        <i className="far fa-handshake"></i>
                        <p id="feature-title">Reliability</p>
                        <p>
                            You can count on me on anything you need!
                        </p>
                    </div>
                    <div className="column">
                        <i className="fas fa-cut"></i>
                        <p id="feature-title">For Any Purpose</p>
                        <p>
                            For good investments and living!
                        </p>
                    </div>
                    <div className="column">
                        <i className="fas fa-language"></i>
                        <p id="feature-title">Multi Language Support</p>
                        <p>
                            Hebrew, English and French
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeatureSection;