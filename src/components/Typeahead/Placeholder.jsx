import React from 'react';
import Typography from '@material-ui/core/Typography';
import { placeholderPropTypes } from './propTypes';

function Placeholder(props) {
  const { children, innerProps, selectProps } = props;
  const { classes } = selectProps;
  const { placeholder } = classes;
  return (
    <Typography
      color="textSecondary"
      className={placeholder}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}

Placeholder.propTypes = placeholderPropTypes;

export default Placeholder;
