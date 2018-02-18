import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row, Col, InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap';

import CaItemCarousel from './components/catalog-entry-item-carousel';
import Reviews from './components/reviews';

const Fragment = React.Fragment;

class App extends Component {
    constructor(props) {
        super(props);
        // mobile check should be some form of server data or dpi resolution check. For brevity we are just toggling
        this.state = {
            isMobile: false,
        }
    }

    render() {
        const {
            isMobile = false,
        } = this.state;

        const {
            ItemData,
        } = this.props;

        const {
            CustomerReview,
            Offers:[firstOffer],
            Promotions,
            buyable,
            callOutMsg,
            eligibleFor,
            inventoryStatus,
            shortDescription,
            title,
            ItemDescription,
            ReturnPolicy
        } = ItemData;

        const {
            formattedPriceValue,
            priceQualifier
        } = firstOffer.OfferPrice[0];

        const catalogEntryClassName = isMobile ? 'catalog-entry-view' : 'catalog-entry-view large-view'

        const promoElements = Promotions.map((item) => <p>{item.Description[0].shortDescription}</p>);

        return (
            <Container className='catalog-entry-view'>
                <Row>
                    <Col sm={{size: 12}} md={{size: 6, order: 1}}>
                        <CaItemCarousel {...ItemData} />
                    </Col>
                    <Col sm={{size: 12}} md={{size: 6, order: 2}} className="item-description-card">
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
                        <div className="form-group">
                            <Button className="col-xs-6">Pick UP IN STORE</Button>{'   '}
                            <Button className="col-xs-6">ADD TO CART</Button>
                        </div>
                        <div>
                            Returns | {<p dangerouslySetInnerHTML={{__html:ReturnPolicy[0].legalCopy}}/>}
                        </div>
                        <div>
                            <h3>Product highlights</h3>
                            <ul>
                                {
                                    //This is super bad and markup shouldn't exist in the data
                                    ItemDescription[0].features.map((item) => <li dangerouslySetInnerHTML={{__html:item}} />)
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