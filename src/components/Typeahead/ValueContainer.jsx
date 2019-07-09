import React from 'react';
import { valueContainerPropTypes } from './propTypes';

function ValueContainer(props) {
  const { children, selectProps } = props;
  const { classes } = selectProps;
  const { valueContainer } = classes;
  return (
    <div className={valueContainer}>
      {children}
    </div>
  );
}

ValueContainer.propTypes = valueContainerPropTypes;

export default ValueContainer;
