import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadingStarted, loadingEnded } from 'Page/store/actions';

class AsyncComponent extends Component {
  state = {
    module: null,
  };

  componentDidMount () {
    const { component, startPageLoading, endPageLoading } = this.props;

    startPageLoading();

    component()
      .then(module => this.setState({
        module: module.default,
      }, () => {
        endPageLoading();
      }));
  }

  render () {
    const Module = this.state.module;

    return !!Module ? <Module /> : null;
  }
};

const mapDispatchToProps = dispatch => ({
  startPageLoading: () => dispatch(loadingStarted('page')),
  endPageLoading: () => dispatch(loadingEnded('page')),
});

export default connect(null, mapDispatchToProps)(AsyncComponent);
