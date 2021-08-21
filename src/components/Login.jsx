import React, { useState, useEffect } from 'react';
import themeSong from './music/Login.mp3'
import Banjo from './music/Banjo.mp3'
import Game from './music/Game.mp3'
import Logo from './images/Logo.png'
import Mute from './images/Mute.png'
import Unmute from './images/Unmute.png';

const Login = (props) => {
  const {handleLogin} = props;
  const [name, setName] = useState('');
  // const [audio, setAudio] = useState('');

  // const playIt = () => {
  //   const audio = new Audio(themeSong);
  //   audio.play();
  // }
  useEffect(() => {
    const themeSongElement = document.querySelector(".audio-element");
    themeSongElement.play();
    // playIt()
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const gameComponent = document.querySelector(".game")
    gameComponent.style.display = gameComponent.style.display === "none" ? "flex" : "none";
    handleLogin(name, false);
    const start = new Audio(Banjo);
    start.play();
    const gameMusic = new Audio(Game);
    setTimeout(() => {
      gameMusic.play()
    }, 500);
  }

  const handleChange = (event) => {
    setName(event.target.value.toUpperCase());
  }

  const muteAudio = () => {
    const audio = document.querySelector('.audio-element');
    audio.muted = !audio.muted ? true : false;
  }

  const audioIconToggle = () => {
    const audio = document.querySelector('.audio-element');
    return !audio.muted ? Mute : Unmute;
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
            SUBMIT
          </button>
          <audio className="audio-element">
            <source src={themeSong}></source>
          </audio>
          <img
            id="mute"
            onClick={muteAudio}
            src={Unmute}
            alt="Mute/Unmute Icon"
          />
        </form>
      </div>
    </div>
  )
}

export default Login;