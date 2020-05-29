import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Form from "../components/Forms"
import FormControl from "../components/Forms"

function Start() {

    return (
        <div>
        <Navbar bg="dark">
            <Navbar.Brand href="#home">
                <img
                    // src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Ward Housing Portal"
                />{''}
                <h2>Ward Housing Portal</h2>
                <Form inline>
                    <FormControl type="text" placeholder="Type in your address to find your ward" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Brand>
        </Navbar>
        <br></br>
        <Container fluid>
            <Jumbotron fluid>
                <h1>City Map Of Chicago</h1>
            </Jumbotron>
        </Container>
        <br></br>
        <Footer>
            <Container>
                <Row>
                    <Col></Col>
                    <Col md="auto"></Col>
                    <Col xs lg="2">

                    </Col>
                </Row>
            </Container>
        </Footer>
        </div>
    );
}


export default Portal;