import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import propTypes from './propTypes';
import styles from './styles';

const BracketRound = (props) => {
  const { index, gameList, classes } = props;
  return (
    <ul className={classes.round} key={`round-${index}`}>
      {gameList}
    </ul>
  );
};

BracketRound.propTypes = propTypes;

export default withStyles(styles)(BracketRound);
