import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AboutMe extends Component {
  render() {
    return(
      <div>
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
           <Row className="justify-content-center py-5">
                <Col md={8} sm={12}>
                     <h1 className="display-1 font-weight-bolder">About Me</h1>
                </Col>
            </Row>
        </Container>
    </Jumbotron>

    <Container fluid={true}>
          <Row className="justify-content-center">
              <Col md={8}>
       <p>Hello, my name is Raffaele. I'm a graduate software developer with experience in Ruby, Java, JavaScript, Express JS, Node JS, PostgreSQL, MongoDB, and React.</p>

       <p>My dream is start my career in software development and further develop my new technical skills.</p>

       <p>I'm constantly learning new technologies. Those technologies include learning Python, C# and gaining more experience with React, Express JS, and Node JS.</p>

       <p>This is a React based personal portfolio app using React MDL material design and React Bootstrap as front-end. A small API built with Express.js running in the back-end to email the messages that users send from the front end.</p>

       <p>When I'm not coding I like cooking, reading a good book and watching football.</p>
       </Col>
       </Row>
   </Container>
   </div>
)
}
}


export default AboutMe;
