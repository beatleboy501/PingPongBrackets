import React from 'react';
import Paper from '@material-ui/core/Paper';
import { menuPropTypes } from './propTypes';

function Menu(props) {
  const { children, innerProps, selectProps } = props;
  const { classes } = selectProps;
  const { paper } = classes;
  return (
    <Paper
      square
      className={paper}
      {...innerProps}
    >
      { children }
    </Paper>
  );
}

Menu.propTypes = menuPropTypes;

export default Menu;
