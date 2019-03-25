import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const propTypes = {
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

const styles = theme => ({
  spacer: {
    flexGrow: '.5'
  },
  gameTop: {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      color: 'white',
    },
    'span': {
      float: 'right',
      marginRight: 5
    }
  },
  gameBottom: {
    borderTop: `1px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      color: 'white',
    },
    'span': {
      float: 'right',
      marginRight: 5
    }
  },
  gameSpacer: {
    borderRight: `1px solid ${theme.palette.secondary.main}`,
    minHeight: 40,
    flexGrow: 1.5
  }
})

const BracketGame = ({ top, bottom, game, updateGameResult, classes }) => {
  return (
    <React.Fragment>
      <li className={classes.spacer}>&nbsp;</li>
      <li
        className={classes.gameTop}
        data-game-id={game ? game.id : ""}
        onClick={e => updateGameResult(e, game, top, bottom)}
      >
        {top && top.given_name}&nbsp;{top && top.family_name}
      </li>
      <li className={classes.gameSpacer}>&nbsp;</li>
      <li
        className={classes.gameBottom}
        data-game-id={game ? game.id : ""}
        onClick={e => updateGameResult(e, game, bottom, top)}
      >
        {bottom && bottom.given_name}&nbsp;{bottom && bottom.family_name}
      </li>
      <li className={classes.spacer}>&nbsp;</li>
    </React.Fragment>
  )
};

const defaultProps = {
  top: null,
  bottom: null,
  game: null,
  updateGameResult: () => {},
};

BracketGame.propTypes = propTypes;
BracketGame.defaultProps = defaultProps;

export default withStyles(styles)(BracketGame);
