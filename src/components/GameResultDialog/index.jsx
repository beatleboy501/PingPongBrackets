import React from 'react';
import styles from './styles';
import { defaultProps, propTypes } from './propTypes';
import GameResultDialog from './GameResultDialog';
import { withStyles } from '@material-ui/core/styles';
import { ApiConsumer } from '../../providers/InvokeApiContext';

const GameResultDialogElement = (props) => {
  return (
    <ApiConsumer>
      {({base}) => <GameResultDialog base={base} {...props} />}
    </ApiConsumer>
  )
};

GameResultDialog.propTypes = propTypes;
GameResultDialog.defaultProps = defaultProps;

export default withStyles(styles)(GameResultDialogElement);
