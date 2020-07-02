import React from 'react';
import './styles/image-slider.css';

class ImageSlider extends React.Component{
    constructor() {
        super();
        this.index = 1;
        this.slide(this.index);
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
                        <div className="numbertext">{i} / {number_of_images}</div>
                        <img src={imageURI} alt=""/>
                    </div>
                );
            });
        }
        return(
            <div className="image-slider">
                {video}
                {images}
                <a className="prev" onClick={this.prev()}>&#10094;</a>
                <a className="next" onClick={this.next()}>&#10095;</a>
            </div>
        );
    }

    prev() {
        this.slide(this.index - 1);
    }

    next() {
        this.slide(this.index + 1);
    }

    slide(n){
        var i;
        var slides = document.getElementsByClassName("slides");
        if(slides.length == 0)
            return;
        if (n > slides.length) {
            this.index = 1;
        } else if (n < 1) {
            this.index = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[this.index - 1].style.display = "block";
    }
}

export default ImageSlider;