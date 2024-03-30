// AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Menu from './components/Menu';
import Profile from './components/Profile';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/menu" component={Menu} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
