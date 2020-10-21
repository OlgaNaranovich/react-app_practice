import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { routeConfig } from './config/routeConfig';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Profile from './pages/Login/Login';
import Staff from './pages/Staff/Staff';
import Todo from './pages/Todo/Todo';

const Routes = () => {

  return (
    <Switch>
      <Route exact path={routeConfig.home} component={Home} />
      <Route path={routeConfig.news} component={News} />
      <Route path={routeConfig.profile} component={Profile} />
      <Route path={routeConfig.staff} component={Staff} />
      <Route path={routeConfig.todo} component={Todo} />
    </Switch>
  )
}

export default Routes;
