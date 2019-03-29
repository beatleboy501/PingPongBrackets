import PropTypes from 'prop-types';

export const propTypes = {
  top: PropTypes.shape({
    given_name: PropTypes.string,
    family_name: PropTypes.string,
  }),
  bottom: PropTypes.shape({
    given_name: PropTypes.string,
    family_name: PropTypes.string,
  }),
  game: PropTypes.shape({
    id: PropTypes.string,
  }),
  updateGameResult: PropTypes.func,
  classes: PropTypes.object,
};

export const defaultProps = {
  top: null,
  bottom: null,
  game: null,
  updateGameResult: () => {},
};
