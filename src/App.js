import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col, InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap';
import _ from 'lodash';

import CaItemCarousel from './components/catalog-entry-item-carousel';
import Reviews from './components/reviews';

class App extends Component {
    render() {
        const {
            ItemData,
        } = this.props;

        const {
            CustomerReview,
            Offers:[firstOffer],
            Promotions,
            inventoryStatus,
            ItemDescription,
            ReturnPolicy,
            purchasingChannelCode,
        } = ItemData;   

        const {
            formattedPriceValue,
            priceQualifier
        } = firstOffer.OfferPrice[0];

        // some inline functions and element creation for brevity but these would ideally be broken into seperate functions or components for composition and testability.
        const promoElements = Promotions.map((item) => <p key={_.uniqueId('promo-elements')}className="text-danger font-weight-light">{item.Description[0].shortDescription}</p>);

        const showAddToCart = inventoryStatus === 'Online' && (purchasingChannelCode === '0' || purchasingChannelCode === '1');

        const showPickUpInStore = inventoryStatus === 'InStore' && (purchasingChannelCode === '0' || purchasingChannelCode === '2');
        console.log(showPickUpInStore);

        return (
            <Container className='catalog-entry-view'>
                <Row>
                    <Col sm={{size: 12}} md={{size: 6, order: 1}} >
                        <div className="clearfix carousel-wrapper">
                            <CaItemCarousel {...ItemData} />
                        </div>
                    </Col>
                    <Col sm={{size: 12}} md={{size: 6, order: 2}} className="item-description-card clearfix">
                        <p><strong>{formattedPriceValue}</strong> <small>{priceQualifier}</small></p>
                        <hr />
                        <div>
                            {promoElements}
                        </div>
                        <hr />
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <Button>+</Button>
                            </InputGroupAddon>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    quantity: 
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input type="number" step="1" />
                            <InputGroupAddon addonType="append">
                                <Button>-</Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <div className="form-group cta-buttons row">
                            {showPickUpInStore && (
                                <Col xs="6">
                                    <Button id="pickup_in_store" inverted block style={{background:'black'}}>Pick UP IN STORE</Button>
                                </Col>
                            )}
                            {showAddToCart && (
                                <Col xs="6">
                                    <Button id="add_to_cart" color="danger" block className="col-xs-6" style={{right:'0px', position: 'relative'}}>ADD TO CART</Button>
                                </Col>
                            )}
                        </div>
                        <div>
                            Returns | {<p dangerouslySetInnerHTML={{__html:ReturnPolicy[0].legalCopy}}/>}
                        </div>
                        <div>
                            <h3>Product highlights</h3>
                            <ul>
                                {
                                    //This is super bad and markup shouldn't exist in the data
                                    ItemDescription[0].features.map((item) => <li key={_.uniqueId('product-highlights-')}dangerouslySetInnerHTML={{__html:item}} />)
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col sm={{size: 12}} md={{size: 6, order: 2}} className="reviews">
                        <Reviews {...CustomerReview[0]}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}



export default App;