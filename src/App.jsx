import React, { useState }  from 'react';
import Login from './components/Login';
import EndGame from './components/EndGame';
import Navbar from './components/Navbar';
import Game from './components/Game';

const App = () => {
  const [ showLogin, setShowLogin ] = useState(true);
  const [ showEndGame, setShowEndGame ] = useState(false);
  const [ name, setName ] = useState("");
  const [ score, setScore ] = useState(0);

  return (
    <div>
      <Navbar
        name={name}
        score={score}
      />
      {showLogin ? <Login /> : null}
      {/* {showEndGame ? <EndGame /> : null} */}
      {/* <Game /> */}
    </div>
  )
}

export default App;
