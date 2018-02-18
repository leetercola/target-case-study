import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';

class Reviews extends Component {
    
    render() {
        const {
            Con:[{reviewKey:conReviewKey, review:conReview, screenName:conScreenName, title:conTitle, overallRating:conOverallRating, datePosted:conDatePosted}],
            Pro:[{reviewKey, review, screenName, title, overallRating, datePosted}]
        } = this.props;

        return (
            <Row>
                <Col xs="12">
                    <Row>
                        <Col xs="6">overall</Col>
                        <Col xs="6"><a>view all reviews</a></Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="6" >
                            <h5>PRO</h5>
                            {/*Dont see data that would support this in the PRO object*/}
                            <p>most helpful 4-5 star review</p>
                        </Col>
                        <Col xs="12" md="6" >
                            <h5>CON</h5>
                            {/*Dont see data that would support this in the PRO object*/}
                            <p>most helpful 1-2 star review</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs="12" md="6" >
                            <h5>{title}</h5>
                            <p>{review}</p>
                            <span>
                            <a>{screenName}</a>
                            {datePosted}
                            </span>
                        </Col>
                        <Col xs="12" md="6" >
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