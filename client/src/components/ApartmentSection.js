import React from 'react';
import './styles/apartment-section.css';
import IconWithValue from './IconWithValue';
import Axios from 'axios';

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
            if (this.state.apartment.number_of_rooms){
                
            }
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
            this.setState({apartments: res.data, apartment: res.data[0]});
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    };

    render() {
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
                    <div className="card-gallery">
                        <img src={'./images/' + this.state.apartment._id} alt='blah' className="cover"/>
                    </div>
                    <div className="info-container">
                        <IconWithValue icon="fas fa-bed" value={this.state.apartment.bedrooms}/>
                        <IconWithValue icon="fas fa-ruler-combined" value={this.state.apartment.size}/>
                        <IconWithValue icon="fas fa-bath" value={this.state.apartment.bathrooms}/>
                        <IconWithValue icon="fas fa-door-open" value={this.state.apartment.rooms}/>
                    </div>
                </div>
                <div className="right arrow" onClick={this.rightArrow}>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
        </div>
        )
    }
}

export default ApartmentSection;