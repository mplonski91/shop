import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import About from "./components/About";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Container>
            <Switch>
              <Route path="/shop" component={Home} exact />
              <Route path="/catalog" component={Catalog} exact />
              <Route path="/about" component={About} />
            </Switch>
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
