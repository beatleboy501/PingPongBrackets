import React from 'react';
import CreateBracket from './CreateBracket';
import styles from './styles';
import { ApiConsumer } from '../../providers/InvokeApiContext';
import { withStyles } from '@material-ui/core/styles';

const CreateBracketElement = (props) => {
  return(
    <ApiConsumer>
    {({base}) => <CreateBracket base={base} {...props}/>}
    </ApiConsumer>
  )
}

export default withStyles(styles)(CreateBracketElement);
