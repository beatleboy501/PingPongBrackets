import PropTypes from 'prop-types';

export const simpleTabPropTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.arrayOf(PropTypes.shape({
    children: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.string
  }))
};

export const tabContainerPropTypes = {
  children: PropTypes.node.isRequired,
};
