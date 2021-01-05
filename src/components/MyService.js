import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

function MyService() {
    return (
      <>
         <Container fluid id='contact'>
            
            <Container>
              <div className='abt-side section-title justify-content-center'>
              <h2 className='section-title-heading'>Services</h2>
              <hr className='hr' />
              </div>
<Row>
  <Col sm={3}>
  <i className="s-icon fas fa-edit"></i>
  <h3 className='h3'>content writer</h3>
  <p className='p'> ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsa id sequi praesentium iste 
    dolor tenetur facere dolorem nostrum ullam doloremque, adipisci amet maxime. Mollitia praesentium 
    veritatis quisquam. Optio, laborum?</p>
</Col>
<Col sm={3}>
  <i className="s-icon fas fa-book"></i>
  <h3 className='h3'>E-book Creator</h3>
  <p className='p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsa id sequi praesentium iste 
    dolor tenetur facere dolorem nostrum ullam doloremque, adipisci amet maxime. Mollitia praesentium 
    veritatis quisquam. Optio, laborum?</p>
</Col> 
<Col sm={3}>
  <i className="s-icon fas fa-video "></i>
  <h3 className='h3'>Video Creator</h3>
  <p className='p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsa id sequi praesentium iste 
    dolor tenetur facere</p>
</Col>
<Col sm={3}>
  <div className='i'><i className="s-icon fa fa-users mb-2"></i></div>
  <h3 className='h3'>Social Media Manager</h3>
  <p className='p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsa id sequi praesentium iste 
    dolor tenetur facere</p>
</Col>

</Row>
              </Container>
            </Container>
        </>
    )
}

export default MyService
