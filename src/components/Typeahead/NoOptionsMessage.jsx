import React from 'react';
import Typography from '@material-ui/core/Typography';
import { noOptionsMessagePropTypes } from './propTypes';

function NoOptionsMessage(props) {
  const { children, innerProps, selectProps } = props;
  const { classes } = selectProps;
  const { noOptionsMessage } = classes;
  return (
    <Typography
      color="textSecondary"
      className={noOptionsMessage}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}

NoOptionsMessage.propTypes = noOptionsMessagePropTypes;

export default NoOptionsMessage;
