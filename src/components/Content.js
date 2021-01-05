import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import './Content.css'

function Content() {
    return (
        <>
            <Container fluid className='b-wrd'>
            
            <Container>
              <div className='abt-side section-title justify-content-center'>
              <h2 className='section-title-heading'>Breathing Words</h2>
              <hr className='hr' />
              </div>
              <Row>
                <Col>
              <Card className='card'>
  <Card.Header>Quote</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
      </p>
      <footer className="blockquote-footer">
         <cite title="Source Title">Poetic Nancy</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</Col>
<Col>
              <Card>
  <Card.Header>Quote</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
      </p>
      <footer className="blockquote-footer">
      <cite title="Source Title">Poetic Nancy</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</Col>
<Col>
  <Card>
  <Card.Header>Quote</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
      </p>
      <footer className="blockquote-footer">
      <cite title="Source Title">Poetic Nancy</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</Col>
</Row>
{/* <Row>
  <Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/pic2.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/pic4.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/pic3.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
</Row>
<Card>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}

              </Container>
            </Container>
        </>
    )
}

export default Content
