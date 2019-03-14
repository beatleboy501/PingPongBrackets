import React from 'react'

const BracketGame = (props) => {
  const { top, bottom, game, updateGameResult } = props;
  return (
    <React.Fragment>
      <li className="spacer">&nbsp;</li>
      <li
        className="game game-top"
        data-game-id={game ? game.id : ""}
        onClick={(e) => updateGameResult(e, game, top, bottom)}
      >
        {top && top.given_name}&nbsp;{top && top.family_name}
      </li>
      <li className="game game-spacer">&nbsp;</li>
      <li
        className="game game-bottom"
        data-game-id={game ? game.id : ""}
        onClick={(e) => updateGameResult(e, game, bottom, top)}
      >
        {bottom && bottom.given_name}&nbsp;{bottom && bottom.family_name}
      </li>
      <li className="spacer">&nbsp;</li>
    </React.Fragment>
  )
}

export default BracketGame;
