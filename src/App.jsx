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
  const [ score, setScore ] = useState(0);
  const [ audio ] = useState(new Audio(gameMusic))

  const handleLogin = (name, boolean) => {
    setName(name)
    setShowLogin(boolean)
  }

  const handleEndGame = (boolean) => {
    setShowEndGame(boolean)
  }

  const calculateScore = () => {
    setScore(score + 1);
  }
  return (
    <div>
      <Navbar
        name={name}
        score={score}
      />
      {showLogin ? <Login handleLogin={handleLogin} audio={audio} /> : null}
      {showEndGame ? <EndGame score={score}/> : null}
      <Game audio={audio} handleEndGame={handleEndGame} calculateScore={calculateScore} />
    </div>
  )
}

export default App;
