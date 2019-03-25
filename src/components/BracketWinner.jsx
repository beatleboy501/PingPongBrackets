import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const propTypes = {
  tournamentWinner: PropTypes.shape({
    given_name: PropTypes.string,
    family_name: PropTypes.string,
  }).isRequired,
  classes: PropTypes.object,
};

const styles = theme => ({
  spacer: {
    flexGrow: '.5'
  },
  gameTop: {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    fontWeight: 'bold',
    '&:hover': {
      color: 'white',
    },
    'span': {
      float: 'right',
      marginRight: 5
    }
  },
  round: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '200px',
    listStyle: 'none',
    padding: 0,
    cursor: 'default'
  }
})

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
