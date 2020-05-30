import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landlord from "./pages/Landlord";
import Dashboard from "./components/Dashboard/Dashboard";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Portal from "./pages/Portal";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/landlord" component={Landlord} />
          <Route exact path="/landlord/:id" component={Detail} />
          {/* <Route exact path="/portal/" component={Portal} />
          {/* <Route exact path="/portal/:id/signin" component={Portal} /> */}
          {/* <Route exact path="/portal/:id/signup" component={Portal} /> */}
          <Route exact path="/portal" component={Portal} /> */}
          {/* <Route exact path="/signup" component={SignUp} /> */}
          {/* <Route exact path="/testdata" component={TEST} /> */}
          {/* <Route exact path="/chimap" component={ChicagoMap} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
