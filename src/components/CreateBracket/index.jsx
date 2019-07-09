import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ApiConsumer } from '../../providers/InvokeApiContext';
import CreateBracket from './CreateBracket';
import styles from './styles';

const CreateBracketElement = props => (
  <ApiConsumer>
    {({ base }) => <CreateBracket base={base} {...props} />}
  </ApiConsumer>
);

export default withStyles(styles)(CreateBracketElement);
