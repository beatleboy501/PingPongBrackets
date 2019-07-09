import PropTypes from 'prop-types';

export default {
  index: PropTypes.number.isRequired,
  gameList: PropTypes.arrayOf(PropTypes.element),
  classes: PropTypes.object,
};
