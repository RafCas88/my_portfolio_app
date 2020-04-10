import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null
    }
  }

  handleChange = (event) => {
       const target = event.target;
       const value = target.type === 'checkbox' ? target.checked : target.value;
       const name = target.name;

       this.setState({
                   [name]: value
               })
             }

        handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        });
      }

  render(){
    return(

      <div>
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
           <Row className="justify-content-center py-5">
                <Col md={8} sm={12}>
                     <h1 className="display-1 font-weight-bolder">Let's Talk</h1>
                </Col>
            </Row>
        </Container>
    </Jumbotron>

    <Container fluid={true}>
           <Row className="justify-content-center">
               <Col md={8}>
               <Form onSubmit={this.handleSubmit}>
                   <Form.Group>
                       <Form.Label htmlFor="full-name">Full Name</Form.Label>
                       <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                   </Form.Group>

                   <Form.Group>
                       <Form.Label htmlFor="email">Email</Form.Label>
                       <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                   </Form.Group>

                   <Form.Group>
                       <Form.Label htmlFor="message">Message</Form.Label>
                       <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                   </Form.Group>

                   <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                                    Send
                                </Button>

                   {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                   {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}

                 </Form>
               </Col>
           </Row>


        </Container>

      </div>
    )
  }
}

export default Contact;
