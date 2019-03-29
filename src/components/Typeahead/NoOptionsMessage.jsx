import React from 'react';
import { noOptionsMessagePropTypes } from './propTypes';
import Typography from "@material-ui/core/Typography";

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

NoOptionsMessage.propTypes = noOptionsMessagePropTypes;

export default NoOptionsMessage;
