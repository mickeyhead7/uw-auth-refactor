import React from 'react';
import { Route, Switch } from "react-router-dom";
import AsyncPage from 'Page/Async';

const Dashboard = () => import('Dashboard');
const DashboardAsync = () => <AsyncPage component={Dashboard} />;

const PrivateRoutes = () => (
  <Switch>
    <Route path="/dashboard" exact component={DashboardAsync} />
  </Switch>
);

export default PrivateRoutes;
