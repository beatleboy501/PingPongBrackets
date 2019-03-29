import React from 'react';
import { propTypes } from './propTypes';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from '@material-ui/core/Button';

const UnableToUpdateResult = ({currentResult, classes, onClose}) => {
  return (
    <Dialog open={currentResult.open} classes={{paper: classes.dialogPaper}}>
      <DialogContentText style={{ margin: '5rem' }}>Unable to Update Result at This Time</DialogContentText>
      <Button onClick={(e) => {
        e.preventDefault();
        onClose()
      }}>Close</Button>
    </Dialog>
  );
};

UnableToUpdateResult.propTypes = propTypes;

export default UnableToUpdateResult;
