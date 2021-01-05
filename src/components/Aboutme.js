import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import './Aboutme.css'

function Aboutme() {
    return (
        <>
          <Container fluid className='about-wrap' id='about'>
          <div className='abt-side section-title justify-content-center'>
              <h2 className='section-title-heading'>About Me</h2>
              <hr className='hr' />
              </div>
              <Container>
                <Row>
                    
                    <Col sm={4}>
                        <div >
                        <div className='abt-img'>
                        <Image src='#/images/nancy2.png' width='100%' responsive='true' alt='smooooooothing' />
                        </div>
                        
                        <h4 style={{backgroundColor: 'blue', padding: '5px', color: '#fff'}}>
                            Altraide Nancy
                        </h4>
                    </div>
                    </Col>
                    <Col sm={8}>
                        <div className='abt-wrapper'>
                        <p className='abt-me'>
                        A writer who spends her time in writing and teaching people how to craft beautiful
                         stories by inspiring from true events. Please take a mini tour of my books and my life,
                          I hope that you’ll enjoy your time visiting.
                        </p>
                        <p className='abt-me'>
                        I am a writer of true horror mysterious stories, I am heavily influenced by the
                         true events with particular affinities for low-key, supernatural, folk, and occult horror.
                          I am also a contributor at Truth or Dare book series, a member of the FCD,
                           a self-confessed book nerd, and is currently seeking representation for my first young horror novel.
                        </p>
                        <Button variant="primary" className='btn-1'>Read more</Button>
                        </div>
                        
                    </Col>
                </Row>
                </Container>
            </Container>  
        </>
    )
}

export default Aboutme
