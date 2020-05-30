import React from "react";
import Container from "../components/Bootstrap/Container";
import Jumbotron from "../components/Jumbotron";
import AppFooter from "../components/AppFooter";
import AppNavbar from "../components/Navbar";
function Portal() {

    return (
        <div>
        <nav>
                <AppNavbar>
                </AppNavbar>
        </nav>
            <br></br>
            <Container fluid>
                <Jumbotron fluid>
                    <h1>City Map Of Chicago</h1>
                </Jumbotron>
            </Container>
            <br></br>
            <Container>
                <AppFooter></AppFooter>
            </Container>
        </div>
    );
}


export default Portal;