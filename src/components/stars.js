import React, { Component } from 'react';
import './stars.css';
class Stars extends Component {

    render() {
        const { rating } = this.props;
        const percentage = rating * 20;
        return (
            <div className="star-rating-wrapper">
                <div className="star-ratings-css">
                    <div className="star-ratings-css-top" style={{width: percentage+'%'}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                    <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                </div>
            </div>
        );
    }
}



export default Stars;