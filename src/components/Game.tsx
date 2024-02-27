import EndGame from './EndGame';
import Images from './Images';
import Logo from '../assets/images/Logo.png';
import { useEffect, useState } from 'react';

type GameProps = {
  gameMusic: HTMLAudioElement;
  playerName: string;
  calculateScore: () => void;
  score: number;
  restartScore: () => void;
  reset: () => void;
};

export default function Game({ gameMusic, playerName, calculateScore, score, restartScore, reset }: GameProps) {
  const [showEndGame, setShowEndGame] = useState(false);
  const [imagesKey, setImagesKey] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      gameMusic.setAttribute('loop', 'true');
      gameMusic.play();
    }, 500);

    return () => {
      gameMusic.pause();
      gameMusic.muted = false;
      gameMusic.currentTime = 0;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleEndGame = (boolean: boolean) => {
    setShowEndGame(boolean);
  };

  const refreshImages = () => {
    gameMusic.currentTime = 0;
    gameMusic.volume = 1;
    gameMusic.play();
    restartScore();
    setImagesKey(imagesKey - 1);
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
            reset={reset}
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
    </div>
  );
};
