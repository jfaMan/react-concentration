import React, { useState }  from 'react';
import Login from './components/Login';
import EndGame from './components/EndGame';
import Navbar from './components/Navbar';
import Game from './components/Game';
import gameMusic from './components/music/Game.mp3';

const App = () => {
  const [ showLogin, setShowLogin ] = useState(true);
  const [ showEndGame, setShowEndGame ] = useState(false);
  const [ name, setName ] = useState("");
  const [ score, setScore ] = useState();
  const [ audio ] = useState(new Audio(gameMusic))

  const handleLogin = (name, boolean) => {
    setName(name)
    setShowLogin(boolean)
  }

  const handleEndGame = (boolean) => {
    setShowEndGame(boolean)
  }

  const calculateScore = () => {
    setScore(score ? score - 1 : 10);
  }
  return (
    <div>
      <Navbar
        name={name}
        score={score}
      />
      {showLogin ? <Login handleLogin={handleLogin} audio={audio} calculateScore={calculateScore}/> : null}
      {showEndGame ? <EndGame score={score}/> : null}
      <Game
        audio={audio}
        handleEndGame={handleEndGame}
        calculateScore={calculateScore}
        score={score} 
      />
    </div>
  )
}

export default App;
