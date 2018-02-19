import React, { Component } from 'react';
import Slider from 'react-slick';
import _ from 'lodash';
import './catalog-entry-item.css';

class CaItemCarousel extends Component {
    componentDidMount () {
        this.slider.innerSlider.setState({slideHeight:'450px'});
        this.slider.forceUpdate();
        this.forceUpdate();
    }

    render() {
        const {
            Images,
            title
        } = this.props;

        const settings = {
            adaptiveHeight: false,
            arrows: true,
            dots: true,
            dotsClass: 'slick-dots slick-thumb',
            slidesToShow:1,
            slidesToScroll:1,
            lazyLoad: false,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        }
        
        const items = [
            ...Images[0].PrimaryImage,
            ...Images[0].AlternateImages
        ];

        const slides = items.map((item, index) => {
            return (
                <div style={{minHeight:'450px'}}><img src={item.image} alt={title + ' image ' + index} key={_.uniqueId('alternative-image')}/></div>
            );
        });

        const thumbnails = items.map((item, index) => (<a key={_.uniqueId('thumbnail-image')} style={{height:'40px',}}><img style={{height:"100%", width:'auto'}} src={item.image} alt={title + 'alternate image' + index} key={_.uniqueId('alternative-image')}/></a>));
        
        settings.customPaging = (i) => (thumbnails[i]);

        return (
            <div>
                <h1>{title}</h1>
                <Slider id="image_slider" {...settings} ref={(elem) => this.slider = elem}>
                    {slides}
                </Slider>
            </div>
        );
    }
}

function NextArrow(props) {
    const {style, onClick} = props
    return (
        <div style={{...style, position:'absolute', right:'-10px', top:'50%', height:'20px', width:'20px'}} onClick={onClick}>
            <i className='fas fa-angle-right'></i>
        </div>
    );
  }
  
  function PrevArrow(props) {
    const {style, onClick} = props
    return (
        <div style={{...style, position:'absolute', left:'-10px', top:'50%',height:'20px', width:'20px'}} onClick={onClick}>
            <i className='fas fa-angle-left' onClick={onClick}></i>
        </div>
    );
  }



export default CaItemCarousel;