import React from "react";
import { valueContainerPropTypes } from './propTypes';

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

ValueContainer.propTypes = valueContainerPropTypes;

export default ValueContainer;
