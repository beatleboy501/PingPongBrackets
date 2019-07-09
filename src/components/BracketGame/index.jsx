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
    <li /* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
      className={classes.gameTop}
      data-game-id={game ? game.id : ''}
      onClick={e => updateGameResult(e, game, top, bottom)}
      onKeyDown={(e) => {
        if (e.keyCode === 13) updateGameResult(e, game, top, bottom);
      }}
    >
      {top && top.given_name}
      &nbsp;
      {top && top.family_name}
    </li>
    <li className={classes.gameSpacer}>
      &nbsp;
    </li>
    <li /* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
      className={classes.gameBottom}
      data-game-id={game ? game.id : ''}
      onClick={e => updateGameResult(e, game, bottom, top)}
      onKeyDown={(e) => {
        if (e.keyCode === 13) updateGameResult(e, game, bottom, top);
      }}
    >
      {bottom && bottom.given_name}
      &nbsp;
      {bottom && bottom.family_name}
    </li>
    <li className={classes.spacer}>
      &nbsp;
    </li>
  </React.Fragment>
);

BracketGame.propTypes = propTypes;
BracketGame.defaultProps = defaultProps;

export default withStyles(styles)(BracketGame);
