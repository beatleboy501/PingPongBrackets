import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.object.isRequired,
  buttonProps: PropTypes.shape({
    onClick: PropTypes.func,
    label: PropTypes.string,
  }),
  subTitleText: PropTypes.string,
  titleText: PropTypes.string,
  paragraphText: PropTypes.string,
};

export default propTypes;
