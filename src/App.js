import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contacts from "../src/components/contacts/Contacts";
import Header from "../src/components/layout/Header";
import AddContact from "../src/components/contacts/AddContact";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/Test/Test";
import EditContact from "./components/contacts/EditContact";

class App extends Component {
  render() {
    // const name = "Larry";

    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "The Hello Component")
    // );
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/add/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
