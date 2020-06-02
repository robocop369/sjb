import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "../components/Jumbotron";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import API from "../utils/API";

class Portal extends React.Component {
    constructor(props) {
    super(props)
    // this.state = {currentview:"buildingpermits"}
    
  }

  componentDidMount() {
    this.setState({isLoaded:true})
    API.findAllWards()
      .then(res => {
        const wardObjects = res.data;
        this.setState({ dataPoints: wardObjects });
        console.log("this is in component did mount", wardObjects)
      })

// function initMap() {
//     var bounds = new google.maps.LatLngBounds();
//     // searchBox = new google.maps.places.SearchBox(input);
//     map = new google.maps.Map(document.getElementById('map'), {
//           //chicago coordinates hard
//           center: {lat: 41.845, lng: -87.7},
//           zoom: 10.8
//         });

//     console.log(cachedGeoJson);
//     console.log(wrappedGeoJson);
        
//     // Jon [0,1,2,3,4].every(3,1) # [1,4]
//     for(i=0;i<wrappedGeoJson.length; i++){
//       //j = ['purple','red','yellow','blue', 'beige']
//       //google.maps.Data.StyleOptions} */({
//     //     fillColor: color,
//       map.data.addGeoJson(wrappedGeoJson[i]);
// //STEPHANIE - fix default color, fix 
// // Jon [0,1,2,3,4].every(3,1) # [1,4]    
// //fix url
// //add to correct component
//       // map.data.overrideStyle((wrappedGeoJson[i]).feature, {fillColor: 'green'})
//     };

//     // When the user hovers, tempt them to click by outlining the wards.
//     map.data.addListener('mouseover', function(event) {
//     map.data.revertStyle();
//     map.data.overrideStyle(event.feature, {fillColor: 'blue'});        
//     //have ward label show in corner
//     var wardLabel = document.createElement("span");
//     wardLabel.textContent = " ";
//     wardLabel.setAttribute("id", "wardLabel");
//     var sty = wardLabel.style;
//     sty.position = "absolute";
//     sty.lineHeight = "1.2em";
//     sty.paddingLeft = "10px";
//     sty.paddingRight = "10px";
//     sty.color = "black";
//     sty.borderRadius = "12px";
//     sty.backgroundColor = "none";
//     sty.fontSize = "24pt";
//     sty.top = event.clientY  + "px";
//     sty.left = event.clientX  + "px";
//     sty.cursor = "pointer";
//     document.body.appendChild(wardLabel);
//     wardLabel.textContent = `ward ${event.feature.j.ward}`;
//     map.controls[google.maps.ControlPosition.TOP_RIGHT].push(wardLabel);
//     });
//       // Bold on Click
//       map.data.addListener('click', function(event) {
//           map.data.overrideStyle(event.feature, {strokeWeight: 5});
//           wardid = event.feature.j.ward
//           //URL
//           // app.get(/:wardid/signin, function (req, res) {
//           // res.send('/a/')
//           // })
//           //root+wardsignin? 
          
//     });

//     // Off hover, revert to gray and unbold
//     map.data.addListener('mouseout', function(event) {
//       // map.data.revertStyle();
//       document.getElementById("wardLabel").parentNode.removeChild(document.getElementById("wardLabel"));
//     });

//     // Create the search box and link it to the UI element.
//     var input = document.getElementById('pac-input');
//     var searchBox = new google.maps.places.SearchBox(input);

//     // Bias the SearchBox results towards current map's viewport.
//     map.addListener('bounds_changed', function() {
//       searchBox.setBounds(map.getBounds());
//     });

//     var markers = [];
//     // Listen for the event fired when the user selects a prediction and retrieve more details for that place.
//     searchBox.addListener('places_changed', function() {
//       var places = searchBox.getPlaces();

//       if (places.length == 0) {
//         return;
//       }

//       // Clear out the old markers.
//       markers.forEach(function(marker) {
//         marker.setMap(null);
//       });
//       markers = [];

//       // For each place, get the icon, name and location.
//       var bounds = new google.maps.LatLngBounds();
//       places.forEach(function(place) {
//         if (!place.geometry) {
//           console.log("Returned place contains no geometry");
//           return;
//         }
//         var icon = {
//           url: place.icon,
//           size: new google.maps.Size(71, 71),
//           origin: new google.maps.Point(0, 0),
//           anchor: new google.maps.Point(17, 34),
//           scaledSize: new google.maps.Size(25, 25),
//           zoom: new google.maps.zoom(6)
//         };

//         // Create a marker for each place.
//         markers.push(new google.maps.Marker({
//           map: map,
//           icon: icon,
//           title: place.name,
//           position: place.geometry.location
//         }));

//         if (place.geometry.viewport) {
//           // Only geocodes have viewport.
//           bounds.union(place.geometry.viewport);
//         } else {
//           bounds.extend(place.geometry.location);
//         }
//       });
//       map.fitBounds(bounds);
//     });

    //   }


//   render() {
    return 
        <div>
            <Navbar bg="dark">
                <Navbar.Brand href="#home">
                    <img
                        // src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Ward Housing Portal"
                    />
            </Navbar.Brand>
            </Navbar>
                    <h2>Ward Housing Portal</h2>
                    <Form inline>
                        <Form.Control id="pac-input" type="text" placeholder="Type in your address to find your ward" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
        <Container fluid>
            <Jumbotron fluid>
                <h1>City Map Of Chicago</h1>
                <div id="map"></div>
            </Jumbotron>
        </Container>
        </div >    
        // );
    }
}

export default Portal;
