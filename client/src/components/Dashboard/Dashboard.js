import {React} from "react";
import {Col} from "../Bootstrap/Col";
import {Button} from "../Bootstrap/Button";
// import AppFooter from "../AppFooter";
import {Row, Container } from "../Grid";
import {AppAccordion} from "../AppAccordion"
import {ChicagoData} from "./ChicagoData/ChicagoData";


function Dashboard() {

  return (

    <div clasName="container dashboard">
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}><Button href="#portal" variant="primary">Map</Button></Col>
          <Col md={{ span: 4, offset: 4 }}>TESTING SPACE</Col>
          <br>
          </br>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>{<ChicagoData />}</Col>
        </Row>
        <Row>
        <AppAccordion/>
        </Row>
        <Row>
        {/* <AppFooter></AppFooter> */}
        </Row>
      </Container>
    </div>
  );
}


export default Dashboard;
