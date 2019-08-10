import React, { Component } from "react";
import "./App.css";
import store  from 'store2';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import FormDemo from "./pages/FormDemo";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Category from "./pages/Category";
import Account from './pages/Account';
import NavigationBar from "./component/NavigationBar";
import Product from "./pages/Product";
import UserManagement from "./pages/admin/UserManagement"
import ProductManagement from "./pages/admin/ProductManagement";
import Auth from "./pages/Auth";
import { getCurrentUser } from "./api/Auth";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsInCart: store.get('itemsInCart') || [],
      user: undefined,
    };
    this.ProductPage = Product(this.addToCart)
  }

  componentDidMount = () => {
    this.authUser();
    document.addEventListener(
      'visibilitychange',
      () => {
        if(!document.hidden) {
          this.setState({
            itemsInCart: store.get('itemsInCart') || []
          });
          this.authUser();
        }
      }
    )
  }

  authUser = async () => {
    const result = await getCurrentUser();
    if(result && result.data) {
      this.setState({user: result.data})
    }
  }
  

  addToCart = (item) => {
    const {itemsInCart} = this.state;
    itemsInCart.push(item);
    this.setState({itemsInCart});
    store.set('itemsInCart', itemsInCart);
  }

  removeFomCart = (index) => {
    console.log(index);
    
    const {itemsInCart}  = this.state;
    
    itemsInCart.splice(index, 1);
    console.log('array of items', itemsInCart);
    this.setState({itemsInCart});
    store.set('itemsInCart', itemsInCart);
  }

  render() {
    const isLoggedIn = this.state.user && this.state.user._id;
    return (
      <Router>
        <div className="App">
            <NavigationBar
              isLoggedIn={isLoggedIn}
              itemsInCart = {this.state.itemsInCart.length}
            />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/auth/:token" exact component={Auth(this.authUser)} />
              <Route path="/forms" exact component={FormDemo} />
              <Route path="/cart" exact component={props => <Cart {...props } items={this.state.itemsInCart} removeFomCart={this.removeFomCart} />} />
              <Route path="/orders" exact component={Orders} />
              <Route path="/account" exact component={Account} />
              <Route path="/admin/users" exact component={UserManagement} />
              <Route path="/admin/products" exact component={ProductManagement} />
              <Route path="/category/:slug"  component={Category} />
              <Route path="/product/:id" component={this.ProductPage} />
              
              <Route component={NotFound} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
