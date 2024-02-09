import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './home.css'; // Import a CSS file for styling if needed
import picture from './picture/main.jpg'; // Import the image file

function Home() {
  return (
    <div>
      <div className="image-container">
        <Image src={picture} fluid alt="Description of the image" className="smaller-image" />
        <div className="text-overlay">
          <h1>When passion meets coffee, great things can happen!</h1>
        </div>
      </div>
      <Container>
        <Row>
        </Row>
        <Row>
        </Row>
      </Container>
    </div>
  );
}

export default Home;