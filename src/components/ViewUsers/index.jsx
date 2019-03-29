import React from 'react';
import ViewUsers from './ViewUsers';
import { ApiConsumer } from '../../providers/InvokeApiContext';

const ViewUsersElement = (props) => {
  return(
    <ApiConsumer>
    {({base}) => (<ViewUsers base={base} {...props} />)}
    </ApiConsumer>
  )
}

export default ViewUsersElement;
