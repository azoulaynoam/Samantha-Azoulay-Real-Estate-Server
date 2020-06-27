import React from 'react';
import './styles/apartment-section.css'
import Axios from 'axios';

const ApartmentCard = props => {
    return(
        <div className="apartment-card">
            <div className="card-gallery">
                <img src={'./images/' + props.apartment._id} alt='blah' className="cover"/>
            </div>
            <div className="apartment-data">
                <div className="icon">
                    <i class="fas fa-bed"></i>
                </div>
                <div className="value">
                    <b>{props.apartment.number_of_rooms}</b>
                </div>
            </div>
        </div>
    );
}

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
                <ApartmentCard apartment={this.state.apartment}/>
                <div className="right arrow" onClick={this.rightArrow}>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
        </div>
        )
    }
}

export default ApartmentSection;