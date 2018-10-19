import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { isLoggedIn } from 'Auth/lib/loginStatus';
import Public from './Public';
import Private from './Private';

const Routes = ({ loggedIn }) => (
  <BrowserRouter>
    <Fragment>
      <Public />
      {loggedIn && <Private />}
    </Fragment>
  </BrowserRouter>
);

const mapStateToProps = state => ({
  loggedIn: isLoggedIn(),
});

export default connect(mapStateToProps)(Routes);
