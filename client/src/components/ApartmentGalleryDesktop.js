import React from 'react'
import IconWithValue from './IconWithValue'
import ImageSlider from './ImageSlider'
import './styles/apartment-gallery-desktop.css'

class ApartmentGalleryDesktop extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            apartments: props.apartments,
            index: 0
        }
    }

    createPriceTag(price) {
        return(price.toLocaleString() + ' ₪')
    }
    
    apartment = (props) => {
        return(
            <div className="apartment" id={props.id}>
                <div className="left">
                    <ImageSlider apartment={props.apartment}/>
                </div>
                <div className="center">
                    <div className="free-text">
                        <i>{props.apartment.free_text}</i>
                    </div>
                    <div className="info-container">
                        <IconWithValue icon="fas fa-door-open" title="Number of rooms" value={props.apartment.rooms}/>
                        <IconWithValue icon="fas fa-bed" title="Number of bedrooms" value={props.apartment.bedrooms}/>
                        <IconWithValue icon="fas fa-bath" title="Number of bathrooms" value={props.apartment.bathrooms}/>
                        <IconWithValue icon="fas fa-ruler-combined" title="Total square feet" value={props.apartment.size}/>
                    </div>
                </div>
                <div className="right">
                    <i className="price-tag">{this.createPriceTag(props.apartment.price)}</i>
                </div>
            </div>
        )
    }

    leftArrow = () => {
        if(this.state.index - 3 >= 0){
            this.setState({index: this.state.index - 3})
        }
    }

    rightArrow = () => {
        if(this.state.index + 3 <= this.state.apartments.length){
            this.setState({index: this.state.index + 3})
        }
    }

    render() {
        const apartments = []
        for (const [index, apartment] of this.state.apartments.entries()){
            apartments.push(<this.apartment key={index} apartment={apartment}></this.apartment>)
        }
        return(
            <div className="gallery">
                <div className="left arrow" onClick={this.leftArrow}>
                    <i className="fas fa-angle-left"></i>
                </div>
                <div className="apartments">
                    {apartments.slice(this.state.index, this.state.index + 3)}
                </div>
                <div className="right arrow" onClick={this.rightArrow}>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
        )
    }
}

export default ApartmentGalleryDesktop