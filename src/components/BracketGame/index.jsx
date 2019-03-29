import React from 'react';
import { propTypes, defaultProps } from './propTypes';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

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

BracketGame.propTypes = propTypes;
BracketGame.defaultProps = defaultProps;

export default withStyles(styles)(BracketGame);
