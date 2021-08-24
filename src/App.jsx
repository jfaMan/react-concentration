import React, { useState }  from 'react';
import Login from './components/Login';
import EndGame from './components/EndGame';
import Navbar from './components/Navbar';
import Game from './components/Game';
import gameMusicMp3 from './components/music/Game.mp3';

const App = () => {
  const [ showLogin, setShowLogin ] = useState(true);

  const [ name, setName ] = useState("");
  const [ score, setScore ] = useState();
  const [ gameMusic ] = useState(new Audio(gameMusicMp3))

  const handleLogin = (name, boolean) => {
    setName(name)
    setShowLogin(boolean)
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
      {showLogin ? <Login handleLogin={handleLogin} gameMusic={gameMusic} calculateScore={calculateScore}/> : null}

      <Game
        gameMusic={gameMusic}
        playerName={name}
        calculateScore={calculateScore}
        score={score} 
      />
    </div>
  )
}

export default App;
