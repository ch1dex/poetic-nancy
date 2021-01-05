import React from 'react'
import './Contact.css';
import { Form, Button, Col, Container, Row  } from 'react-bootstrap';


function Contact() {
    return (
        <>
        <Container fluid id='contact'>
            <Container>
        <div className='abt-side section-title justify-content-center'>
              <h2 className='section-title-heading'>Get in touch</h2>
              <hr className='hr' />
              </div>
            <Row>
                <Col sm={7}>

                <Form>
  <Row>
    {/* <Col className='form-inp'> */}
      <Form.Control className='form-inp' placeholder="Enter your name" />
    {/* </Col> */}
    {/* <Col className='form-inp'> */}
      <Form.Control className='form-inp' type="email" placeholder="Enter your email" />
    {/* </Col> */}
    <Form.Control as="textarea" className='form-inp' placeholder="Message here" rows='10' />
  </Row>
  <Button variant="primary" className='btn btn-contact' type="submit">
    Send
  </Button>
</Form>

</Col>
<Col>
<div className="address">
    <h3>Address</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatibus quae ea nihil 
        tempora nemo voluptatum praesentium soluta nam?</p>
</div>
<div className="contact-details">
    <ul className="fa-ul">
        <li><span className="fa-li"><i className="fas fa-mobile-alt"></i></span>+1 555 555 555</li>
        <li><span className="fa-li"><i className="fas fa-map-marker-alt"></i></span>272 Private 7530 Rd, Call, TX, 75933</li>
        <li><span className="fa-li"><i className="fas fa-paper-plane"></i></span>info@yourcompany.com</li>
    </ul>
</div>

</Col>
</Row>
</Container>
</Container>
        </>
    )
}

export default Contact
