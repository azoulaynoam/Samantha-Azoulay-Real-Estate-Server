import React from 'react';
import Axios from 'axios';
import ApartmentGalleryMobile from './ApartmentGalleryMobile';
import ApartmentGalleryDesktop from './ApartmentGalleryDesktop';
import UnderConstruction from './UnderConstruction';
import './styles/apartment-section.css';

class ApartmentSection extends React.Component{
    constructor() {
        super();

        this.state = {
            apartments: []
        }
    }

    componentDidMount() {
        Axios.get('https://samantha-azoulay-real-estate.herokuapp.com/properties')
        .then(res => {
            this.setState({apartments: res.data});
        }).catch(err => {
            this.setState({apartments: []});
        });
    };

    render() {
        if (this.state.apartments.length > 0){
            return(
                <div className="apartment-search-section" id="apartment-search-section">
                    <div className="title">
                        <h1>Apartments</h1>
                    </div>
                    {window.innerWidth <=800 ? <ApartmentGalleryMobile apartments={this.state.apartments}/> : <ApartmentGalleryDesktop apartments={this.state.apartments}/>}
                </div>
            )
         }else {
            return(<UnderConstruction/>)
        }
    }
}

export default ApartmentSection;