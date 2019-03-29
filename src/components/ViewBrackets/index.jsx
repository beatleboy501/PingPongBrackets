import React from 'react';
import ViewBrackets from './ViewBrackets';
import { ApiConsumer } from '../../providers/InvokeApiContext';

const ViewBracketsElement = (props) => {
  return(
    <ApiConsumer>
    {({base}) => <ViewBrackets base={base} {...props}/>}
    </ApiConsumer>
  )
}

export default ViewBracketsElement;
