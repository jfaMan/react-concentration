import React from 'react';
import logo from './images/Logo.png';

const Navbar = (props) => {
  const { name, score } = props;
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <div className="game-title">BANJO-KAZOOIE CONCENTRATION</div>
      <div className="name">PLAYER NAME: {name}</div>
      <div className="score">SCORE: {score}</div>
    </div>
  )
}

export default Navbar;