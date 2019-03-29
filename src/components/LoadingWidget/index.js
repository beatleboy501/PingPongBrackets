import React from 'react';
import './styles.css'

const LoadingWidget = () => {
  return(
    <div className="demo">
      <div className="loading dark">
        <span className="spinner" />
        <div>LOADING...</div>
      </div>
    </div>
  )
}

export default LoadingWidget;
