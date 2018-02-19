import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import Stars from './stars';

class Reviews extends Component {
    
    render() {
        const {
            Con:[{review:conReview, screenName:conScreenName, title:conTitle, overallRating:conOverallRating, datePosted:conDatePosted}],
            Pro:[{review, screenName, title, proOverallRating, datePosted}],
            overallRating 
        } = this.props;

        return (
            <Row>
                <Col xs="12">
                    <Row>
                        <Col xs="6">
                            <Row>
                                <Col xs="6"><Stars rating={overallRating} /></Col>
                                <Col style={{marginTop:'30px', marginBottom:'20px', display:'block', marginLeft:'10px'}}>overall</Col>
                            </Row>
                        </Col>
                        <Col xs="6">
                            <div style={{marginTop:'30px', height:'100%'}}>
                                <a href="/allReviews">view all reviews</a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="6" >
                            <h5>PRO</h5>
                            {/*Dont see data that would support this in the PRO object*/}
                            <p>most helpful 4-5 star review</p>
                        </Col>
                        <Col xs="12" md="6" >
                            <h5>CON</h5>
                            {/*Dont see data that would support this in the CON object*/}
                            <p>most helpful 1-2 star review</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs="12" md="6" >
                            <Stars rating={proOverallRating} style={{width:"100%"}} />
                            <h5>{title}</h5>
                            <p>{review}</p>
                            <span>
                            <a>{screenName}</a>
                            {datePosted}
                            </span>
                        </Col>
                        <Col xs="12" md="6" >
                            <Stars rating={conOverallRating} style={{width:"100%"}} />
                            <h5>{conTitle}</h5>
                            <p>{conReview}</p>
                            <span>
                            <a>{conScreenName}</a>
                            {conDatePosted}
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}



export default Reviews;