import React, { useState } from 'react';
import EndGame from './EndGame'
import Images from './Images'

// Image imports //
import Logo from './images/Logo.png';
import MuteImg from './images/mute-white.png';
import UnmuteImg from './images/unmute-white.png';

const Game = (props) => {
  const { gameMusic, playerName, calculateScore, score } = props;
  const [ showEndGame, setShowEndGame ] = useState(false);
  const [ audioOn, setAudioOn ] = useState(true)

  const handleEndGame = (boolean) => {
    setShowEndGame(boolean)
  }

  const muteAudio = () => {
    gameMusic.muted = !gameMusic.muted ? true : false;
    setAudioOn(!audioOn);
  }

  const audioIconToggle = () => {
    return !audioOn ? MuteImg : UnmuteImg;
  }

  return (
    <div className='game' style={{ display: 'flex' }}>
      <div className="game-left">
        {showEndGame ? <EndGame playerName={playerName} score={score} endGame={handleEndGame}/> : <div></div>}
        <img className="bounce" src={Logo} alt="Logo" />
      </div>
      <Images
        gameMusic={gameMusic}
        handleEndGame={handleEndGame}
        calculateScore={calculateScore}
        score={score}
      />
      <div className="game-right">
        <div className="game-right-mute-btn">
          <img
            className="mute-game"
            onClick={muteAudio}
            src={audioIconToggle()}
            alt="Mute/Unmute Icon"
          />
        </div>
      </div>
    </div>
  )
}

export default Game;