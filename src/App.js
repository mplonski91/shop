import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import About from "./components/About";
import Cart from './components/Cart';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Container>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/catalog" component={Catalog} exact />
                <Route path="/about" component={About} />
                <Route path="/cart" component={Cart} />
              </Switch>
            </Container>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
