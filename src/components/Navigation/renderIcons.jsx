import React from 'react';
import Apps from '@material-ui/icons/Apps';
import ExitToApp from '@material-ui/icons/ExitToApp';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const renderIcons = (mainMenu, signOut) => {
  return ['Main Menu', 'Sign Out'].map((text, index) => {
    return index % 2 === 0 ? (
      <ListItem button key={text} onClick={mainMenu}>
        <ListItemIcon>
          <Apps />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ) : (
      <ListItem button key={text} onClick={signOut}>
        <ListItemIcon>
          <ExitToApp />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    )
  })
}

export default renderIcons;
