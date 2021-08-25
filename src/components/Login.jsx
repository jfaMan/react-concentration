import React, { useState, useEffect } from 'react';
// Audio imports //
import loginSong from './music/Login.mp3';
import Fireplace from './music/Fireplace.mp3';
import Banjo from './music/Banjo.mp3';
// Image imports //
import Logo from './images/Logo.png';
import MuteImg from './images/Mute.png';
import UnmuteImg from './images/Unmute.png';
import Instructions from './images/Instructions.png'

const Login = (props) => {
  const { handleLogin, calculateScore } = props;
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
    loginMusic.pause()
    fireplace.pause()
    const gameStartBanjoVoice = new Audio(Banjo);
    gameStartBanjoVoice.play();
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
    return !audioOn ? MuteImg : UnmuteImg;
  }

  return (
    <div className="login-screen">
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
      <div className="login-instructions">
        <div className="instructions">
          <h1>INSTRUCTIONS</h1>
          <img src={Instructions} alt="Banjo and Kazooie" />
          <p>GRUNTY'S FURNACE FUN ISN'T OVER! HELP EVERYONE'S FAVOURITE BEAR AND BIRD BY COMPLETING GRUNTILDA'S CONCENTRATION GAME. YOU'LL HAVE A LIMITED AMOUNT OF TRIES TO TRY AND PAIR UP ALL THE MATCHING CARDS.</p>
        </div>
      </div>
    </div>
  )
}

export default Login;