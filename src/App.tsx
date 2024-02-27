import Game from './components/Game';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Start from './components/Start';
import GameMusicMp3 from './assets/audio/GameMusicMp3.mp3';
import LoginMusic from './assets/audio/LoginMusic.mp3';
import { useState } from 'react';

export default function App() {
  const [showStart, setShowStart] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [score, setScore] = useState(10);
  const [loginMusic] = useState(new Audio(LoginMusic));
  const [gameMusic] = useState(new Audio(GameMusicMp3));

  const handleReset = () => {
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
        login={showLogin}
        game={showGame}
        reset={handleReset}
        loginMusic={loginMusic}
        gameMusic={gameMusic}
      />
      {showStart && <Start handleStart={handleStart}/>}
      {showLogin && <Login handleLogin={handleLogin} loginMusic={loginMusic}/>}
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
