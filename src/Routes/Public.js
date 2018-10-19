import React from 'react';
import { Route, Switch } from "react-router-dom";
import AsyncPage from 'Page/Async';

const Login = () => import('Auth/Login');
const LoginAsync = () => <AsyncPage component={Login} />;

const PublicRoutes = () => (
  <Switch>
    <Route path="/" exact component={LoginAsync} />
    <Route path="/login" exact component={LoginAsync} />
  </Switch>
);

export default PublicRoutes;
