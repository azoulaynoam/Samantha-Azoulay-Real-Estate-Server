import React from 'react';
import NavigationBar from './NavigationBar';
import Background from './Background';
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection';
import ApartmentSection from './ApartmentSection';
import CopyrightSection from './CopyrightSection';
import './styles/common.css';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Background/>
                <NavigationBar/>
                <HeroSection/>
                <FeatureSection/>
                <ApartmentSection/>
                <CopyrightSection/>
            </div>
        );
    };
}

export default App;