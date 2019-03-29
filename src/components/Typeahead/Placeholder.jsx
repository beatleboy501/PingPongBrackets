import React from "react";
import { placeholderPropTypes } from './propTypes';
import Typography from "@material-ui/core/Typography";

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

Placeholder.propTypes = placeholderPropTypes;

export default Placeholder;
