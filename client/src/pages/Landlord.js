import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Landlords() {
  // Setting our component's initial state
  const [landlords, setLandlords] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all landlord and store them with setLandlord
  useEffect(() => {
    loadLandlords()
  }, [])

  // Loads all landlord and sets them to landlord
  function loadLandlords() {
    API.getLandlords()
      .then(res => 
        setLandlords(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a landlord from the database with a given id, then reloads landlord from the db
  function deleteLandlord(id) {
    API.deleteLandlord(id)
      .then(res => loadLandlords())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveLandlord method to save the Landlord data
  // Then reload Landlord from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    // only runs if Address and ShortDesc are there
    if (formObject.Address && formObject.ShortDesc) {
      API.saveLandlord({
        Address: formObject.Address,
        ShortDesc: formObject.ShortDesc,
        LongDesc: formObject.LongDesc
      })
        .then(res => loadLandlords())
        .catch(err => console.log(err));
    }
  };

  

    return (
           
      <Container fluid>
        <Row>
          <Col size="md-6" >
            <Jumbotron>
              <h1>Do you have a complaint about a landlord?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="Address"
                placeholder="Address (required)"
              />
              <Input
                onChange={handleInputChange}
                name="ShortDesc"
                placeholder="Short description of issue (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="LongDesc"
                placeholder="Long description of issue (Optional)"
              />
              <FormBtn
              // greys out the button
                disabled={!(formObject.ShortDesc && formObject.Address)}
                onClick={handleFormSubmit}
              >
                Submit Landlord Complaint
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-6">
            <Jumbotron>
              <h1>Landlord Complaint List</h1>
            </Jumbotron>
            {/* truthly ,,, it is not empty*/}
            {landlords.length ? (
              <List>
                {landlords.map(landlord => (
                  <ListItem key={landlord._id}>
                    <Link to={"/landlord/" + landlord._id}>
                      <strong>
                        {landlord.Address} issue {landlord.ShortDesc}
                      </strong>
                    </Link>
                    {/* we are passing the funcion in the empty () */}
                    <DeleteBtn onClick={() => deleteLandlord(landlord._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export {Landlords};
