import {Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import HeroImage from './HeroImage';
import LaunchList from "./LaunchList";
import LoadingScreen from "./LoadingScreen";


const Main = () => {

  return (
    <Container fluid className="app-body">
      <LoadingScreen />
      <Container fluid className="launches-wrapper">  
        <Row>
          <Col xs={12} lg={5}>
              <HeroImage />
          </Col>
          <Col xs={12} lg={7}>
              <LaunchList />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Main