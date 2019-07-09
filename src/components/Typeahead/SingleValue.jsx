import React from 'react';
import Typography from '@material-ui/core/Typography';
import { singleValuePropTypes } from './propTypes';

function SingleValue(props) {
  const { children, innerProps, selectProps } = props;
  const { classes } = selectProps;
  const { singleValue } = classes;
  return (
    <Typography
      className={singleValue}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}

SingleValue.propTypes = singleValuePropTypes;

export default SingleValue;
