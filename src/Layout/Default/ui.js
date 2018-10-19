import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Notice from 'Page/Notice';

const styles = {
  page: {
    height: '100%',
  },
};

const Page = ({ children, classes }) => (
  <div className={classes.page}>
    <Notice />
    {children}
  </div>
);

export default withStyles(styles)(Page);
