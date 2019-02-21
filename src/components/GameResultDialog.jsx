import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import TextField from "@material-ui/core/es/TextField/TextField";
import blue from '@material-ui/core/colors/blue';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  dialogPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scoreInput: {
    width: '5rem'
  }
};

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

const GameResultDialog = (props) => {
  if(!props) return;
  const { classes, currentResult, onClose, onSave } = props;
  if (!currentResult.winner || !currentResult.loser) return  <UnableToUpdateResult {...props} />;
  return (
    <Dialog open={currentResult.open} classes={{paper: classes.dialogPaper}}>
      <DialogTitle>Round: {currentResult.game && currentResult.game.round}</DialogTitle>
      <DialogContentText>Update Result</DialogContentText>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <PersonIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={
            `Winner: ${currentResult.winner && currentResult.winner.first} ${currentResult.winner && currentResult.winner.second}`
          }/>
          <TextField
            className={classes.scoreInput}
            label="Score"
            margin="normal"
            variant="outlined"
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <PersonIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={
            `Loser: ${currentResult.loser && currentResult.loser.first} ${currentResult.loser && currentResult.loser.second}`
          }/>
          <TextField
            className={classes.scoreInput}
            label="Score"
            margin="normal"
            variant="outlined"
          />
        </ListItem>
      </List>
      <div>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={onSave}>Save</Button>
      </div>
    </Dialog>
  );
};

export default withStyles(styles)(GameResultDialog);