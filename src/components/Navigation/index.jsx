import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { navigate } from '@reach/router';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Auth } from 'aws-amplify';
import { defaultProps, propTypes } from './propTypes';
import renderIcons from './renderIcons';
import styles from './styles';

class Navigation extends React.Component {
  state = {
    open: false,
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  signOut = async () => {
    await Auth.signOut();
  };

  mainMenu = () => {
    navigate('/');
  }

  render() {
    const { pageTitle, classes, theme } = this.props;
    const { open } = this.state;
    return (
      <div>
        <CssBaseline />
        <AppBar
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          position="fixed"
          color="default"
        >
          <Toolbar className={classes.parent} disableGutters={!open}>
            <div className={classes.menuButtonContainer}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <Typography className={classes.pageTitle} variant="h6" color="inherit">
              {pageTitle}
            </Typography>
            <div className={classes.right} />
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {renderIcons(this.mainMenu, this.signOut)}
          </List>
        </Drawer>
      </div>
    );
  }
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

export default withStyles(styles, { withTheme: true })(Navigation);
