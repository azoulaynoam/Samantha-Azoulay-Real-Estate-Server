import React from 'react';
import './styles/image-slider.css';

class ImageSlider extends React.Component{
    constructor() {
        super();
        this.index = 1;
    }

    render(){
        var video = null
        var images = null
        if (this.props.apartment.video){
            video = (
                <div className="slides video">
                    <video src={this.props.apartment.video}/>
                </div>
            );
        }
        if (this.props.apartment.images){
            var number_of_images = this.props.apartment.images.length;
            images = this.props.apartment.images.map((imageURI, i) => {
                return(
                    <div className="slides image" key={i}>
                        <div class="numbertext">{i} / {number_of_images}</div>
                        <img src={imageURI}/>
                    </div>
                );
            });
        }
        return(
            <div className="image-slider">
                {video}
                {images}
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
        );
    }

    slide(n){
        var i;
        var slides = document.getElementsByClassName("slides");
        if (n > this.index) {
            this.index = 1;
        } else if (n < 1) {
            this.index = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[this.index-1].style.display = "block";
    }
}

export default ImageSlider;