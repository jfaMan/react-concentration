import React, { useState, useEffect } from 'react';
// Audio imports //
import loginSong from './music/Login.mp3';
import Fireplace from './music/Fireplace.mp3';
import Banjo from './music/Banjo.mp3';
// Image imports //
import Logo from './images/Logo.png';
import Mute from './images/Mute.png';
import Unmute from './images/Unmute.png';

const Login = (props) => {
  const { handleLogin, calculateScore, score, playerName } = props;
  const [ inputName, setInputName ] = useState('');
  const [ loginMusic ] = useState(new Audio(loginSong));
  const [ fireplace ] = useState(new Audio(Fireplace))
  const [ audioOn, setAudioOn ] = useState(true)

  useEffect(() => {
    loginMusic.play()
    fireplace.volume = 0.5;
    fireplace.play();
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(inputName, false);
    const start = new Audio(Banjo);
    start.play();
    calculateScore();
  }

  const handleChange = (event) => {
    setInputName(event.target.value.toUpperCase());
  }

  const muteAudio = () => {
    loginMusic.muted = !loginMusic.muted ? true : false;
    setAudioOn(!audioOn);
  }

  const audioIconToggle = () => {
    return !audioOn ? Mute : Unmute;
  }

  return (
    <div className="wrapper">
      <div className="login-page">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <img className="bounce" src={Logo} alt="Logo" />
            <h5>CONCENTRATION GAME</h5>
            <label>ENTER YOUR NAME</label>
            <br />
            <input type="text" onChange={handleChange}/>
          </div>
          <button className='btn btn-warning'>
            START
          </button>
          <img
            className="mute-login"
            onClick={muteAudio}
            src={audioIconToggle()}
            alt="Mute/Unmute Icon"
          />
        </form>
      </div>
    </div>
  )
}

export default Login;