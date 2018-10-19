import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Layout from 'Layout/Default';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
  paper: {
    margin: '0 auto',
    padding: 32,
    width: 320,
  },
  title: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
};

const Login = ({ classes, isSubmitting, onUpdatePartnerId, onUpdatePassword, onSubmit }) => (
  <Layout>
    <div className={classes.wrapper}>
      <Paper className={classes.paper}>
        <Typography
          className={classes.title}
          component="h1"
          variant="h6"
        >
          Login
        </Typography>
        <form onSubmit={onSubmit}>
          <TextField
            className={classes.input}
            fullWidth
            id="partnerId"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onUpdatePartnerId}
            placeholder="Enter your Partner ID"
          />
          <TextField
            className={classes.input}
            fullWidth
            id="password"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onUpdatePassword}
            placeholder="Enter your Password"
          />
          <Button
            color="primary"
            type="submit"
            variant="contained"
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </div>
  </Layout>
);

export default withStyles(styles)(Login);
