import PropTypes from 'prop-types';

export const typeaheadPropTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export const controlPropTypes = {
  selectProps: PropTypes.shape({
    classes: PropTypes.shape({
      input: PropTypes.any,
    })
  }),
  innerRef: PropTypes.func,
  children: PropTypes.any,
  innerProps: PropTypes.object
};

export const valueContainerPropTypes = {
  selectProps: PropTypes.shape({
    classes: PropTypes.shape({
      valueContainer: PropTypes.any,
    })
  }),
  children: PropTypes.any
};

export const inputComponentPropTypes = {
  inputRef: PropTypes.func
};

export const optionPropTypes = {
  innerRef: PropTypes.func,
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
  innerProps: PropTypes.object,
  children: PropTypes.any
};

export const singleValuePropTypes = {
  selectProps: PropTypes.shape({
    classes: PropTypes.shape({
      singleValue: PropTypes.any,
    })
  }),
  innerProps: PropTypes.object,
  children: PropTypes.any
};

export const menuPropTypes = {
  selectProps: PropTypes.shape({
    classes: PropTypes.shape({
      paper: PropTypes.any
    })
  }),
  innerProps: PropTypes.object,
  children: PropTypes.any
};

export const placeholderPropTypes = {
  selectProps: PropTypes.shape({
    classes: PropTypes.shape({
      placeholder: PropTypes.any,
    })
  }),
  innerProps: PropTypes.object,
  children: PropTypes.any
};

export const noOptionsMessagePropTypes = {
  electProps: PropTypes.shape({
    classes: PropTypes.shape({
      noOptionsMessage: PropTypes.any,
    })
  }),
  innerProps: PropTypes.object,
  children: PropTypes.any
}

export default {}
