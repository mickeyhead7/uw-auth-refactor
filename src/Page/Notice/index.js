import React from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { noticeUnset } from 'Page/store/actions';
import { noticeSelector } from 'Page/store/reducers';

const Notice = ({ unsetNotice, notice }) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    autoHideDuration={5000}
    message={notice}
    onClose={unsetNotice}
    open={!!notice}
  />
);

const mapStateToProps = state => ({
  notice: noticeSelector(state),
});

const mapDispatchToProps = dispatch => ({
  unsetNotice: () => dispatch(noticeUnset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notice);
