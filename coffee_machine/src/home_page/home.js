import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './home.css'; // Import a CSS file for styling if needed
import picture from './picture/main.jpg'; // Import the image file
import product_pic from './picture/product.jpg';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';



function Home() {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  return (
    <div>
      <div className="image-container">
        <Image src={picture} fluid alt="Description of the image" className="smaller-image" />
        <div className="text-overlay">
          <h1>When passion meets coffee, great things can happen!</h1>
        </div>
      </div>
     
     
      <div className='shipping-image'> 
        <Container > 
          <Image src="https://evabrew.com/cdn/shop/files/TOP_OF_THE_LINE_FACILITY_5.png?v=1681318704&width=2000" fluid alt="Description of the image"  />
        </Container>
      </div>


        <div className='product-part'>
            <Row> 
                <Col>
                    <Image src={product_pic} fluid alt="Description of the image" className='product-pic' />
                </Col>
                <Col>
                    <Col>
                        <h1>Manual Brew Sample Pack - Berry Bliss, Autumn Aroma, Starry Night</h1>
                        <h4>Regular priceRs. 499.00</h4>
                        <h6>Tax included</h6>
                    </Col>
                    <Col>
                      <Form>
                        <Form.Label>Select an option:</Form.Label>
                        <Form.Select aria-label="Default select example" className="smaller-select">
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>

                        <Form.Label>Select an option:</Form.Label>
                        <Form.Select aria-label="Default select example" className="smaller-select">
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>

                      <Form.Group className="mb-3">
                        <Form.Label>Quantity:</Form.Label>
                        <div className="d-flex align-items-center">
                          <Button variant="outline-secondary" onClick={handleDecrement}>
                            -
                          </Button>
                          <Form.Control type="number" className="smaller-select" value={quantity} readOnly />
                          <Button variant="outline-secondary" onClick={handleIncrement}>
                            +
                          </Button>
                        </div>
                      </Form.Group>
                      <Button variant="outline-secondary" onClick={handleIncrement}> Add to cart </Button>
                      </Form>
                    </Col>
                </Col>
            </Row>
        </div >

    </div>
  );
}

export default Home;