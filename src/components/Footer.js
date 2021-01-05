import React from 'react'
import './Footer.css';
import { Col, Container, Row  } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <>
        <Container fluid id='footer'>
            <Container>
                <Row>
                    <Col sm={4}>
                        <p>Poetic Nancy</p>
                    </Col>
                   
                    <Col sm={4} className='social-icons'>
                    <Link
              className='social-icon-link facebook'
              to='facebook.com'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
                    </Col>
                    <Col sm={4}>
                        &copy; 2021
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}

export default Footer
