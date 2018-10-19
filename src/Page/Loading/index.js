import React from 'react';
import { connect } from 'react-redux';
import Ui from './ui';
import { isLoading } from 'Page/store/reducers';

const Loading = ({ children, isLoading }) => isLoading ? <Ui /> : children;

const mapStateToProps = state => ({
  isLoading: isLoading(state),
});

export default connect(mapStateToProps)(Loading);
