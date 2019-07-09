import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ApiConsumer } from '../../providers/InvokeApiContext';
import styles from './styles';
import { defaultProps, propTypes } from './propTypes';
import GameResultDialog from './GameResultDialog';

const GameResultDialogElement = props => (
  <ApiConsumer>
    {({ base }) => <GameResultDialog base={base} {...props} />}
  </ApiConsumer>
);

GameResultDialog.propTypes = propTypes;
GameResultDialog.defaultProps = defaultProps;

export default withStyles(styles)(GameResultDialogElement);
