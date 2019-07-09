import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ApiConsumer } from '../../providers/InvokeApiContext';
import Bracket from './Bracket';
import styles from './styles';

const BracketElement = props => (
  <ApiConsumer>
    {({ base }) => <Bracket base={base} {...props} />}
  </ApiConsumer>
);

export default withStyles(styles)(BracketElement);
