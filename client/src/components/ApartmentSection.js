import React from 'react';
import Axios from 'axios';
import './styles/apartment-section.css';
import ImageSlider from './ImageSlider'
import IconWithValue from './IconWithValue';
import UnderConstruction from './UnderConstruction';

var apartment_index = 0;

class ApartmentSection extends React.Component{
    constructor() {
        super();

        this.state = {
            apartments: [],
            apartment: []
        }
    }

    rightArrow = () => {
        if (this.state.apartments.length - 1 > apartment_index) {
            apartment_index++;
            this.setState({apartment: this.state.apartments[apartment_index]});
        }
    }

    leftArrow = () => {
        if (apartment_index > 0) {
            apartment_index--;
            this.setState({apartment: this.state.apartments[apartment_index]});
        }
    }

    componentDidMount() {
        Axios.get('https://samantha-azoulay-real-estate.herokuapp.com/properties')
        .then(res => {
            this.setState({apartments: res.data, apartment: res.data[0], status: true});
        }).catch(err => {
            this.setState({status: false});
        });
    };

    render() {
        if (this.state.status)
            return(
            <div className="apartment-search-section" id="apartment-search-section">
                <div className="title">
                    <h1>Apartments</h1>
                </div>
                <div className="gallery">
                    <div className="left arrow" onClick={this.leftArrow}>
                        <i className="fas fa-angle-left"></i>
                    </div>
                    <div className="apartment-card">
                        <ImageSlider apartment={this.state.apartment}/>
                        <div className="info-container">
                            <IconWithValue icon="fas fa-door-open" value={this.state.apartment.rooms}/>
                            <IconWithValue icon="fas fa-bed" value={this.state.apartment.bedrooms}/>
                            <IconWithValue icon="fas fa-bath" value={this.state.apartment.bathrooms}/>
                            <IconWithValue icon="fas fa-ruler-combined" value={this.state.apartment.size}/>
                        </div>
                    </div>
                    <div className="right arrow" onClick={this.rightArrow}>
                        <i className="fas fa-angle-right"></i>
                    </div>
                </div>
            </div>
            )
        else
            return(
                <UnderConstruction/>
            );
    }
}

export default ApartmentSection;