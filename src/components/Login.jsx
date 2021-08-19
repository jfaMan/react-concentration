import React, { useState, useEffect } from 'react';
import themeSong from './music/Login.mp3'
import Banjo from './music/Banjo.mp3'

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
    setName(event.target.value);
  }

  return (
    <div className="wrapper">
      <div className="login-page">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h4>Banjo-Kazooie Concentration game</h4>
            <label>Enter your name</label>
            <br />
            <input type="text" onChange={handleChange}/>
          </div>
          <button className='btn btn-warning'>
            Submit
          </button>
        </form>
        <audio className="audio-element">
          <source src={themeSong}></source>
        </audio>
      </div>
    </div>
  )
}

export default Login;