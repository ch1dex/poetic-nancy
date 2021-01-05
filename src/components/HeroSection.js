import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import './HeroSection.css'

function HeroSection(props) {
    return (
        <> 
            <Jumbotron fluid className='hero'>
            <Container className='hero-cont'>
                <Row className='hero-content'>
                    <Col className='hero-txt'>
                        <h1>Hi, I'm NANCY ALTRAIDE</h1>
                        <p>
                            Writer (Poet), Video Creator and Agricultural consultant
                        </p>
                        <a href='#about'>
                            <Button variant="outline-light">Learn more</Button>
                        </a>
                    </Col>
                </Row>
            </Container>
            </Jumbotron>
        </>
    )
}

export default HeroSection
