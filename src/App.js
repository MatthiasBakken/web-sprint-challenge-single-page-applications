import React from "react";

import { Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Order from './components/Order';
import Confirmation from './components/Confirmation';

import './App.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/pizza">
            Order
          </Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <Order />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
