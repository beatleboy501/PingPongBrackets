import React from 'react';
import styles from './styles';
import Bracket from './Bracket';
import { ApiConsumer } from '../../providers/InvokeApiContext';
import { withStyles } from '@material-ui/core/styles';

const BracketElement = (props) => (
  <ApiConsumer>
    {({base}) =>
      <Bracket base={base} {...props} />
    }
  </ApiConsumer>
)

export default withStyles(styles)(BracketElement);
