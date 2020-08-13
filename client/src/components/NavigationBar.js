import React from 'react';
import './styles/navigation-bar.css'

class NavigationBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false
        }
    }

    nav_link = (props) => {
        return(
            <div className="nav-link" onClick={this.menuClicked}>
                <a href={props.link}>{props.text}</a>
            </div>
        )
    }

    links_wrapper = (
        <div className="links-wrapper">
            <this.nav_link link="#hero-section" text="Home"/>
            <this.nav_link link="#about_me" text="About Me"/>
            <this.nav_link link="#apartment-search-section" text="Apartments"/>
        </div>
    )

    menuClicked = () => {
        this.setState({showMenu: !this.state.showMenu})
    }

    menuButton = (
        <label className="menu-btn" onClick={this.menuClicked}>
            <i className="fas fa-bars"></i>
        </label>
    )

    render() {
        return(
        <div className="navigation-wrapper">
            <div className="navigation-bar">
                <div className="left-column">
                    <div className="icon">
                        <a href="https://wa.me/+972-(050)2364585">
                            <i className="fab fa-whatsapp"></i>
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
                    {window.innerWidth > 800 ? this.links_wrapper : this.menuButton}
                </div>
            </div>
            {window.innerWidth <= 800 && this.state.showMenu ? this.links_wrapper : null}
        </div>
        )
    }
}

export default NavigationBar