import React from "react";
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import {navigate} from "@reach/router"
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
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Apps from '@material-ui/icons/Apps';
import ExitToApp from '@material-ui/icons/ExitToApp';
import {Auth} from 'aws-amplify';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.primary.main,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  parent: {
    display: 'flex',
  },
  menuButtonContainer: {
    flex: 1,
    justifyContent: 'left',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  right: {
    flex: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

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

  renderIcons = () => {
    return ['Main Menu', 'Sign Out'].map((text, index) => {
      return index % 2 === 0 ? (
        <ListItem button key={text} onClick={this.mainMenu}>
        <ListItemIcon>
        <Apps />
        </ListItemIcon>
        <ListItemText primary={text} />
        </ListItem>
      ) : (
        <ListItem button key={text} onClick={this.signOut}>
        <ListItemIcon>
        <ExitToApp />
        </ListItemIcon>
        <ListItemText primary={text} />
        </ListItem>
      )
    })
  }

  render(){
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
            {this.renderIcons()}
          </List>
        </Drawer>
      </div>
    );
  }
};

export default withStyles(styles, {withTheme: true})(Navigation);
