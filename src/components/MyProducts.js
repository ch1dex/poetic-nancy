import React from 'react'
import { Card, Row, Col, Button, Container, Image } from 'react-bootstrap'

function MyProducts() {
    return (
        <>
          <Container fluid className='b-wrd'>
            
            <Container>
              <div className='abt-side section-title justify-content-center'>
              <h2 className='section-title-heading'>Products</h2>
              <hr className='hr' />
              </div>

<Row>
  <Col sm={4}>
  <Card>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Image src='../bg-img/book1.png' style={{width: '100%'}} />
  <Card.Title>Out of Chains</Card.Title>
    <Card.Text>
      How to escape depression...
    </Card.Text>
    <Button variant="danger">Buy Now</Button>
  </Card.Body>
</Card>
  </Col>
  {/* <Col sm={4}>
  <Card>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Image src='/images/pic1.jpg' style={{width: '100%'}} />
    <Card.Title>Book Title</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="danger">Buy Now</Button>
  </Card.Body>
</Card>
  </Col>
  <Col sm={4}>
  <Card>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Image src='/images/pic1.jpg' style={{width: '100%'}} />
    <Card.Title>Book Title</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="danger">Buy Now</Button>
  </Card.Body>
</Card>
  </Col> */}
  
</Row>


              </Container>
            </Container>  
        </>
    )
}

export default MyProducts
