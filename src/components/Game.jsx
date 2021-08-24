import React from 'react';
import Images from './Images'
import Logo from './images/Logo.png'

const Game = (props) => {
  const { gameMusic, handleEndGame, calculateScore, score } = props;
  return (
    <div className='game' style={{ display: 'none' }}>
      <img className="bounce" src={Logo} alt="Logo" />
      <Images
        gameMusic={gameMusic}
        handleEndGame={handleEndGame}
        calculateScore={calculateScore}
        score={score}
      />
    </div>
  )
}

export default Game;