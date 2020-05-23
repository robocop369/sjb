import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landlord from "./pages/Landlord";
import Homepage from "./pages/Homepage";
// import Gallery from "./pages/Gallery";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route exact path="/" component={Gallery} /> */}
          <Route exact path="/landlord" component={Landlord} />
          <Route exact path="/landlord/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;