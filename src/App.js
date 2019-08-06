import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import FormDemo from "./pages/FormDemo";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Category from "./pages/Category";
import Account from './pages/Account';
import NavigationBar from "./component/NavigationBar";
class App extends Component {
  

  render() {
    return (
      <Router>
        <div className="App">
            <NavigationBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/forms" exact component={FormDemo} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/orders" exact component={Orders} />
              <Route path="/account" exact component={Account} />
              <Route path="/category/:slug"  component={Category} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
