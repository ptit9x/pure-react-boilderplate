import React from 'react';
import { Switch, Link, Route, Redirect } from 'react-router-dom';
import { HomePage, User } from './Main';

const App = () => (
  <div className="Main">
    <div className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user">User</Link></li>
      </ul>
    </div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/user" component={User} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
