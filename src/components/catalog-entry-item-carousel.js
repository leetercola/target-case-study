import React, { Component } from 'react';
import Slider from 'react-slick';
import _ from 'lodash';

const Fragment = React.Fragment;

class CaItemCarousel extends Component {
    render() {
        const {
            Images,
            itemId,
            title
        } = this.props;

        const settings = {
            arrows: true,
            dots: true,
            dotsClass: 'slick-dots slick-thumb',
            slidesToShow:1
        }
        
        const items = [
            Images[0].PrimaryImage[0],
            ...Images[0].AlternateImages[0]
        ];

        const slides = items.map((item, index) => {
            return (
                <img src={item.image} alt={title + ' image ' + index} key={_.uniqueId('alternative-image')}/>
            );
        });

        const thumbnails = items.map((item, index) => (<a key={_.uniqueId('thumbnail-image')}><img style={{height:"20px"}} src={item.image} alt={title + 'alternate image' + index} key={_.uniqueId('alternative-image')}/></a>));
        
        settings.customPaging = (i) => (thumbnails[i]);

        return (
            <div style={{minHeight: '600px'}}>
                <h1>{title}</h1>
                <Slider {...settings}>
                    {slides}
                </Slider>
            </div>
        );
    }
}



export default CaItemCarousel;