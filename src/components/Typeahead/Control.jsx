import React from 'react';
import { controlPropTypes, inputComponentPropTypes } from './propTypes';
import TextField from "@material-ui/core/TextField";

export function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = inputComponentPropTypes;

export function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

Control.propTypes = controlPropTypes;
