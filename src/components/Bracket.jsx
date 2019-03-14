import React, {Component} from 'react';
import GameResultDialog from "./GameResultDialog";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { ApiConsumer } from '../providers/InvokeApiContext';
import BracketGame from './BracketGame';
import BracketRound from './BracketRound';
import LoadingWidget from './LoadingWidget';
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
    this.handleSave = this.handleSave.bind(this);
    this.updateGameResult = this.updateGameResult.bind(this);
    this.sortByNextGame = this.sortByNextGame.bind(this);
  }

  async componentWillMount() {
    const { bracketId, base } = this.props;
    const bracket = await fetch(`${base}/bracket/${bracketId}`, {
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

  sortByNextGame(a, b) {
    return a.next_game - b.next_game  ||  a.next_game.localeCompare(b.next_game);
  }

  renderTournament() { // Please do not try to make any sense of this function
    const tournament = [];
    let { rounds } = this.state;
    let lastRound = {}
    Object.keys(rounds).forEach((key) => {
      const index = parseInt(key);
      let round = rounds[index];
      round.sort(this.sortByNextGame)
      let gameList = [];
      if(Object.keys(lastRound).length) {
        const thisRound = Object.assign({}, lastRound)
        lastRound = {}
        Object.keys(thisRound).forEach(gameId => {
          const participants = thisRound[gameId]
          const top = participants && participants[0] ? this.findUserById(participants[0].winner.participantId): null;
          const bottom = participants && participants[1] ? this.findUserById(participants[1].winner.participantId): null;
          const game = round.find(g => g.id === gameId)
          gameList.push(
            <BracketGame key={gameId} top={top} bottom={bottom} game={game} updateGameResult={this.updateGameResult} />,
          );
          lastRound[game.next_game] = lastRound[game.next_game] ? lastRound[game.next_game].concat([game.result]) : [game.result]
        })
      } else {
        round.forEach(game => {
          lastRound[game.next_game] = lastRound[game.next_game] ? lastRound[game.next_game].concat([game.result]) : [game.result]
          const {participants} = game;
          const top = participants && participants.length ? this.findUserById(participants[0]): null;
          const bottom = participants && participants.length ? this.findUserById(participants[1]): null;
          gameList.push(
            <BracketGame key={game.id} top={top} bottom={bottom} game={game} updateGameResult={this.updateGameResult} />,
          );
        });
      }
      tournament.push(
        <BracketRound key={index} index={index} gameList={gameList} />
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

  handleSave(updatedGames) {
    let { rounds } = this.state;
    updatedGames.forEach(game => {
      let round = rounds[game.round]
      const index = round.findIndex(x => x.id === game.id)
      round[index] = game
      rounds[game.round] = round
    })
    this.setState({ rounds })
  }

  renderDialog() {
    const {currentResult} = this.state;
    const {bracketId} = this.props;
    return (
      <GameResultDialog
        bracketId={bracketId}
        onSave={this.handleSave}
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
    return this.state.bracket && this.state.bracket.id && this.state.rounds && Object.keys(this.state.rounds).length ? (
      <main>
        {this.renderBracketHeader()}
        <div id="bracket">
          {this.renderTournament()}
          {this.state.currentResult.open && this.renderDialog()}
        </div>
      </main>
    ) : <LoadingWidget />
  }
}

const BracketElement = (props) => (
  <ApiConsumer>
    {({base}) =>
      <Bracket base={base} {...props} />
    }
  </ApiConsumer>
)

export default BracketElement;
