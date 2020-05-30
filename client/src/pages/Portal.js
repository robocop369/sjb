import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Form from "../components/Forms"
import FormControl from "../components/Forms"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
function Portal() {

    return (
        <div>
        <nav>
            <Navbar>
            </Navbar>
        </nav>
            <br></br>
            <Container fluid>
                <Jumbotron fluid>
                    <h1>City Map Of Chicago</h1>
                </Jumbotron>
            </Container>
            <br></br>
            <Container>
                <Footer></Footer>
            </Container>
        </div>
    );
}


export default Portal;