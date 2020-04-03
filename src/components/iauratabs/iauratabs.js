import React, { Component } from 'react';

import Team from '../team/team';
import './iauratabs.scss';
import mask1 from './images/mask1.jpg';
import mask2 from './images/mask2.png';
import mask3 from './images/mask3.jpg';
import mask4 from './images/mask6.jpg';
import san1 from './images/san1.jpg';
import san2 from './images/san2.jpg';
import san10 from './images/san10.jpg';
import f1 from './images/f1.jpg';
import f2 from './images/f2.jpg';
import f3 from './images/f3.jpg';
import f4 from './images/f4.jpg';
import b1 from './images/bag1.jpg';

import { Image, Tab, Tabs, Row, Col } from 'react-bootstrap';


class IAuraTabs extends Component {

	render() {
		return (
            <Row className="tabrow">
                
                <Col>
                    <Tabs defaultActiveKey="mask" className="tabclass">
                        <Tab eventKey="mask" title="Mask">
                        <Row className="teamRow">               
                            <Col xs={8} md={2} className="teamCol">                                                       
                                <a target="new" href="https://images.app.goo.gl/2fb7M5r9gVQFuVry"><Image src={mask1} rounded fluid/></a>
                                <p>Face Mask</p>
                                <p className="price">$ 5.80</p>          
                            </Col>
                            <Col xs={8} md={2} className="teamCol">                                                       
                                <a target="new" href="https://images.app.goo.gl/2fb7M5r9gVQFuVry"><Image src={mask2} rounded fluid/></a>
                                <p>Face Mask</p>
                                <p className="price">$ 4.60</p>          
                            </Col>
                            <Col xs={8} md={2} className="teamCol">                                                       
                                <a target="new" href="https://images.app.goo.gl/2fb7M5r9gVQFuVry"><Image src={mask3} rounded fluid/></a>
                                <p>Face Mask (Black)</p>
                                <p className="price">$ 4.70</p>          
                            </Col>
                            <Col xs={8} md={2} className="teamCol">                                                       
                                <a target="new" href="https://images.app.goo.gl/2fb7M5r9gVQFuVry"><Image src={mask4} rounded fluid/></a>
                                <p>Face Mask (Black)</p>
                                <p className="price">$ 5.80</p>          
                            </Col>
                        </Row>
                        </Tab>
                        <Tab eventKey="sanitizer" title="Sanitizer">
                            <Row className="teamRow">               
                                <Col xs={8} md={2} className="teamCol">                                                       
                                    <a target="new" href="https://images.app.goo.gl/mtna2HmEHA6KHQu48"><Image src={san10} rounded fluid/></a>
                                    <p>Purell (200 ml)</p>
                                    <p className="price">$ 9.60</p>          
                                </Col>
                                <Col xs={8} md={2} className="teamCol">                                                       
                                    <a target="new" href="https://images.app.goo.gl/awiqv3yBsiYcdccD9"><Image src={san2} rounded fluid/></a>
                                    <p>Clean & Well</p>
                                    <p className="price">$ 8.80</p>          
                                </Col>
                                <Col xs={8} md={2} className="teamCol">                                                       
                                    <a target="new" href="https://images.app.goo.gl/mtna2HmEHA6KHQu48"><Image src={san10} rounded fluid/></a>
                                    <p>Purell (300 ml)</p>
                                    <p className="price">$ 6.70</p>          
                                </Col>
                                <Col xs={8} md={2} className="teamCol">                                                       
                                    <a target="new" href="https://images.app.goo.gl/yPNRuLBygqpTC1vn8"><Image src={san1} rounded fluid/></a>
                                    <p>Clean & Well</p>
                                    <p className="price">$ 7.80</p>          
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="bags" title="Bags">
                        <Row className="teamRow">               
                                <Col xs={8} md={2} className="teamCol">                                                       
                                    <a target="new" href="https://images.app.goo.gl/kMC94Ai625S4LbZy8"><Image src={b1} rounded fluid/></a>
                                    <p>Metallic Luggage</p>
                                    <p className="price">$ 150.80</p>          
                                </Col>
                            </Row>
                            
                        </Tab>
                        <Tab eventKey="first-aid" title="First-Aid">
                            <Row className="teamRow">               
                                <Col xs={8} md={2} className="teamCol">                                                       
                                    <a target="new" href="https://images.app.goo.gl/DAoTEJmxMrJXgbQC6"><Image onClick={this.toggle} src={f1} rounded fluid/></a>
                                    <p>First Aid Kit</p>
                                    <p className="price">$ 15.50</p>         
                                </Col>
                                <Col xs={8} md={2} className="teamCol">                                                       
                                    <a target="new" href="https://images.app.goo.gl/EQckbuPNCFuxa4Sq9"><Image src={f2} rounded fluid/></a>
                                    <p>First Aid Kit</p>
                                    <p className="price">$ 17.40</p>          
                                </Col>
                                <Col xs={8} md={2} className="teamCol">                                                       
                                    <a target="new" href="https://images.app.goo.gl/e5kBRisaSUFQzJTVA"><Image src={f3} rounded fluid/></a>
                                    <p>First Aid Pack</p>
                                    <p className="price">$ 20.80</p>          
                                </Col>
                                <Col xs={8} md={2} className="teamCol">                                                       
                                    <a target="new" href="https://images.app.goo.gl/xiY2wgfAz4YfB8vP8"><Image src={f4} rounded fluid/></a>
                                    <p>First Aid</p>
                                    <p className="price">$ 18.60</p>          
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
		);
	}
}

export default IAuraTabs;
