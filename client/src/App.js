import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landlord from "./pages/Landlord";
import Dashboard from "./components/Dashboard/Dashboard";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import AppNavbar from "./components/AppNavbar";
import AppFooter from "./components/AppFooter";
import Portal from "./pages/Portal";
import { StoreProvider } from './utils/GlobalState';


function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <AppNavbar />

          <Switch>
            <Route exact path="/" component={Portal} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/landlord" component={Landlord} />
            {/* <Route exact path="/landlord/:id" component={Detail} /> */}
            <Route exact path="/portal" component={Portal} />
            <Route exact path="/portal/:id/signin" component={Portal} />
            <Route exact path="/portal/:id/signup" component={Portal} />
            {/* <Route exact path="/portal" component={Portal} /> */}
            {/* <Route exact path="/signup" component={SignUp} /> */}
            {/* <Route exact path="/testdata" component={TEST} /> */}
            {/* <Route exact path="/chimap" component={ChicagoMap} /> */}
            <Route component={NoMatch} />
          </Switch>
          <AppFooter />

        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
