import React from 'react';
import propTypes from './propTypes';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

const BracketWinner = ({ tournamentWinner, classes }) => {
  return (
    <ul className={classes.round}>
      <li className={classes.spacer}>&nbsp;</li>
      <li className={classes.gameTop}>
        {tournamentWinner.given_name}&nbsp;{tournamentWinner.family_name}
      </li>
      <li className={classes.spacer}>&nbsp;</li>
    </ul>
  )
};

BracketWinner.propTypes = propTypes;

export default withStyles(styles)(BracketWinner);
