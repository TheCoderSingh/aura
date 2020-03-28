
import React, { Component } from 'react';
import './team.scss';
// import linkedinImg from './linkedin.png';
import { Container, Image, Row, Col } from 'react-bootstrap';

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

                    <Col xs={8} md={2} className="teamCol">
                        <Image className="teamImg" src={process.env.PUBLIC_URL + '/images/jashan.jpg'} width="160" height="160" roundedCircle />
                        <h6>Jaskaran Singh</h6>
                        <hr className="hr2"></hr>
                        PM/Full-stack developer
                        <div><a href="facebook.com"><Image width="30" height="30" alt="" src={process.env.PUBLIC_URL + '/images/jashan.jpg'} /> </a></div>
                    </Col>

                    <Col xs={8} md={2} className="teamCol">

                        <Image className="teamImg" src={process.env.PUBLIC_URL + '/images/isha.jpg'} width="160" height="160" roundedCircle />
                        <h6>Isha</h6>
                        <hr className="hr2"></hr>
                        Front-end/Back-end developer
                        <div><a href="facebook.com"><Image width="30" height="30" alt="" src={process.env.PUBLIC_URL + '/images/isha.jpg'} /> </a></div>

                    </Col>
                    <Col xs={8} md={2} className="teamCol">

                        <Image className="teamImg" src={process.env.PUBLIC_URL + '/images/ekroop.jpg'} width="160" height="160" roundedCircle />
                        <h6>Ekroop Kaur</h6>
                        <hr className="hr2"></hr>
                        UX developer
                        <div><a href="https://www.linkedin.com/in/ekroop-kaur-692400107/"><Image width="30" height="30" alt="" src={process.env.PUBLIC_URL + '/images/ekroop.jpg'} /> </a></div>

                    </Col>
                    <Col xs={8} md={2} className="teamCol">

                        <Image className="teamImg" src={process.env.PUBLIC_URL + '/images/jashan.jpg'} width="160" height="160" roundedCircle />
                        <h6>Jashanpreet Kaur</h6>
                        <hr></hr>
                            UX designer
                            <div><a href="facebook.com"><Image width="30" height="30" alt="" src={process.env.PUBLIC_URL + '/images/jashan.jpg'} /> </a></div>
                    </Col>
                </Row>
                <Row className="teamRow">
                    <Col xs={8} md={2} className="teamCol">

                        <Image className="teamImg" src={process.env.PUBLIC_URL + '/images/meera.jpg'} width="160" height="160" roundedCircle />
                        <h6>Meera Sharma</h6>
                        <hr></hr>
                        <div>UI designer</div>
                        <div><a href="facebook.com"><Image width="30" height="30" alt="" src={process.env.PUBLIC_URL + '/images/meera.jpg'} /> </a></div>
                    </Col>
                    <Col xs={8} md={2} className="teamCol">

                        <Image className="teamImg" src={process.env.PUBLIC_URL + '/images/param.jpg'} width="160" height="160" roundedCircle />
                        <h6>Parminder Kaur</h6>
                        <hr></hr>
                        <div>UX/UI/Graphic designer</div>
                        <div><a href="facebook.com"><Image width="30" height="30" alt="" src={process.env.PUBLIC_URL + '/images/param.jpg'} /> </a></div>

                    </Col>
                    <Col xs={8} md={2} className="teamCol">

                        <Image className="teamImg" src={process.env.PUBLIC_URL + '/images/raman.jpg'} width="160" height="160" roundedCircle />
                        <h6>Ramandeep Kaur</h6>
                        <hr></hr>
                        <div>UX designer</div>
                        <div><a href="facebook.com"><Image width="30" height="30" alt="" src={process.env.PUBLIC_URL + '/images/raman.jpg'} /> </a></div>

                    </Col>
                    <Col xs={8} md={2} className="teamCol">

                        <Image className="teamImg" src={process.env.PUBLIC_URL + '/images/var.jpg'} width="160" height="160" roundedCircle />
                        <h6>Varpreet Kaur</h6>
                        <hr></hr>
                        <div>QA/UX designer</div>
                        <div><a href="facebook.com"><Image width="30" height="30" alt="" src={process.env.PUBLIC_URL + '/images/var.jpg'} /> </a></div>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Team;
