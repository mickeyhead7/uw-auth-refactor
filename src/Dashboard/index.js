import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Layout from 'Layout/Default';

const styles = {
  title: {
    marginBottom: 16,
  },
};

const Dashboard = ({ classes }) => (
  <Layout>
    <Typography
      className={classes.title}
      component="h1"
      variant="h6"
    >
        Dashboard
    </Typography>
  </Layout>
);

export default withStyles(styles)(Dashboard);
