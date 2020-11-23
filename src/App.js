import React from "react";
// import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import AboutUs from "./views/aboutus"
import Contact from "./views/contact"
import Kids from "./views/services/kids"
import Ladies from "./views/services/ladies"
import Men from "./views/services/men"
import Checkout from "./views/cart/checkout"
import Cart from "./views/cart/cart"
import Register from "./views/login/register"
import Login from "./views/login/login"
import Profile from "./views/profile"
import Header from './components/Header/Header'
import LeftHeader from './components/Header/leftheader'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header
          brand="Vicky Tailor"
          leftLinks={<LeftHeader />}
          // rightLinks={<HeaderLinks />}
          fixed
          // color="black"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }} />        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/kids" component={Kids} />
        <Route exact path="/men" component={Men} />
        <Route exact path="/ladies" component={Ladies} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
      </BrowserRouter>
    </>
  );
}

export default App;
