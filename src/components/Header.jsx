import React from "react";
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Header = ({pageTitle}) => {
  return (
    <AppBar style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} position="fixed" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          {pageTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);