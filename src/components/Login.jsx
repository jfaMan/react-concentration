import React, { useState, useEffect } from 'react';
import themeSong from './music/Login.mp3'
import Banjo from './music/Banjo.mp3'
import Logo from './images/Logo.png'
import Mute from './images/Mute.png'
import Unmute from './images/Unmute.png';

const Login = (props) => {
  const {handleLogin} = props;
  const [name, setName] = useState('');

  useEffect(() => {
    const themeSongElement = document.querySelector(".audio-element");
    themeSongElement.play();
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(name, false);
    const start = new Audio(Banjo);
    start.play();
  }

  const handleChange = (event) => {
    setName(event.target.value.toUpperCase());
  }

  const muteAudio = () => {
    const audio = document.querySelector('.audio-element');
    !audio.muted ? audio.muted = true : audio.muted = false;
  }

  // const audioIconToggle = () => {
  //   const audio = document.querySelector('.audio-element');
  //   !audio.muted ? Mute : Unmute;
  // }

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
            SUBMIT
          </button>
          <img id="mute" onClick={muteAudio} src={Unmute} alt="Mute/Unmute Icon" />
        </form>
        <audio className="audio-element">
          <source src={themeSong}></source>
        </audio>
      </div>
    </div>
  )
}

export default Login;