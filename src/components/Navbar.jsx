import React from 'react';
import NavbarLogo from './images/NavbarLogo.png';

const Navbar = (props) => {
  const { name, score } = props;
  return (
    <div className="navbar">
      <img src={NavbarLogo} alt="Logo" />
      {score >= 0 ? <div className="score">TRIES REMAINING: {score}</div> : null}
      <div className="name">PLAYER NAME: {name}</div>
    </div>
  )
}

export default Navbar;