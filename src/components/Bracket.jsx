import React, {Component} from 'react';
import GameResultDialog from "./GameResultDialog";
import '../styles/Bracket.css';

class Bracket extends Component {
  constructor(props){
    super(props);
    this.state = this.props.location.state
    this.state.currentResult = {open: false, game: null, winner: null, loser: null}
    this.handleCloseDialog = this.handleCloseDialog.bind(this)
  }

  findUserById(id) {
    const { users } = this.state;
    return users.find(user => user.id === id)
  }

  updateGameResult(e, game, winner, loser) {
    e && e.preventDefault();
    this.setState({currentResult: {game, winner, loser, open: true}})
  }

  renderTournament() {
    const tournament = [];
    const { rounds } = this.state;
    rounds.forEach((round, index) => {
      const gameList = [];
      round.forEach(game => {
        const {participants} = game;
        const top = this.findUserById(participants[0])
        const bottom = this.findUserById(participants[1])
        gameList.push(
          <React.Fragment key={Math.random()}>
            <li className="spacer">&nbsp;</li>
            <li
              className="game game-top"
              onClick={(e) => this.updateGameResult(e, game, top, bottom)}
            >
              {top && top.first}&nbsp;{top && top.second}
            </li>
            <li className="game game-spacer">&nbsp;</li>
            <li
              className="game game-bottom "
              onClick={(e) => this.updateGameResult(e, game, bottom, top)}
            >
              {bottom && bottom.first}&nbsp;{bottom && bottom.second}
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
    tournament.push( // The Winner
      <ul className={`round round-${rounds + 1}`} key={`round-${rounds + 1}`}>
        <li className="spacer">&nbsp;</li>
        <li className="game game-top">?</li>
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
        onSave={this.handleCloseDialog}
      />
    )
  }

  render() {
    return (
      <main>
        {this.renderTournament()}
        {this.state.currentResult && this.state.currentResult.open && this.renderDialog()}
      </main>
    );
  }
}

export default Bracket;
