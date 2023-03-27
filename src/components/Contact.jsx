import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Contact(){
    return <div><h1 className="herenTitle">Contact</h1>
  <Form className="contactForm ">
  <Form.Group className="mb-3">
  <Form.Label for="fname" className="nume">Naam:</Form.Label>
  <Form.Label for="lname" className="email">*Email:</Form.Label><br/>
  <Row><Col>
  <Form.Control type="text" className="numeInput" placeholder="Naam" id="Naam" name="Naam"/>
  </Col>
  <Col>
  <Form.Control type="Email" className="emailSubmit" placeholder="Email" id="Email" name="Email"/>
  </Col>
  </Row>
</Form.Group></Form>
  <Form className="contactForm "><Form.Group>
  <Form.Label for="Telefoonnummer">Telefoonnummer:</Form.Label><br/>
  <Form.Control type="tel" placeholder="Telefoonnummer" id="Telefoonnummer" name="Telefoonnummer"/><br/>
  </Form.Group>
  <Form.Label for="Bericht">Bericht:</Form.Label><br/>
  <Form.Control as="textarea" id="Bericht" placeholder="Bericht" name="Bericht" rows="10" cols="50"/><br/>
 
<Button className="buttonContact" variant="dark">Versturen</Button>

</Form>
    </div>
}

export default Contact;