import PropTypes from 'prop-types';

export const propTypes = {
  bracketId: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(PropTypes.any),
  currentResult: PropTypes.objectOf(PropTypes.any),
  onClose: PropTypes.func,
  onSave: PropTypes.func,
}

export const defaultProps = {
  classes: {},
  currentResult: {},
  onClose: () => {},
  onSave: () => {},
}
