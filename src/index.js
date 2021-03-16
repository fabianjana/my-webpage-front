import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import Games from './Games';
import Home from './Home';
import Monopoly from './routes/Games/Monopoly';
import Parchis from './Parchis';
import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink exact to="/games" activeClassName="active">Games</NavLink>
      </nav>

      <Switch>
        <Route exact path="/games/monopoly" component={Monopoly} />
        <Route exact path="/games/parchis" component={Parchis} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);