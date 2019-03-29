import React from "react";
import { menuPropTypes } from './propTypes';
import Paper from "@material-ui/core/Paper";

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

Menu.propTypes = menuPropTypes;

export default Menu;
