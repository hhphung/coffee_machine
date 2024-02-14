import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Menu.css'; // Import a CSS file for styling if needed
import React, { useState } from 'react';




function Menu() {
 


  return (
   
      <div className='menu'> 
        <Container>
          <Row>
            <Col> <h6>Menu</h6> 
              <Col> <h8>Home</h8> </Col>
              <Col> <h8>Home Brewing</h8> </Col> 
              <Col> <h8>Cafe Solutions</h8></Col> 
              <Col> <h8>Bean 2 Cup</h8></Col>   
              <Col> <h8>Blog</h8>  </Col>  
              <Col> <h8>Contact</h8> </Col>  
            </Col>
            <Col> <h6>Policies</h6> 
              <Col> <h8>Search</h8> </Col>  
              <Col> <h8>Privacy</h8> </Col>  
              <Col> <h8>Term of Service</h8> </Col> 
              <Col> <h8>Refund Policy</h8> </Col> 
            </Col>
          </Row>
        
        </Container>

      </div>

  );
}

export default Menu;