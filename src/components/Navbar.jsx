import React from 'react';
import logo from './images/Logo.png';

const Navbar = (props) => {
  const { name, score } = props;
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <div className="game-title">Banjo-Kazooie Concentration</div>
      <div className="name">Name: {name}</div>
      <div className="score">Score: {score}</div>
    </div>
  )
}

export default Navbar;