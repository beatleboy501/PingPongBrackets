import React from 'react';
import optionPropTypes from './propTypes';
import MenuItem from "@material-ui/core/MenuItem";

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

Option.propTypes = optionPropTypes;

export default Option;
