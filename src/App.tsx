import Game from './components/Game';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Start from './components/Start';
import GameMusicMp3 from './assets/audio/GameMusicMp3.mp3';
import { useEffect, useState } from 'react';

export default function App() {
  const [showStart, setShowStart] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [score, setScore] = useState(10);
  const [gameMusic] = useState(new Audio(GameMusicMp3));

  useEffect(() => {
    if (!showGame) return;

    setTimeout(() => {
      gameMusic.setAttribute('loop', 'true');
      gameMusic.play();
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showGame]);

  const handleReset = () => {
    gameMusic.pause();
    gameMusic.muted = false;
    gameMusic.currentTime = 0;
    setShowGame(false);
    setShowLogin(true);
    restartScore();
  };

  const handleStart = () => {
    setShowStart(false);
    setShowLogin(true);
  };

  const handleLogin = (name: string) => {
    setPlayerName(name);
    setShowLogin(false);
    setShowGame(true);
  };

  const calculateScore = () => {
    setScore(score ? score - 1 : 10);
  };

  const restartScore = () => {
    setScore(10);
  };

  return (
    <div>
      <Navbar
        name={playerName}
        score={score}
        start={showGame}
        reset={handleReset}
      />
      {showStart && <Start handleStart={handleStart}/>}
      {showLogin && <Login handleLogin={handleLogin}/>}
      {showGame && (
        <Game
          gameMusic={gameMusic}
          playerName={playerName}
          calculateScore={calculateScore}
          score={score}
          restartScore={restartScore}
          reset={handleReset}
        />
      )}
    </div>
  );
};
