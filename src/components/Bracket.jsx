import React, {Component} from 'react';
import GameResultDialog from "./GameResultDialog";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import '../styles/Bracket.css';

class Bracket extends Component {
  constructor(props){
    super(props);
      this.state = {
        bracket: {},
        users: [],
        rounds: [],
        currentResult: {
          open: false,
          game: null,
          winner: null,
          loser: null
        }
      }
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.renderTournament = this.renderTournament.bind(this);
    this.findUserById = this.findUserById.bind(this);
  }

  async componentWillMount() {
    const { bracketId } = this.props;
    const bracket = await fetch(`https://83yeog1v01.execute-api.us-east-1.amazonaws.com/mock/api/bracket/${bracketId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then(data => {
      return this.setState({...data})
    }).catch(err => console.error(err))
    return bracket
  }

  findUserById(id) {
    const { users } = this.state;
    return users.find(user => user.sub === id)
  }

  updateGameResult(e, game, winner, loser) {
    e && e.preventDefault();
    this.setState({currentResult: {game, winner, loser, open: true}})
  }

  renderTournament() {
    const tournament = [];
    let { rounds } = this.state;
    rounds.forEach((round, index) => {
      const gameList = [];
      round.forEach(game => {
        const {participants} = game;
        const top = this.findUserById(participants[0]);
        const bottom = this.findUserById(participants[1]);
        gameList.push(
          <React.Fragment key={Math.random()}>
            <li className="spacer">&nbsp;</li>
            <li
              className="game game-top"
              onClick={(e) => this.updateGameResult(e, game, top, bottom)}
            >
              {top && top.given_name}&nbsp;{top && top.family_name}
            </li>
            <li className="game game-spacer">&nbsp;</li>
            <li
              className="game game-bottom "
              onClick={(e) => this.updateGameResult(e, game, bottom, top)}
            >
              {bottom && bottom.given_name}&nbsp;{bottom && bottom.family_name}
            </li>
            <li className="spacer">&nbsp;</li>
          </React.Fragment>,
        );
      });
      tournament.push(
        <ul className={`round round-${index + 1}`} key={`round-${index + 1}`}>
          {gameList}
        </ul>
      );

    });
    const tournamentWinner = (this.state && this.state.bracket && this.state.bracket.winner) ?
      this.findUserById(this.state.bracket.winner) : {given_name: "", family_name: ""}
    tournament.push( // The Winner
      <ul className={`round round-${rounds + 1}`} key={`round-${rounds + 1}`}>
        <li className="spacer">&nbsp;</li>
        <li className="game game-top">{tournamentWinner.given_name} {tournamentWinner.family_name}</li>
        <li className="spacer">&nbsp;</li>
      </ul>,
    );
    return tournament;
  }

  handleCloseDialog(e) {
    e && e.preventDefault();
    this.setState({currentResult: {open: false}});
  }

  renderDialog() {
    const {currentResult} = this.state;
    return (
      <GameResultDialog
        currentResult={currentResult}
        onClose={this.handleCloseDialog}
      />
    )
  }

  renderBracketHeader() {
    const { bracket } = this.state
    return(
      <div>
        <Paper elevation={1} className="bracket-header">
          <Typography variant="h5" component="h3">
            {bracket.title.toString()}
          </Typography>
        </Paper>
      </div>
    )
  }

  render() {
    return this.state.bracket && this.state.rounds ? (
      <main>
        {this.state.bracket.id && this.renderBracketHeader()}
        <div id="bracket">
          {this.state.rounds.length && this.renderTournament()}
          {this.state.currentResult.open && this.renderDialog()}
        </div>
      </main>
    ) : <div />
  }
}

export default Bracket;
