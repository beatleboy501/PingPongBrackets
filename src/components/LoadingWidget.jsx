import React from 'react';
import '../styles/LoadingWidget.css'

const LoadingWidget = () => {
  return(
    <div className="demo">
      <div className="loading dark">
        <span className="spinner"></span>
        <div>LOADING...</div>
      </div>
    </div>
  )
}

export default LoadingWidget;
