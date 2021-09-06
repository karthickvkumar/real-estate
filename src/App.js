import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home';
import Buy from './pages/buy';
import Rent from './pages/rent';
import PropertyInfo from './pages/property-info';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import ForgetPassword from './pages/forget-password';
import Register from './pages/register';
import Dashboard from './pages/admin/dashboard';

import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/bootstrap-datepicker.css';
import './css/animate.css';
import './css/fl-bigmug-line.css';
import './css/aos.css';
import './css/style.css';
import './fonts/icomoon/style.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/buy" component={Buy}></Route>
          <Route path="/rent" component={Rent}></Route>
          <Route path="/property" component={PropertyInfo}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/reset" component={ForgetPassword}></Route>
          <Route path="/admin" component={Dashboard}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;