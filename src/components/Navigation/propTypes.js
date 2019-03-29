import PropTypes from 'prop-types';

export const propTypes = {
  pageTitle: PropTypes.string.isRequired,
  classes: PropTypes.object,
  theme: PropTypes.object,
}

export const defaultProps = {
  classes: {},
  theme: {},
}
