import React, { useState } from 'react';
import EndGame from './EndGame'
import Images from './Images'
import Logo from './images/Logo.png'

const Game = (props) => {
  const { gameMusic, playerName, calculateScore, score } = props;
  const [ showEndGame, setShowEndGame ] = useState(false);

  const handleEndGame = (boolean) => {
    setShowEndGame(boolean)
  }

  return (
    <div className='game' style={{ display: 'none' }}>
      <div className="game-left">
        {showEndGame ? <EndGame playerName={playerName} score={score}/> : <div></div>}
        <img className="bounce" src={Logo} alt="Logo" />
      </div>
      <Images
        gameMusic={gameMusic}
        handleEndGame={handleEndGame}
        calculateScore={calculateScore}
        score={score}
      />
      <div className="game-right">
      </div>
    </div>
  )
}

export default Game;