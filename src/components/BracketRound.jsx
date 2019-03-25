import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const propTypes = {
  index: PropTypes.number.isRequired,
  gameList: PropTypes.arrayOf(PropTypes.element),
  classes: PropTypes.object
}

const styles = {
  round: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '200px',
    listStyle: 'none',
    padding: 0,
    cursor: 'default'
  },
}

const BracketRound = (props) => {
  const { index, gameList, classes } = props;
  return (
    <ul className={classes.round} key={`round-${index}`}>
      {gameList}
    </ul>
  )
}

BracketRound.propTypes = propTypes;

export default withStyles(styles)(BracketRound);
