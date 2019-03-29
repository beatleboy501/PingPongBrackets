import React from "react";
import { singleValuePropTypes } from './propTypes';
import Typography from "@material-ui/core/Typography";

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

SingleValue.propTypes = singleValuePropTypes;

export default SingleValue;
