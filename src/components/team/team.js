import React, { Component } from 'react';
import './team.scss';
import { Container, Image, Row, Col } from 'react-bootstrap';
import AboutUs from '../aboutus/aboutus';

class Team extends Component {
    render() {
        return (
            <Container>
                <Row className="teamRow">
                    <div>
                        <hr className="hr1"></hr>
                        <h3>MEET OUR TEAM</h3>
                        <hr className="hr1"></hr>
                    </div>
                </Row>
                <Row className="teamRow">

                    <Col md={2} className="teamCol">
                        <Image className="teamImg" src={process.env.PUBLIC_URL + '/images/jaskaran2.jpg'} width="160" height="160" roundedCircle />
                        <h6>Jaskaran Singh</h6>
                        <hr className="hr2" />
                        Project Manager/Full-Stack developer
                        <div><a href="https://www.linkedin.com/in/TheCoderSingh/"><Image width="30" height="30" alt="" src={process.env.PUBLIC_URL + '/images/linkedin.png'} /> </a></div>
                    </Col>

                    <Col md={2} className="teamCol">

                        <Image className="teamImg" src={process.env.PUBLIC_URL + '/images/Isha.jpg'} width="160" height="160" roundedCircle />
                        <h6>Isha</h6>
                        <hr className="hr2" />
                        Full-Stack Developer
                        <br /><br />
                        <div><a href="https://www.linkedin.com/in/isha-269b2358/"><Image width="30" height="30" alt="" src={process.env.PUBLIC_URL + '/images/linkedin.png'} /> </a></div>

                    </Col>
                    <Col md={2} className="teamCol">

                        <Image className="teamImg" src={process.env.PUBLIC_URL + '/images/ekroop.jpg'} width="160" height="160" roundedCircle />
                        <h6>Ekroop Kaur</h6>
                        <hr className="hr2" />
                        UX/UI Designer/Content Strategist
                        <div id="ekspecific"><a href="https://www.linkedin.com/in/ekroop-kaur-692400107/"><Image width="30" height="30" alt="" src={process.env.PUBLIC_URL + '/images/linkedin.png'} /> </a></div>

                    </Col>
                    <Col md={2} className="teamCol">

                        <Image className="teamImg" src={process.env.PUBLIC_URL + '/images/jashan.jpg'} width="160" height="160" roundedCircle />
                        <h6>Jashanpreet Kaur</h6>
                        <hr />
                            UX/UI Designer
                            <br /><br />
                        <div><a href="https://www.linkedin.com/in/jashanpreet-kaur-371617186/"><Image width="30" height="30" alt="" src={process.env.PUBLIC_URL + '/images/linkedin.png'} /> </a></div>
                    </Col>
                </Row>
                <Row className="teamRow">
                    <Col md={2} className="teamCol">

                        <Image className="teamImg" src={process.env.PUBLIC_URL + '/images/meera.jpg'} width="160" height="160" roundedCircle />
                        <h6>Meera Sharma</h6>
                        <hr />
                       UX Designer
                       <br /><br />
                        <div><a href="https://www.linkedin.com/in/meera-sharma-968797190/"><Image width="30" height="30" alt="" src={process.env.PUBLIC_URL + '/images/linkedin.png'} /> </a></div>
                    </Col>
                    <Col md={2} className="teamCol">

                        <Image className="teamImg" src={process.env.PUBLIC_URL + '/images/param2.jpeg'} width="160" height="160" roundedCircle />
                        <h6>Parminder Kaur</h6>
                        <hr />
                       Web Responsive/UI Designer
                        <div><a href="https://www.linkedin.com/in/parminder-kaur-433939a0/"><Image width="30" height="30" alt="" src={process.env.PUBLIC_URL + '/images/linkedin.png'} /> </a></div>

                    </Col>
                    <Col md={2} className="teamCol">

                        <Image className="teamImg" src={process.env.PUBLIC_URL + '/images/raman.png'} width="160" height="160" roundedCircle />
                        <h6>Ramandeep Kaur</h6>
                        <hr />
                       UX/Ui Designer
                       <br /><br />
                        <div><a href="https://www.linkedin.com/in/ramandeep-kaur-6887411a1/"><Image width="30" height="30" alt="" src={process.env.PUBLIC_URL + '/images/linkedin.png'} /> </a></div>

                    </Col>
                    <Col md={2} className="teamCol">

                        <Image className="teamImg" src={process.env.PUBLIC_URL + '/images/var.jpg'} width="160" height="160" roundedCircle />
                        <h6>Varpreet Kaur</h6>
                        <hr />
                       QA/UX Designer
                        <br /><br />
                        <div><a href="https://www.linkedin.com/in/varpreet-kaur-a47286196/"><Image width="30" height="30" alt="" src={process.env.PUBLIC_URL + '/images/linkedin.png'} /> </a></div>

                    </Col>
                </Row>
                <AboutUs />
            </Container >
        );
    }
}

export default Team;
