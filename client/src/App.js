import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Background from './components/Background'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import ApartmentSection from './components/ApartmentSection'
import CopyrightSection from './components/CopyrightSection'
import AdminPanel from './admin-panel/AdminPanel'
import './components/styles/common.css'

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Background/>
                <NavigationBar/>
                <Router>
                    <Route path="/" exact={true}>
                        <HeroSection/>
                        <FeatureSection/>
                        <ApartmentSection/>
                        <CopyrightSection/>
                    </Route>
                    <Route path="/Admin">
                        <AdminPanel/>
                    </Route>
                </Router>
            </div>
        );
    };
}

export default App;