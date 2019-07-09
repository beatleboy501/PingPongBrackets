import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import optionPropTypes from './propTypes';

function Option(props) {
  const {
    children,
    innerRef,
    innerProps,
    isFocused,
    isSelected,
  } = props;
  return (
    <MenuItem
      buttonRef={innerRef}
      selected={isFocused}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
      {...innerProps}
    >
      { children }
    </MenuItem>
  );
}

Option.propTypes = optionPropTypes; /* eslint import/no-named-as-default: 0 */

export default Option;
