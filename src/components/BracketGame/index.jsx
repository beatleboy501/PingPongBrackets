import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { propTypes, defaultProps } from './propTypes';
import styles from './styles';

const BracketGame = ({
  top,
  bottom,
  game,
  updateGameResult,
  classes,
}) => (
  <React.Fragment>
    <li className={classes.spacer}>
      &nbsp;
    </li>
    <button
      className={classes.gameTop}
      data-game-id={game ? game.id : ''}
      role="link"
      tabIndex={0}
      type="button"
      onClick={e => updateGameResult(e, game, top, bottom)}
      onKeyDown={(e) => {
        if (e.keyCode === 13) updateGameResult(e, game, top, bottom);
      }}
    >
      {top && top.given_name}
      &nbsp;
      {top && top.family_name}
    </button>
    <li className={classes.gameSpacer}>
      &nbsp;
    </li>
    <button
      className={classes.gameBottom}
      data-game-id={game ? game.id : ''}
      role="link"
      type="button"
      tabIndex={0}
      onClick={e => updateGameResult(e, game, bottom, top)}
      onKeyDown={(e) => {
        if (e.keyCode === 13) updateGameResult(e, game, bottom, top);
      }}
    >
      {bottom && bottom.given_name}
      &nbsp;
      {bottom && bottom.family_name}
    </button>
    <li className={classes.spacer}>
      &nbsp;
    </li>
  </React.Fragment>
);

BracketGame.propTypes = propTypes;
BracketGame.defaultProps = defaultProps;

export default withStyles(styles)(BracketGame);
