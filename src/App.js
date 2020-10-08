import React from "react";
import Dashboard from "./Dashboard";
import Topup from "./Topup";
import InputAmount from "./InputAmount";
import Confirmation from "./Confirmation";
import { Header } from "./Component";
import { Footer } from "./Component";
import { Body } from "./Component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Transfer from "./Transfer";

function App() {
  return (
    <Router>
      <div className="bg-size bg d-flex flex-column px-0">
        <div className="">
          <Header />
        </div>

        <div className="container my-4 h-100 ">
          <div className="h-100 row">
            <div className="bg-w radius25 shadow mr-3 py-5 col-3">
              <Body />
            </div>
            <div className="col">
              <Switch>
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
                <Route exact path="/transfer">
                  <Transfer />
                </Route>
                <Route exact path="/topup">
                  <Topup />
                </Route>
                <Route exact path="/input-amount-bank">
                  <InputAmount />
                </Route>
                <Route exact path="/confirmation">
                  <Confirmation />
                </Route>
              </Switch>
            </div>
          </div>
        </div>

        <div className="">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
