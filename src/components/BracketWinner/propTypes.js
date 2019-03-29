import PropTypes from 'prop-types';

export default {
  tournamentWinner: PropTypes.shape({
    given_name: PropTypes.string,
    family_name: PropTypes.string,
  }).isRequired,
  classes: PropTypes.object,
};
