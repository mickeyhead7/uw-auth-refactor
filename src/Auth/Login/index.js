import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from 'Auth/lib/loginStatus';
import { signInSubmitted } from 'Auth/store/actions';
import { isSubmittingSelector } from 'Auth/store/reducers';
import Ui from './ui';

class Login extends Component{
  state = {
    partnerId: '',
    password: '',
  };

  render () {
    const { isLoggedIn, isSubmitting } = this.props;

    return isLoggedIn ? (
      <Redirect to="/dashboard" />
    ) : (
      <Ui
        isSubmitting={isSubmitting}
        onSubmit={this.submitLogin}
        onUpdatePartnerId={this.updatePartnerId}
        onUpdatePassword={this.updatePassword}
      />
    );
  }

  updatePartnerId = event => {
    const partnerId = event.target.value;

    this.setState({
      partnerId,
    });
  };

  updatePassword = event => {
    const password = event.target.value;
    
    this.setState({
      password,
    });
  };

  submitLogin = event => {
    event.preventDefault();

    const { submitLogin } = this.props;

    submitLogin(this.state.partnerId, this.state.password);
  };
}

const mapStateToProps = state => ({
  isLoggedIn: isLoggedIn(),
  isSubmitting: isSubmittingSelector(state),
});

const mapDispatchToProps = dispatch => ({
  submitLogin: (partnerId, password) => dispatch(signInSubmitted(partnerId, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
