import React from 'react';
import TextField from '@material-ui/core/TextField';
import { controlPropTypes, inputComponentPropTypes } from './propTypes';

export function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = inputComponentPropTypes;

export function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps,
  } = props;
  const { classes, textFieldProps } = selectProps;
  const { input } = classes;
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: input,
          inputRef: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...textFieldProps}
    />
  );
}

Control.propTypes = controlPropTypes;
