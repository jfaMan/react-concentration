import EndGame from './EndGame';
import Images from './Images';
import Logo from './images/Logo.png';
import MuteImg from './images/Mute.png';
import UnmuteImg from './images/Unmute.png';
import React, { useState } from 'react';

type GameProps = {
  gameMusic: HTMLAudioElement;
  playerName: string;
  calculateScore: () => void;
  score: number;
  restartScore: () => void;
};

const Game = ({ gameMusic, playerName, calculateScore, score, restartScore }: GameProps) => {
  const [showEndGame, setShowEndGame] = useState(false);
  const [audioOn, setAudioOn] = useState(true);
  const [imagesKey, setImagesKey] = useState(10);

  const handleEndGame = (boolean: boolean) => {
    setShowEndGame(boolean);
  };

  const refreshImages = () => {
    gameMusic.currentTime = 0;
    gameMusic.volume = 1;
    gameMusic.setAttribute('loop', 'true');
    gameMusic.play();
    restartScore();
    setImagesKey(imagesKey - 1);
  };

  const muteAudio = () => {
    gameMusic.muted = !gameMusic.muted ? true : false;
    setAudioOn(!audioOn);
  };

  const audioIconToggle = () => {
    return !audioOn ? MuteImg : UnmuteImg;
  };

  return (
    <div
      className="game"
      style={{ display: 'flex' }}
    >
      <div className="game-left">
        {showEndGame ? (
          <EndGame
            playerName={playerName}
            score={score}
            handleEndGame={handleEndGame}
            refreshImages={refreshImages}
          />
        ) : (
          <div></div>
        )}
        <img
          // className={score !== 0 && 'bounce'} logical AND returns a type error as it expects a string for className and not false
          className={score !== 0 ? 'bounce' : ''}
          src={Logo}
          alt="Logo"
        />
      </div>
      <Images
        key={imagesKey}
        gameMusic={gameMusic}
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
  );
};

export default Game;
