import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { isLoggedIn } from 'Auth/lib/loginStatus';
import Public from './Public';
import Private from './Private';

const Routes = ({ loggedIn }) => (
  <BrowserRouter>
    {loggedIn ? <Private /> : <Public />}
  </BrowserRouter>
);

const mapStateToProps = state => ({
  loggedIn: isLoggedIn(),
});

export default connect(mapStateToProps)(Routes);
