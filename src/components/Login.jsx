import React, { useState, useEffect } from 'react';
// Audio imports //
import themeSong from './music/Login.mp3';
import Fireplace from './music/Fireplace.mp3';
import Banjo from './music/Banjo.mp3';
import Game from './music/Game.mp3';
// Image imports //
import Logo from './images/Logo.png';
import Mute from './images/Mute.png';
import Unmute from './images/Unmute.png';

const Login = (props) => {
  const {handleLogin, audio} = props;
  const [name, setName] = useState('');
  // const [audio, setAudio] = useState('');

  // const playIt = () => {
  //   const audio = new Audio(themeSong);
  //   audio.play();
  // }
  useEffect(() => {
    const themeSongElement = document.querySelector(".theme-audio");
    themeSongElement.play();
    const fireplaceElement = document.querySelector(".fireplace-audio");
    fireplaceElement.volume = 0.6;
    fireplaceElement.play();
    // playIt()
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const gameComponent = document.querySelector(".game")
    gameComponent.style.display = gameComponent.style.display === "none" ? "flex" : "none";
    handleLogin(name, false);
    const start = new Audio(Banjo);
    start.play();
    // const gameMusic = new Audio(Game);
    // const gameMusic = document.querySelector('.game-audio')
    console.log(audio)
    setTimeout(() => {
      // gameMusic.play()
      audio.play()
    }, 500);
  }

  const handleChange = (event) => {
    setName(event.target.value.toUpperCase());
  }

  const muteAudio = () => {
    const audio = document.querySelector('.theme-audio');
    audio.muted = !audio.muted ? true : false;
  }

  const audioIconToggle = () => {
    const audio = document.querySelector('.theme-audio');
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
          <audio className="theme-audio" loop>
            <source src={themeSong}></source>
          </audio>
          <audio className="fireplace-audio" loop>
            <source src={Fireplace}></source>
          </audio>
          <audio className="game-audio" loop>
            <source src={Game}></source>
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