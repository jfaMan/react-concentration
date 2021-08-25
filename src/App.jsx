import React, { useEffect, useState }  from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Game from './components/Game';
import gameMusicMp3 from './components/music/Game.mp3';

const App = () => {
  const [ showLogin, setShowLogin ] = useState(true);
  const [ showGame, setShowGame ] = useState(false);
  const [ playerName, setPlayerName ] = useState("");
  const [ score, setScore ] = useState();
  const [ gameMusic ] = useState(new Audio(gameMusicMp3))

  useEffect(() => {
    setTimeout(() => {
      gameMusic.setAttribute("loop", "true")
      gameMusic.play()
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showGame])

  const handleLogin = (name, boolean) => {
    setPlayerName(name)
    setShowLogin(boolean)
    setShowGame(!boolean)
  }

  const calculateScore = () => {
    setScore(score ? score - 1 : 10);
  }

  const restartScore = () => {
    setScore(10);
  }

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
      )
    } else {
        return null
    }
  }
  
  return (
    <div>
      <Navbar
        name={playerName}
        score={score}
      />
      {showLogin ? <Login handleLogin={handleLogin} calculateScore={calculateScore} /> : null}
      {renderGame()}
    </div>
  )
}

export default App;
