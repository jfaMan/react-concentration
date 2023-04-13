import Game from './components/Game';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Start from './components/Start';
import GameMusicMp3 from './components/music/GameMusicMp3.mp3';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [showStart, setShowStart] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [score, setScore] = useState();
  const [gameMusic] = useState(new Audio(GameMusicMp3));

  useEffect(() => {
    setTimeout(() => {
      gameMusic.setAttribute('loop', 'true');
      gameMusic.play();
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showGame]);

  const handleStart = () => {
    setShowStart(!showStart);
    setShowLogin(!showLogin);
  };

  const handleLogin = (name, boolean) => {
    setPlayerName(name);
    setShowLogin(boolean);
    setShowGame(!boolean);
  };

  const calculateScore = () => {
    setScore(score ? score - 1 : 10);
  };

  const restartScore = () => {
    setScore(10);
  };

  const renderGame = () => {
    if (showGame) {
      return (
        <Game
          gameMusic={gameMusic}
          playerName={playerName}
          calculateScore={calculateScore}
          score={score}
          restartScore={restartScore}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <Navbar
        name={playerName}
        score={score}
        start={showStart}
      />
      {showStart && <Start handleStart={handleStart} />}
      {showLogin && (
        <Login
          handleLogin={handleLogin}
          calculateScore={calculateScore}
        />
      )}
      {renderGame()}
    </div>
  );
};

export default App;
