import React from 'react';
import logo from './images/Navbar.png';

const Navbar = (props) => {
  const { name, score } = props;
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <div className="name">PLAYER NAME: {name}</div>
      <div className="score">SCORE: {score}</div>
    </div>
  )
}

export default Navbar;