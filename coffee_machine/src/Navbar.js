import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Navbar.css'
import logo from './picture/coffee_logo.png';
import search_icon from './picture/search-interface-symbol.png'
import bag_icon from './picture/shopping-bag.png'
function NavBar() {
  return (
    <div>
        
        <div className='welcome-to-store'> <h3>  Welcome to our store </h3></div>
        

        <div className='logo-div'>
            <div className='search-icon-div'>
                    <img src={search_icon} alt='Logo' className='search-icon' />
            </div>
            <div>
                <img src={logo} alt='Logo' className='logo-image' />
            </div>
            <div className='bag-icon-div'>
                <img src={bag_icon} alt='Logo' className='bag-icon' />
            </div>
        </div>
     
        


        <Container>
            <Row className="justify-content-center">
                <Col xs="auto">
                <Nav variant="underline" defaultActiveKey="/home">
                    <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/bean-2-cup">Home Brewing</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                    </Nav.Item>
                    
                </Nav>
                </Col>
            </Row>
        </Container>
    </div>    
  );
}

export default NavBar;