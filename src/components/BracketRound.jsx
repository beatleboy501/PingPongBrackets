import React from 'react';

const BracketRound = (props) => {
  const { index, gameList } = props;
  return (
    <ul className={`round round-${index}`} key={`round-${index}`}>
      {gameList}
    </ul>
  )
}

export default BracketRound;
