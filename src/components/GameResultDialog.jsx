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
import { ApiConsumer } from '../providers/InvokeApiContext'
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
  },
  button: {
    margin: '2rem',
  },
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

const renderDialog = (props, base) => {
  if(!props) return;
  let state = {loserScore: null, winnerScore: null}
  const { bracketId, classes, currentResult, onClose, onSave } = props;
  if (!currentResult.winner || !currentResult.loser) return  <UnableToUpdateResult {...props} />;
  const handleUpdateScore = (participant, score) => {
    state[participant] = score
  }
  const handleSave = async () => {
    debugger
    if(parseInt(state.loserScore) > parseInt(state.winnerScore)) {
      alert("Loser's Score cannot be higher than the Winner's Score")
      return
    }
    const body = {
      bracketId: bracketId,
      nextGameId: currentResult.game.next_game,
      result: {
        winner: {
          participantId: currentResult.winner.sub,
          score: state.winnerScore
        },
        loser: {
          participantId: currentResult.loser.sub,
          score: state.loserScore
        }
      }
    }
    await fetch(`${base}/game/${currentResult.game.id}`, { // TODO: If game already has a result, update the entire bracket
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(res => res.json()).then(data => {
      onSave(data.map(d => d["Attributes"]))
      onClose()
    }).catch(err => console.error(err))
}
  return (
    <Dialog open={currentResult.open} classes={{paper: classes.dialogPaper}}>
      <DialogTitle>Round: {currentResult.game && currentResult.game.round_name}</DialogTitle>
      <DialogContentText>Update Result</DialogContentText>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <PersonIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={
            `Winner: ${currentResult.winner && currentResult.winner.given_name} ${currentResult.winner && currentResult.winner.family_name}`
          }/>
          <TextField
            className={classes.scoreInput}
            label="Score"
            margin="normal"
            variant="outlined"
            type="number"
            onChange={(e) => handleUpdateScore("winnerScore", e.target.value)}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <PersonIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={
            `Loser: ${currentResult.loser && currentResult.loser.given_name} ${currentResult.loser && currentResult.loser.family_name}`
          }/>
          <TextField
            className={classes.scoreInput}
            label="Score"
            margin="normal"
            variant="outlined"
            type="number"
            onChange={(e) => handleUpdateScore("loserScore", e.target.value)}
          />
        </ListItem>
      </List>
      <div>
        <Button className={classes.button} variant="contained" onClick={onClose}>Close</Button>
        <Button className={classes.button} variant="contained" onClick={handleSave}>Save</Button>
      </div>
    </Dialog>
  );
}

const GameResultDialog = (props) => {
  return (
    <ApiConsumer>
      {({base}) => renderDialog(props, base)}
    </ApiConsumer>
  )
};

export default withStyles(styles)(GameResultDialog);
