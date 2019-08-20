import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './HomeComponent'
import About from './AboutComponent'
import Login from './LoginComponent'
import Navbar from './NavbarComponent'

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
