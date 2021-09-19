import React, { useState } from 'react';
import EndGame from './EndGame'
import Images from './Images'

// Image imports //
import Logo from './images/Logo.png';
import MuteImg from './images/Mute.png';
import UnmuteImg from './images/Unmute.png';

const Game = (props) => {
  const { gameMusic, playerName, calculateScore, score, restartScore } = props;
  const [ showEndGame, setShowEndGame ] = useState(false);
  const [ audioOn, setAudioOn ] = useState(true);
  const [ imagesKey, setImagesKey ] = useState(10);

  const handleEndGame = (boolean) => {
    setShowEndGame(boolean)
  }

  const refreshImages = () => {
    gameMusic.currentTime = 0;
    gameMusic.volume = 1;
    gameMusic.setAttribute("loop", "true")
    gameMusic.play()
    restartScore()
    setImagesKey(imagesKey - 1)
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
        {showEndGame ? <EndGame playerName={playerName} score={score} handleEndGame={handleEndGame} refreshImages={refreshImages} /> : <div></div>}
        <img className={score !== 0 && "bounce"} src={Logo} alt="Logo" />
      </div>
      <Images
          key={imagesKey}
          gameMusic={gameMusic}
          showEndGame={showEndGame}
          handleEndGame={handleEndGame}
          calculateScore={calculateScore}
          score={score}
        />
      <div className="game-right">
        <div className="game-mute-container">
          <img
            className="game-mute-btn"
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